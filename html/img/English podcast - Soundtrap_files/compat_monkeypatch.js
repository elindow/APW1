(function () {
// Any patches needed for backwards compatibility.
  var browser = {};

  browser.ua = window.navigator.userAgent;
  browser.ual = browser.ua.toLowerCase();

  browser.isEdge = browser.ual.indexOf(" edge/") != -1;
  browser.isChrome = browser.ual.match(/(chrome|chromium|crios)/) !== null && !browser.isEdge;
  browser.isChromeOS = browser.ual.indexOf('cros ') != -1;
  browser.isSafari = browser.ual.indexOf("safari") != -1 && !browser.isChrome && !browser.isEdge;
  browser.chromeVersionString = browser.ua.match(/(Chrome|Chromium|CriOS)\/([0-9.]+)/);
  browser.chromeVersion = browser.chromeVersionString != null ? browser.chromeVersionString[2].replace(/\..*/, "") : "0";
  browser.safariVersionString = browser.ua.match(/Version\/([0-9.]+)/);
  browser.safariVersion = browser.safariVersionString != null ? browser.safariVersionString[1] : "0";
  browser.isMFOCIOS = browser.ua === 'MFOC_iosApp';
  browser.isIOS = browser.ua.match(/(iPad|iPhone|iPod)/g) !== null || browser.isMFOCIOS;
  browser.iosVersionString = browser.ua.match(/ OS ([0-9_]+)/);
  browser.iosVersion = browser.iosVersionString != null ? browser.iosVersionString[1].replace(/_/g, ".") : "0";
  browser.iosVersionMajor = parseInt(browser.iosVersion.split('.')[0]);

// Safari 9 Touch prototype constructor is wrong
  if (
    (browser.isSafari && browser.safariVersion < 10) ||
    (
      browser.isIOS &&
      browser.iosVersionMajor === browser.iosVersionMajor && // Would be '!== NaN' in a reasonable language
      browser.iosVersionMajor < 10
    )
  ) {
    window.Touch.prototype.constructor = Touch;
  }

// [andrew 2017-09-19] Workaround for Chrome Web Audio bug in versions 60-61.
  if (browser.isChromeOS && browser.isChrome && browser.chromeVersion >= 60 && browser.chromeVersion < 62) {
    window._stAudioContext = window.AudioContext;
    window.AudioContext = function () {
      // Desired buffer size over sample rate, this will be rounded to the closest reasonable
      // buffer size for the device though if its sample rate is different.
      var ac = new window._stAudioContext({'latencyHint': 2048.0 / 48000.0});
      console.log('Using AudioContext.baseLatency', ac.baseLatency);
      return ac;
    };
  }

  if (!!window.navigator.mediaDevices.getUserMedia) {
    window.navigator.getUserMedia = window.navigator.getUserMedia || function (device, successCallback, errorCallback) {
      return window.navigator.mediaDevices.getUserMedia(device)
          .then(successCallback)
          .catch(errorCallback);
    };
  }

  if (!window.MediaStreamEvent) {
      // Legacy event expected by the addstream event callback
      window.MediaStreamEvent = function(type, eventInitDict) {
        this.type = type;
        this.stream = eventInitDict.stream;
      };

      window.MediaStreamEvent.prototype = Object.create(Event.prototype);
  }

  const originalAddEventListener = window.RTCPeerConnection.prototype.addEventListener;
  window.RTCPeerConnection.prototype.addEventListener = function(name, callback) {
    if (name === 'addstream') {
      /*
       * Needs to be defined this way due to a Safari/Zone.js bug:
       *   https://bugs.webkit.org/show_bug.cgi?id=175802
       *   https://github.com/angular/zone.js/issues/883
      */
      this.ontrack = function (event) {
        event.streams.forEach((stream) => callback(new MediaStreamEvent('addstream', {stream})));
      }
    } else {
      originalAddEventListener.bind(this)(name, callback);
    }
  };

})();
