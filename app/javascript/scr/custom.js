window.openNav = function() {
  $("#mySidenav").addClass("width80");
  $("#nav-res").addClass("opacityon");
  $(".cd-shadow-layer").addClass("displayblock");
  $(".wrapper").addClass("position-fixed-custom");
  $("body").addClass("overflow-fixed");
}

window.closeNav = function() {
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
        setTimeout(function() {
          link.sweetDropdown('show');
        }, 0);
      }
    }
  }, function () {
    $("ul.ullist-inline li .nav-link").sweetDropdown('hide');
  })
});
