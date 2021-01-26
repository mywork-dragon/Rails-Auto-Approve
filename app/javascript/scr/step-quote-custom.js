$(document).ready(function () {
  $(document).on({
    ajaxStart: function(){
      $("body").addClass("loading");
    },
    ajaxStop: function(){
      $("body").removeClass("loading");
    }
  });

  var slider = document.getElementById("credit_score");
  var output = document.getElementById("demo");

  if (slider) {
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    }
  }

  var currentStep = 1;
  var EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;  // eslint-disable-line
  var fileds = ["firstName", "lastName", "email", "phoneNumber", "creditScore",
    "streetAddress", "city", "state", "zipCode", "dateOfBirth", "socialSecurity",
    "vehicleType", "year", "make", "model", "currentPayment", "currentInterestRate", "payoffAmount", "desiredTerm", "vin", "mileage",
  ];

  var steps = {
    1: ["firstName", "lastName", "email", "phoneNumber"],
    2: ["streetAddress", "city", "stateSelect", "zipCode", "dateOfBirth"],
    3: ["vehicleTypeSelect", "yearSelect", "makeSelect", "modelSelect", "currentPayment", "currentInterestRate", "payoffAmount", "desiredTermSelect"],
  };
  function validate(step) {
    var fields = steps[step];
    var valid = true;

    fields.forEach(function(field) {
      var elem = $('#' + field);
      var input = elem.find('input, select');
      var value = input.val();

      if (!value) { // input.prop("required") &&
        elem.addClass('error');
        valid = false;
      } else if (input.prop("name") === "email" && !EMAIL_PATTERN.test(value)) { // input.prop("required")
        valid = false;
        elem.addClass('error');
      } else {
        elem.removeClass('error');
      }
    });

    return valid;
  }

  $("#quote-form").find("input").on("keyup", function() {
    validate(currentStep);
  });

  $("#quote-form").find("select").select(function() {
    validate(currentStep);
  });

  function init() { // Init years
    var ul = $("#yearSelect").find("ul");
    var items = "";

    var data = new Array(20).fill(1).map(function(item, index){return 2020 - index});

    data.forEach(function (item) {
      items = items + "<li class=\"mdl-menu__item\" data-val=\"" + item + "\">" + item + "</li>";
    });

    ul.html(items);
    getmdlSelect.init('#yearSelect');
  }

  init();

  $("#year").on('change', function () {
    var value = $(this).val();

    var jqxhr = $.ajax("https://aa-uat-function-nada.azurewebsites.net/api/years/"+ value + "/makes")
      .done(function(response) {
        const data = response && response.value;

        if (data) {
          var ul = $("#makeSelect").find("ul");
          var items = "";

          data.forEach(function (item) {
            items = items + "<li class=\"mdl-menu__item\" data-val=\"" + item.nadaId + "\">" + item.name + "</li>";
          });

          ul.html(items);
          getmdlSelect.init('#makeSelect');
          $("#make").on('change', makeHandler);
        }
        validate(currentStep);
      })
      .fail(function(error) {
        console.log('error', error)
      });
  });

  function makeHandler() {
    var year = $("#year").val();
    var value = $("input[name='make']").val();

    var jqxhr = $.ajax("https://aa-uat-function-nada.azurewebsites.net/api/years/"+ year + "/makes/" + value + "/models")
      .done(function(response) {
        const data = response && response.value;

        if (data) {
          var ul = $("#modelSelect").find("ul");
          var items = "";

          data.forEach(function (item) {
            items = items + "<li class=\"mdl-menu__item\" data-val=\"" + item.nadaId + "\">" + item.name + "</li>";
          });

          ul.html(items);
          getmdlSelect.init('#modelSelect');
          $("#model").on('change', modelHandler);

          validate(currentStep);
        }
      })
      .fail(function(error) {
        console.log('error', error)
      });
  };

  function modelHandler() {
    var value = $("input[name='model']").val();

    validate(currentStep);
  }

  $("#next-step-2").click(function () {
    if (!validate(1)) return;

    currentStep = 2;

    $("#quote-step02").addClass("active-step");
    $("#quote-step01").addClass("hidden");
    $("#quote-step02").removeClass("hidden");
    $("#quote-step01").removeClass("active-step");

    $("#step-quote-forms-tabs #tabs-step-list-header01")
      .removeClass("active")
      .addClass("done");
    $("#step-quote-forms-tabs #tabs-step-list-header02").addClass("active");
  });

  $("#next-step-3").click(function () {
    if (!validate(2)) return;

    currentStep = 3;

    $("#quote-step03").addClass("active-step");
    $("#quote-step01").addClass("hidden");
    $("#quote-step02").addClass("hidden");
    $("#quote-step03").removeClass("hidden");
    $("#quote-step02").removeClass("active-step");

    $("#step-quote-forms-tabs #tabs-step-list-header01")
      .removeClass("active")
      .addClass("done");
    $("#step-quote-forms-tabs #tabs-step-list-header02")
      .removeClass("active")
      .addClass("done");
    $("#step-quote-forms-tabs #tabs-step-list-header03").addClass("active");

  });

  $("#submit-form").click(function () {
    if (!validate(3)) return;

    var data = {};

    fileds.forEach(function (item) {
      data[item] = $("input[name='" + item + "']").val();
    });

    var jqxhr = $.ajax({
        url: "https://aa-uat-function-nada.azurewebsites.net/api/quote", // TODO replace url with real
        method: "POST",
        data: data,
      })
      .done(function(response) {
        window.location.href = "get-a-quote-congratulations.html";
      })
      .fail(function(error) {
        console.log('error', error)
        window.location.href = "get-a-quote-congratulations.html";
      });
  });

  $("#previous-step-1").click(function () {
    currentStep = 1;

    $("#quote-step01").addClass("active-step");
    $("#quote-step02").addClass("hidden");
    $("#quote-step03").addClass("hidden");
    $("#quote-step01").removeClass("hidden");
    $("#quote-step02").removeClass("active-step");

    $("#step-quote-forms-tabs #tabs-step-list-header01")
      .addClass("active")
      .removeClass("done");
    $("#step-quote-forms-tabs #tabs-step-list-header02").removeClass("active");
  });

  $("#previous-step-2").click(function () {
    currentStep = 2;

    $("#quote-step02").addClass("active-step");
    $("#quote-step01").addClass("hidden");
    $("#quote-step03").addClass("hidden");
    $("#quote-step02").removeClass("hidden");
    $("#quote-step03").removeClass("active-step");

    $("#step-quote-forms-tabs #tabs-step-list-header02")
      .addClass("active")
      .removeClass("done");
    $("#step-quote-forms-tabs #tabs-step-list-header03").removeClass("active");
  });

});
