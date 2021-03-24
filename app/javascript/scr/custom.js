/*import * as Tracking from './tracking'

window.openNav = function () {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");
  $(".wrapper").addClass("position-fixed-custom");
  $("body").addClass("overflow-fixed");
}

window.closeNav = function () {
  $("#mySidenav").removeClass("width80");
  $("#nav-res").removeClass("opacityon");
  $(".cd-shadow-layer").removeClass("displayblock");
  $(".wrapper").removeClass("position-fixed-custom");
  $("body").removeClass("overflow-fixed");
}

// $(document).on('turbolinks:load', function () {
$(document).ready(function () {
  $(".cd-shadow-layer").click(function () {
    closeNav();
  });

  Tracking.set(window.location.href)

  $(window).scroll(function () {
    var sticky = $(".header-div"),
      scroll = $(window).scrollTop();

    if (scroll >= 190) {
      sticky.addClass("header-bgcolor slideInDown animated");
    } else {
      sticky.removeClass("header-bgcolor slideInDown animated");
    }
  });

  $("ul.ullist-inline > li").hover(function (e) {
    var id = $(this).find(".sweet-dropdown-menu").attr("id");

    if (id) {
      var link = $(this).find("a.nav-link");

      if (link) {
        setTimeout(function () {
          link.sweetDropdown('show');
        }, 0);
      }
    }
  }, function () {
    $("ul.ullist-inline li .nav-link").sweetDropdown('hide');
  })
});


*/
//NEw
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


