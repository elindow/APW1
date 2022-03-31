$(document).ready(() => {
  $("iframe").on("load", () => {
    $("iframe").css("opacity", "1");
    $("img").css("opacity", "1");
  });
});
