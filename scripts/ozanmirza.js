document.body.onload = function() {
  document.getElementById('start').classList.add("fadeInAndMoveUp");
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

function setupData() {
  $.getJSON("../scripts/JSON/ozanmirza.json", function(json) {
    console.log(json); // this will show the info it in firebug console
  });
}

setupData();

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
