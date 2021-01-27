$(document).ready( function () {
  var startdate;
  startdate = flatpickr("#datetime-picker1",{
    altInput: true,
    disableMobile: "true",
    enableTime: false,
    altInput: true,
    // altFormat: "j F Y",
    dateFormat: "Y-m-d H:i",
  });
  $("#dob-click").click(function() {
    startdate.toggle()
  });
});
