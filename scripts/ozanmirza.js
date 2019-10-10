let CHARITY_PREFRENCES = undefined;
let PREFRENCES_SECTION = {
  current: 0,
  min: 0,
  max: 5
};
let CHARITY_PREFRENCES_TYPES = {
  proceed: "PROCEED",
  return: "RETURN"
};

document.body.onload = function() {
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
    PREFRENCES_SECTION.current += 1;
    manageSections(CHARITY_PREFRENCES_TYPES.proceed);
  }

  document.getElementById('prefences_back').onclick = function() {
    PREFRENCES_SECTION.current -= 1;
    manageSections(CHARITY_PREFRENCES_TYPES.return);
  }

  document.getElementById('min_employees').oninput = function() {
    document.getElementById('min_employees').style.color = document.getElementById('min_employees').value == "0" ? "lightGray" : "white";
    CHARITY_PREFRENCES.filters.number_of_employees_range.min = parseInt(document.getElementById('min_employees').value);
    manageNextButton(document.getElementById('min_employees').value, document.getElementById('max_employees').value);
  }

  document.getElementById('max_employees').oninput = function() {
    document.getElementById('max_employees').style.color = document.getElementById('max_employees').value == "0" ? "lightGray" : "white";
    CHARITY_PREFRENCES.filters.number_of_employees_range.max = parseInt(document.getElementById('max_employees').value);
    manageNextButton(document.getElementById('min_employees').value, document.getElementById('max_employees').value);
  }

  document.getElementById('min_revenue').oninput = function() {
    document.getElementById('min_revenue').style.color = document.getElementById('min_revenue').value == "0" ? "lightGray" : "white";
    CHARITY_PREFRENCES.financials.total_revenue.min = parseInt(document.getElementById('min_revenue').value);
    manageNextButton(document.getElementById('min_revenue').value, document.getElementById('max_revenue').value);
  }

  document.getElementById('max_revenue').oninput = function() {
    document.getElementById('max_revenue').style.color = document.getElementById('max_revenue').value == "0" ? "lightGray" : "white";
    CHARITY_PREFRENCES.financials.total_revenue.max = parseInt(document.getElementById('max_revenue').value);
    manageNextButton(document.getElementById('max_revenue').value, document.getElementById('max_revenue').value);
  }

  document.getElementById('min_expenses').oninput = function() {
    document.getElementById('min_expenses').style.color = document.getElementById('min_expenses').value == "0" ? "lightGray" : "white";
    CHARITY_PREFRENCES.financials.total_expenses.min = parseInt(document.getElementById('min_expenses').value);
    manageNextButton(document.getElementById('min_expenses').value, document.getElementById('max_expenses').value);
  }

  document.getElementById('max_expenses').oninput = function() {
    document.getElementById('max_expenses').style.color = document.getElementById('max_expenses').value == "0" ? "lightGray" : "white";
    CHARITY_PREFRENCES.financials.total_expenses.max = parseInt(document.getElementById('max_expenses').value);
    manageNextButton(document.getElementById('min_expenses').value, document.getElementById('max_expenses').value);
  }

  document.getElementById('min_assets').oninput = function() {
    document.getElementById('min_assets').style.color = document.getElementById('min_assets').value == "0" ? "lightGray" : "white";
    CHARITY_PREFRENCES.financials.total_assets.min = parseInt(document.getElementById('min_assets').value);
    manageNextButton(document.getElementById('min_assets').value, document.getElementById('max_expenses').value);
  }

  document.getElementById('max_assets').oninput = function() {
    document.getElementById('max_assets').style.color = document.getElementById('max_assets').value == "0" ? "lightGray" : "white";
    CHARITY_PREFRENCES.financials.total_assets.max = parseInt(document.getElementById('max_assets').value);
    manageNextButton(document.getElementById('min_assets').value, document.getElementById('max_assets').value);
  }

  let forms_urls = ["https://www.irs.gov/pub/irs-pdf/f990.pdf",
                    "https://www.irs.gov/pub/irs-pdf/f990pf.pdf",
                    "https://www.irs.gov/charities-non-profits/unrelated-business-income-tax",
                    "https://finance.uw.edu/pafc/sites/default/files/Single_Audit.pdf",
                    "http://people.stern.nyu.edu/adamodar/New_Home_Page/littlebook/assetvalue.htm"];
  for(let i = 0; i < forms_urls.length; i++) {
    if (i != forms_urls.length - 1) {
      document.getElementById('checkbox' + i).onclick = function() {
        document.getElementById('checkbox' + i).parentNode.parentNode.style.backgroundColor = document.getElementById('checkbox' + i).checked ? "#092c3e" : "transparent";
        document.getElementById('forms_help_' + i).style.backgroundColor = document.getElementById('checkbox' + i).checked ? "white" : "#092c3e";
        document.getElementById('forms_help_' + i).style.color = document.getElementById('checkbox' + i).checked ? "#092c3e" : "white";
        document.getElementById('forms_title_' + i).style.color = document.getElementById('checkbox' + i).checked ? "white" : "#092c3e";

        CHARITY_PREFRENCES.filters.form_types.f990 = document.getElementById('checkbox0').checked;
        CHARITY_PREFRENCES.filters.form_types.f990pf = document.getElementById('checkbox1').checked;
        CHARITY_PREFRENCES.filters.form_types.required_to_file_990t = document.getElementById('checkbox2').checked;
        CHARITY_PREFRENCES.filters.audits.a_133_audit_performed = document.getElementById('checkbox3').checked;
      }
    }

    document.getElementById('forms_help_' + i).onclick = function() {
      window.open(forms_urls[i], "_blank").focus();
    }
  }

  setupData();
}

function setupData() {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'https://raw.githubusercontent.com/ozanmirza1/APW1/master/scripts/JSON/ozanmirza.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will
      CHARITY_PREFRENCES = JSON.parse(xobj.responseText);
      document.getElementById('loading').classList.add("dismiss_loading");
      document.getElementById('start').classList.add("fadeInAndMoveUp");
      console.log(CHARITY_PREFRENCES);
    }
  };
  xobj.send();
}

function manageSections(type) {
  if(PREFRENCES_SECTION.current < PREFRENCES_SECTION.max) {
    document.getElementById('prefences_back').classList.add("prefrences_back_" + (PREFRENCES_SECTION.current != PREFRENCES_SECTION.min));
    document.getElementById('section_' + PREFRENCES_SECTION.current).classList.remove("dismiss_section");
    document.getElementById('section_' + PREFRENCES_SECTION.current).classList.add("present_section");
    if(type == CHARITY_PREFRENCES_TYPES.proceed) {
      document.getElementById('section_' + (PREFRENCES_SECTION.current - 1)).classList.remove("present_section");
      document.getElementById('section_' + (PREFRENCES_SECTION.current - 1)).classList.add("dismiss_section");
    } else {
      document.getElementById('section_' + (PREFRENCES_SECTION.current + 1)).classList.remove("present_section");
      document.getElementById('section_' + (PREFRENCES_SECTION.current + 1)).classList.add("dismiss_section");
    }
  } else {
  fetchData();
      document.getElementById('main_list').classList.add("disappear");
  }
}

function manageNextButton(min, max) {
  document.getElementById('next').disabled = parseInt(min) > parseInt(max);
  document.getElementById('next').disabled = min == "" || max == "";
}

function fetchData() {
  var params = {
    // Request parameters
  };

  $.ajax({
    url: "https://apidata.guidestar.org/premier/v1/ftapdf/{ein}?" + $.param(params),
    beforeSend: function(xhrObj) {
        // Request headers
        xhrObj.setRequestHeader("Content-Type","application/json");
        xhrObj.setRequestHeader("Subscription-Key","075274b7222b4483a72ddecd38b2a09e");
    },
    type: "GET",
    // Request body
    data: JSON.stringify(CHARITY_PREFRENCES),
  })
  .done(function(data) {
    alert("success");
    console.log(data);
  })
  .fail(function() {
    alert("error");
  });
}
