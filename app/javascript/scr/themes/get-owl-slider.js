$(document).ready(function () {
  $("#customers-customers-owl").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    margin: 24,
    autoplay: true,
    smartSpeed: 3000,
    autoplayTimeout:3000,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
      },
      600: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
});
