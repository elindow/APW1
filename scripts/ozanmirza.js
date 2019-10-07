CHARITY_PREFRENCES = undefined;
PREFRENCES_SECTION = 0;

document.body.onload = function() {
  document.getElementById('start').classList.add("fadeInAndMoveUp");

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
  PREFRENCES_SECTION += 1;
  manageSections();
}

document.getElementById('prefences_back').onclick = function() {
  PREFRENCES_SECTION -= 1;
  manageSections();
}

document.getElementById('min_employees').oninput = function() {
  if(document.getElementById('min_employees').value == "0") {
    document.getElementById('min_employees').style.color = "darkGray";
  } else {
    document.getElementById('min_employees').style.color = "white";
  }
  CHARITY_PREFRENCES.filters.number_of_employees_range.min = parseInt(document.getElementById('min_employees').value);
  manageNextButton();
}

document.getElementById('max_employees').oninput = function() {
  if(document.getElementById('max_employees').value == "0") {
    document.getElementById('max_employees').style.color = "darkGray";
  } else {
    document.getElementById('max_employees').style.color = "white";
  }
  CHARITY_PREFRENCES.filters.number_of_employees_range.max = parseInt(document.getElementById('max_employees').value);
  manageNextButton();
}

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

function manageSections() {
  document.getElementById('prefences_back').classList.add("prefrences_back_" + (PREFRENCES_SECTION == 0));
  document.getElementById('main_list').childNodes.item(PREFRENCES_SECTION    ).classList.add("present_section");
  if(PREFRENCES_SECTION == 0) {
    document.getElementById('main_list').childNodes.item(PREFRENCES_SECTION + 1).classList.add("dismiss_section");
  } else if(PREFRENCES_SECTION == document.getElementById('main_list').childNodes.length - 1) {
    document.getElementById('main_list').childNodes.item(PREFRENCES_SECTION - 1).classList.add("dismiss_section");
  } else {
    document.getElementById('main_list').childNodes.item(PREFRENCES_SECTION - 1).classList.add("dismiss_section");
    document.getElementById('main_list').childNodes.item(PREFRENCES_SECTION + 1).classList.add("dismiss_section");
  }
}

function manageNextButton() {
  document.getElementById('next').disabled = parseInt(document.getElementById('min_employees').value) > parseInt(document.getElementById('max_employees').value);
  document.getElementById('next').disabled = document.getElementById('min_employees').value == "" || document.getElementById('max_employees').value == "";
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
