$(document).on('turbolinks:load', function () {
  // Open dashboard sidebar on mobile screens
  $("#sidebar-toggle").on("click", () => {
    $("#dashboard-sidebar").addClass("left-0").removeClass("-left-full");
    $("#dashboard-content").addClass("opacity-50").removeClass("opacity-100");
  });

  // Close dashboard sidebar on mobile screens
  $("#sidebar-close").on("click", () => {
    $("#dashboard-sidebar").addClass("-left-full").removeClass("left-0");
    $("#dashboard-content").addClass("opacity-100").removeClass("opacity-50");
  });

});