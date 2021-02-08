import * as Tracking from '../tracking'

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
  var fileds = ["source", "landing_id", "firstName", "lastName", "email", "phoneNumber", "creditScore",
    "streetAddress", "city", "state", "zipCode", "dateOfBirth", "socialSecurity", "make_name", "model_name",
    "vehicleType", "year", "make", "model", "currentPayment", "currentInterestRate", "payoffAmount", "desiredTerm", "vin", "mileage",
  ];

  var steps = {
    1: ["firstName", "lastName", "email", "phoneNumber"],
    2: ["streetAddress", "city", "stateSelect", "zipCode", "dateOfBirth"],
    3: ["vehicleTypeSelect", "yearSelect", "makeSelect", "modelSelect", "currentPayment", "currentInterestRate", "payoffAmount", "desiredTermSelect"],
  };

  // add masks
  $('#zipCodeMask').mask('00000');
  $('#dateOfBirthMask').mask('AB/CD/0000', {
		translation: {
			A: { pattern: /[0-1]/ },
			B: { pattern: /[0-9]/ },
			C: { pattern: /[0-3]/ },
			D: { pattern: /[0-9]/ }
		},
		onKeyPress: function(a, b, c, d) {
			if (!a) return;
			let m = a.match(/(\d{1})/g);
      if (!m) return;
      if (parseInt(m[0]) === 0) {
        d.translation.B.pattern = /[1-9]/;
      } else if (parseInt(m[0]) === 1) {
        d.translation.B.pattern = /[0-2]/;
      } else if (parseInt(m[0]) > 1) {
        c.val("0" + m[0] + "/");
      } else {
        d.translation.B.pattern = /[0-9]/;
      }
      
      if (parseInt(m[2]) === 3) {
				d.translation.D.pattern = /[0-1]/;
			} else {
				d.translation.D.pattern = /[0-9]/;
			}
			let temp_value = c.val();
			c.val('');
			c.unmask().mask('AB/CD/0000', d);
			c.val(temp_value);
		}
	})
  .keyup();
  
  // submit event to google tag
  dataLayer.push({'event' : 'basicInfoForm', 'formName' : 'Basic Info'});


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

  $(document).on({
    ajaxStart: function(){
      $("body").addClass("loading");
    },
    ajaxStop: function(){
      $("body").removeClass("loading");
    }
  });

  function isMotorcycle () {
    return $('#vehicleType').val() === 'Motorcycle';
  }

  $('#vehicleType').on('change', function () {
    const ul = $('#yearSelect').find("ul");

    if (isMotorcycle()) {
      var items = "";
      const years = [
        2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014,
        2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006,
        2005, 2004, 2003, 2002, 2001, 2000
      ];
      years.forEach(function(year) {
        items = items + "<li class=\"mdl-menu__item\" data-val=\"" + year + "\">" + year + "</li>";
      });
      ul.html(items);
      getmdlSelect.init('#yearSelect');      
    } else {
      var items = "";
      var jqxhr = $.ajax("https://aa-prod-function-nada.azurewebsites.net/api/years").done(function(response) {
        const data = response && response.value;
        if (data) {
          const yearsFromApi = data.map( year => year.nadaId);
          yearsFromApi.forEach(function (item) {
            items = items + "<li class=\"mdl-menu__item\" data-val=\"" + item + "\">" + item + "</li>";
          });
          ul.html(items);
          getmdlSelect.init('#yearSelect');      
        }
      }).fail(function(error) {
        console.log('error', error)
      });
    }
  });

  $("#year").on('change', function () {
    var value = $(this).val();
    var ul = $("#makeSelect").find("ul");

    if (isMotorcycle()) {
      const makes = {
        1068: 'BIG DOG MOTORCYCLES',
        452: 'BMW',
        8757: 'EXCILE CYCLES',
        10774: 'HARLEY',
        3888: 'HARLEY DAVIDSON',
        474: 'HONDA',
        1768: 'INDIAN MOTORCYCLE',
        510: 'KAWASAKI',
        596: 'KTM',
        2536: 'MV AGUSTA MOTOR',
        2678: 'PIAGGIO AND VESPA',
        3128: 'ROYAL ENFIELD MOTORS',
        509: 'SUZUKI',
        565: 'TRIUMPH',
        567: 'VICTORY',
        564: 'YAMAHA',
        0: 'OTHER'
      };

      var items = "";
      Object.keys(makes).forEach(function(id) {
        items = items + "<li class=\"mdl-menu__item\" data-val=\"" + id + "\">" + makes[id] + "</li>";
      })

      ul.html(items);
      getmdlSelect.init('#makeSelect');
    } else {
      var jqxhr = $.ajax("https://aa-prod-function-nada.azurewebsites.net/api/years/"+ value + "/makes")
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
    }
    $("#make").on('change', makeHandler);
  });

  function makeHandler() {
    var year = $("#year").val();
    var parent = $("input[name='make']"); 
    var value = parent.val();
    var ul = $("#modelSelect").find("ul");

    if (isMotorcycle()) {
      const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${value}/modelyear/${year}/vehicleType/motorcycle?format=json`;
      var jqxhr = $.ajax(url).done(function(response) {
        const data = response && response.Results;
        if (data) {
          var items = "";
          data.forEach(function(item) {
            items = items + `<li class="mdl-menu__item" data-val="${item.Model_ID}">${item.Model_Name}</li>`;
          })
          ul.html(items);
          getmdlSelect.init('#modelSelect');
          $("#model").on('change', modelHandler);
        }
      }).fail(function(error) {
        console.log('error', error)
      });

    } else {
      const url = `https://aa-prod-function-nada.azurewebsites.net/api/years/${year}/makes/${value}/models`;
      var jqxhr = $.ajax(url).done(function(response) {
        const data = response && response.value;

        if (data) {
          var items = "";
          data.forEach(function (item) {
            items = items + "<li class=\"mdl-menu__item\" data-val=\"" + item.nadaId + "\">" + item.name + "</li>";
          });
          ul.html(items);
          getmdlSelect.init('#modelSelect');
          $("#model").on('change', modelHandler);

          validate(currentStep);
        }
      }).fail(function(error) {
        console.log('error', error)
      });
    }
  };

  function modelHandler() {
    var parent = $("input[name='model']"); 
    var value = parent.val();
    validate(currentStep);
  }

  $("#next-step-2").click(function () {
    if (!validate(1)) return;

    var data = {};

    fileds.forEach(function (item) {
      data[item] = $("input[name='" + item + "']").val();
    });

    $("#step-quote-forms-tabs #tabs-step-list-header01")
      .removeClass("active")
      .addClass("done");
    $("#step-quote-forms-tabs #tabs-step-list-header02").addClass("active");

    window.scrollTo(0, 0);

    // submit event to google tag
    dataLayer.push({'event' : 'personalInfoForm', 'formName' : 'Personal Info'});
    const postData = formatData(data)
    var jqxhr = $.ajax({
      url: "/leads",
      method: "POST",
      data: { lead: postData },
    }).done(function(response) {
      currentStep = 2;
      
      $('input[name="token"]').val(response.lead.token)
      $("#quote-step02").addClass("active-step");
      $("#quote-step01").addClass("hidden");
      $("#quote-step02").removeClass("hidden");
      $("#quote-step01").removeClass("active-step");
  
      $("#step-quote-forms-tabs #tabs-step-list-header01")
        .removeClass("active")
        .addClass("done");
      $("#step-quote-forms-tabs #tabs-step-list-header02").addClass("active");  
    }).fail(function(response) {
      showErrorMessage();
      console.log('error', error.responseText);  
    });
  });

  $("#next-step-3").click(function () {
    if (!validate(2)) return;
    currentStep = 3;

    var data = {};

    fileds.forEach(function (item) {
      data[item] = $("input[name='" + item + "']").val();
    });

    const token = $('input[name="token"]').val();
    const postData = formatData(data)
    var jqxhr = $.ajax({
      url: `/leads/${token}/step2`,
      method: "PUT",
      data: { lead: postData }
    }).done(function(response) {
      console.log(response)
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
    }).fail(function(response) {

      window.scrollTo(0, 0);

      // submit event to google tag
      dataLayer.push({'event' : 'vehicleDetailsForm', 'formName' : 'Vehicle Details'});
    });
  });

  function formatData(data) {
    return {
      source: data.source,
      tracking_urls: Tracking.get(),
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

  function showSuccessMessage() {
    if( $('#main-banner-section').length ) {
      $("#main-banner-section").addClass("hidden");
    }
    $("#quote-step03").removeClass("active-step");
    $("#main-get-quote-section").addClass("hidden");
    $("#success-section").removeClass("hidden");
    
    window.scrollTo(0, 0);

    // submit event to google tag
    dataLayer.push({'event' : 'congratulationsPage', 'formName' : 'Congratulations Page'});
  };

  function showFailedApproval() {
    if( $('#main-banner-section').length ) {
      $("#main-banner-section").addClass("hidden");
    }
    $("#quote-step03").removeClass("active-step");
    $("#main-get-quote-section").addClass("hidden");
    $("#failed-approval-section").removeClass("hidden");
    
    window.scrollTo(0, 0);
  }

  function showErrorMessage() {
    if( $('#main-banner-section').length ) {
      $("#main-banner-section").addClass("hidden");
    }
    $("#quote-step03").removeClass("active-step");
    $("#main-get-quote-section").addClass("hidden");
    $("#error-section").removeClass("hidden");
    window.scrollTo(0, 0);
  };

  $("#submit-form").click(function (event) {
    event.preventDefault()
    if (!validate(3)) return;

    var data = {};

    fileds.forEach(function (item) {
      data[item] = $("input[name='" + item + "']").val();
    });

    const token = $('input[name="token"]').val();
    const postData = formatData(data)

    var jqxhr = $.ajax({
        url: `/leads/${token}/step3`,
        method: "PUT",
        data: { lead: postData },
      })
      .done(function(response) {
        showSuccessMessage();
      })
      .fail(function(error) {
        console.log(error)
        if (error.responseText.match(/Failed to create pre-approval/)) {
          showFailedApproval();
        } else {
          showErrorMessage();
        }
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
    
    window.scrollTo(0, 0);
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
    
    window.scrollTo(0, 0);
  });

});
