$(document).ready(() => {
  $.getJSON("https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json", (data) => {
    let index = -1;
    while (index == -1) {
      index = Math.floor(Math.random() * data.length);
      data[index].colors.forEach((color) => {
        // if (color)
      });
    }
    $("#background-label").html("Background: <a href=\"https://uigradients.com/#" + data[index].name.replace(/\s/g, '') + "\">" + data[index].name + "</a>");
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
          $("#icon").attr("src", "icons/" + data.weather[0].icon + ".png");
          $("#icon").attr("alt", "Icon Code: " + data.weather[0].icon);
        }
      });
    });
  }
});
