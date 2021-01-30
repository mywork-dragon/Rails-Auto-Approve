$(document).ready(function () {

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
  var fileds = ["landing_id", "firstName", "lastName", "email", "phoneNumber", "creditScore",
    "streetAddress", "city", "state", "zipCode", "dateOfBirth", "socialSecurity", "make_name", "model_name",
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

    var jqxhr = $.ajax("https://aa-uat-function-nada.azurewebsites.net/api/years")
      .done(function(response) {
        const data = response && response.value;

        if (data) {
        const yearsFromApi = data.map( year => year.nadaId);
        yearsFromApi.forEach(function (item) {
          items = items + "<li class=\"mdl-menu__item\" data-val=\"" + item + "\">" + item + "</li>";
        });
        ul.html(items);
        getmdlSelect.init('#yearSelect');
        }
      })
      .fail(function(error) {
        console.log('error', error)
      });
  }

  init();

  $(document).on({
    ajaxStart: function(){
      $("body").addClass("loading");
    },
    ajaxStop: function(){
      $("body").removeClass("loading");
    }
  });

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
    var parent = $("input[name='make']"); 
    var value = parent.val();
    $("input[name='make_name]").val(parent.find('option:selected').text());

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
    var parent = $("input[name='model']"); 
    var value = parent.val();
    $("input[name='model_name]").val(parent.find('option:selected').text());

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

  function formatData(data) {
    return {
      landing_id: data.landing_id,
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      date_of_birth: data.dateOfBirth,
      phone: data.phoneNumber,
      estimated_credit_score: data.creditScore,
      street1: data.streetAddress,
      city: data.city,
      state_code: data.state,
      zipcode: data.zipCode,
      last_4_ssn: data.socialSecurity,
      lien_payoff: data.payoffAmount,
      lien_payment: data.currentPayment,
      lien_rate: data.currentInterestRate,
      desired_term: data.desiredTerm,
      vehicle_type: data.vehicleType,
      vehicle_year: data.year,
      vehicle_make_id: data.make,
      vehicle_make_name: data.make_name,
      vehicle_model_id: data.model,
      vehicle_model_name: data.model_name,
      vehicle_mileage: data.mileage,
      vehicle_vin: data.vin,
      job_name: '',
      job_title: '',
      job_wages: '',
      job_years: '',
      job_months: ''
    }
  }

  $("#submit-form").click(function (event) {
    event.preventDefault()
    if (!validate(3)) return;

    var data = {};

    fileds.forEach(function (item) {
      data[item] = $("input[name='" + item + "']").val();
    });

    const postData = formatData(data)

    console.log(postData)
    var jqxhr = $.ajax({
        url: "/leads",
        method: "POST",
        data: { lead: postData },
      })
      .done(function(response) {
        console.log(response)
        // window.location.href = "get-a-quote-congratulations.html";
        window.location.href = "/congratulations";
      })
      .fail(function(error) {
        console.log('error', error.responseText)
        // window.location.href = "get-a-quote-congratulations.html";
        window.location.href = "/congratulations";
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
