$(document).ready(() => {
  $.getJSON("https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json", (data) => {
    let index = -1;
    while (index == -1) {
      index = Math.floor(Math.random() * data.length);
      data[index].colors.forEach((color) => {
        let rgb = parseInt(color.substring(1), 16);
        let r = (rgb >> 16) & 0xff;
        let g = (rgb >>  8) & 0xff;
        let b = (rgb >>  0) & 0xff;

        var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        if (luma > 200) {
            index = -1
        }
      });
    }
    $("#background-label").html("Background: <a href=\"https://uigradients.com/#" + data[index].name.replace(/\s/g, '') + "\" target=\"_blank\">" + data[index].name + "</a>");
    $(document.body).css("background", "linear-gradient(" + data[index].colors.toString() + ")");
  });

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=imperial&appid=c43dc67f50678fa8deb7d820b8cc9f69",
        type: "GET",
        dataType: "jsonp",
        success: (data) => {
          $(".lds-heart").css("display", "none");
          $("#header").html(data.weather[0].main + ", " + data.main.temp + "℉");
          $("#description").html("It's a " + data.weather[0].description + " today and feels like " + data.main.feels_like + "℉");
          $("#icon").attr("src", "../visuals/icons/" + data.weather[0].icon + ".png");
          $("#icon").attr("alt", "Icon Code: " + data.weather[0].icon);
          $(".projects-list").css("display", "block");
        }
      });
    });
  }
});
