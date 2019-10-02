document.body.onload = function() {
  document.getElementById('start').classList.add("fadeInAndMoveUp");
}

document.getElementById('start').onclick = function() {
  document.getElementById('main_title').classList.add("disappear");
  document.getElementById('sub_title').classList.add("disappear");
  document.getElementById('start').classList.add("disappear");
  document.getElementById('main_list').classList.add("presentList");
  document.getElementById('back').classList.add("presentBack");
}

document.getElementById('back').onclick = function() {
  document.getElementById('main_title').classList.remove("disappear");
  document.getElementById('sub_title').classList.remove("disappear");
  document.getElementById('start').classList.remove("disappear");
  document.getElementById('main_list').classList.remove("presentList");
  document.getElementById('back').classList.remove("presentBack");
}

$(function() {
    var params = {
        // Request parameters
    };

    $.ajax({
        url: "https://apidata.guidestar.org/essentials/v2?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Subscription-Key","ce6fde96a16341c494b9af56b5fcdf92");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        alert("success: " + data);
    })
    .fail(function(data) {
        alert("error: " + data);
    });
});
