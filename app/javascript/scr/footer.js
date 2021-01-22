$(document).on('turbolinks:load', function () {
  $(".collapsable-slide").collapsable({
    fx: "slide",
    fxDuration: 300,
  });
});