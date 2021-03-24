document.addEventListener("DOMContentLoaded", function () {
  new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    autoplay: true,
    pagination: false,
    arrows: false,
    interval: 4000,
    speed: 4000,
    waitForTransition: false,
    perMove: 1,
    gap: 32,
    breakpoints: {
      1280: { perPage: 2, gap: 24 },
      840: { perPage: 1, gap: 16 },
    },
  }).mount();
  window.addEventListener('scroll', handleScroll);
});


window.handleScroll = function (ev) {
  let headerElement = document.getElementById("header");

  if (window.scrollY >= 100) {
    if (!headerElement.classList.contains('fixed-header')) {
      headerElement.classList.add('fixed-header');
    }
  } else {
    if (headerElement.classList.contains('fixed-header')) {
      headerElement.classList.remove('fixed-header');
    }
  }
}


