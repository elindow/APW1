ChromeplugApi = (function() {
  var that = {};
  var callbackId = 0;
  var successCallbacks = {};
  var errorCallbacks = {};
  that.isInited = false;
  var module;

  that.inited = function(){
    return that.isInited;
  };

  that.supported = function() {
    return typeof navigator.mimeTypes['application/x-pnacl'] !== 'undefined';
  };

  that.init = function(chromeplugModule) {
    if (!that.supported()) {
      // in ms edge, we get a load event but it still is not supported.
      return;
    }

    module = chromeplugModule;

    // FIXME: See https://soundtrap.atlassian.net/browse/SOUN-2169
    that.isInited = module && module.postMessage; //TODO: Maybe investigate this issue

    module.addEventListener('message', function(message) {
      var data = message.data;
      // id, success, result
      var id = data.id;
      var success = data.success;
      var result = data.result;
      try {
        if (success) {
          if (successCallbacks[id]) {
            successCallbacks[id].apply(null, [result]);
          } else {
            console.log("successCallback undefined for id=", id);
          }
        } else {
          if (errorCallbacks[id]) {
            errorCallbacks[id].apply(null, [result]);
          } else {
            console.log("errorCallbacks undefined for id=", id);
          }
        }
      } catch(e) {
        console.log('Could not send callback for', message);
        // TODO: Look into if this is not working, why???
      } finally {
        delete successCallbacks[id];
        delete errorCallbacks[id];
      }
    });
  };
  
  var postToModule = function(method, args, success, error) {
    var id = callbackId++;
    successCallbacks[id] = success;
    errorCallbacks[id] = error;
    // console.log("postToModule for id=" + id, "method=", method, "successCallback=", successCallbacks, "errorCallback=", errorCallbacks);
    module.postMessage({method:method, id:id, args:args});
  };
  
  that.getEncoders = function(success, error) {
    postToModule("getEncoders", [], success, error);
  };
  
  that.encodeStart = function(codec, options, success, error) {
    postToModule("encodeStart", [codec, options], success, error);
  };
  
  that.encodeChunk = function(handle, channelData, success, error) {
    postToModule("encodeChunk", [handle, channelData], success, error);
  };
  
  that.encodeEnd = function(handle, success, error) {
    postToModule("encodeEnd", [handle], success, error);
  };
  
  return that;
})();