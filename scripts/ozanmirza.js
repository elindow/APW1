CHARITY_PREFRENCES = undefined;

document.body.onload = function() {
  document.getElementById('start').classList.add("fadeInAndMoveUp");

  function setupData() {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://raw.githubusercontent.com/ozanmirza1/APW1/master/scripts/JSON/ozanmirza.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        CHARITY_PREFRENCES = JSON.parse(xobj.responseText);
      }
    };
    xobj.send();
  }

  setupData();
}

document.getElementById('start').onclick = function() {
  document.getElementById('main_title').classList.add("disappear");
  document.getElementById('sub_title').classList.add("disappear");
  document.getElementById('start').classList.add("disappear");
  document.getElementById('main_list').classList.add("presentList");
  document.getElementById('back').classList.add("presentBack");
  document.getElementById('next').classList.add("presentNext");
}

document.getElementById('back').onclick = function() {
  document.getElementById('main_title').classList.remove("disappear");
  document.getElementById('sub_title').classList.remove("disappear");
  document.getElementById('start').classList.remove("disappear");
  document.getElementById('main_list').classList.remove("presentList");
  document.getElementById('back').classList.remove("presentBack");
  document.getElementById('next').classList.remove("presentNext");
}

document.getElementById('next').onclick = function() {
  document.getElementById('employees_range').classList.add("dismiss_section");
}

document.getElementById('min_employees').oninput = function() {

}

document.getElementById('max_employees').oninput = function() {

}

function fetchData() {
    $.ajax({
        url: "https://apidata.guidestar.org/essentials/v2?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Subscription-Key","ce6fde96a16341c494b9af56b5fcdf92");
        },
        type: "GET",
        // Request body
        data: "{}",
    })
    .done(function(data) {
        alert("success: " + data);
    })
    .fail(function(data) {
        alert("error: " + data);
    });
}
