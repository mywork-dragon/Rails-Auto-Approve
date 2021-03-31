import * as Tracking from '../../scr/tracking'

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', handleScroll);

  // submit event to google tag
  Tracking.set(window.location.href)
  dataLayer.push({'event' : 'basicInfoForm', 'formName' : 'Basic Info'});
});

window.handleScroll = function (ev) {
  let headerElement = document.getElementById("header");

  if (window.scrollY >= 80) {
    if (!headerElement.classList.contains('fixed-header')) {
      headerElement.classList.add('fixed-header');
    }
  } else {
    if (headerElement.classList.contains('fixed-header')) {
      headerElement.classList.remove('fixed-header');
    }
  }
}

// Validation functions
window.required_validation = function (val) {
  if (val && val.length > 0)
    return true;
  else
    return false;
}

window.email_validatioin = function (email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


window.length_validation = function (val, len) {
  if (val && String(val).length == len)
    return true;
  else
    return false;
}

// Show/hide element

window.setItemDisplay = function (id, style) {
  if (form_submitted)
    document.getElementById(id).style.display = style;
}

var cur_page_idx = 1;
var form_submitted = false;

// Form step1
const phone_length = 12;

window.get_required_validation = function (value, id) {
  if (required_validation(value)) {
    setItemDisplay(id, 'none');
    return true;
  } else {
    setItemDisplay(id, 'block');
    return false;
  }
}

window.get_phone_validation = function (value) {
  if (required_validation(value)) {
    setItemDisplay('phone_required', 'none');
    if (length_validation(value, phone_length)) {
      setItemDisplay('phone_invalid', 'none');
      return true;
    } else {
      setItemDisplay('phone_invalid', 'block');
      return false;
    }
  } else {
    setItemDisplay('phone_required', 'block');
    setItemDisplay('phone_invalid', 'none');
    return false;
  }
}

window.get_email_validation = function (value) {
  if (required_validation(value)) {
    setItemDisplay('email_required', 'none');
    if (email_validatioin(value)) {
      setItemDisplay('email_invalid', 'none');
      return true;
    } else {
      setItemDisplay('email_invalid', 'block');
      return false;
    }
  } else {
    setItemDisplay('email_required', 'block');
    setItemDisplay('email_invalid', 'none');
    return false;
  }
}

window.onTextValidation = function (e) {
  var id = e.target.id + "_required";
  get_required_validation(e.target.value, id);
}  

window.onSelectValidation = function (e) {
  var id = e.target.id + "_required";
  get_select_validation(e.target.value, id)
  
}

window.get_select_validation = function (value, id) {
  if (value == '0') {
    setItemDisplay(id, 'block');
    return false;
  } else {
    setItemDisplay(id, 'none');
    return true;
  }
}


//Select Vehicle Step 3
window.onSelectVehicle = function (e){
  document.getElementById('year').innerHTML = "<option disabled='disabled' SELECTED>Year</option>"
  document.getElementById('make').innerHTML = "<option disabled='disabled' SELECTED>Make</option>"
  document.getElementById('model').innerHTML = "<option disabled='disabled' SELECTED>Model</option>"

  if(e.target.value == 'Motorcycle'){
    const years = [
      2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014,
      2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006,
      2005, 2004, 2003, 2002, 2001, 2000
    ];


    years.forEach(function(year) {
      var newOption = new Option(year, year);
      document.getElementById('year').append(newOption);
    });
  }else{

    fetch(`https://aa-prod-function-nada.azurewebsites.net/api/years`, 
      {
        method: 'GET',
      }
    )
    .then((response) => response.json())
    .then((result) => {
      
      const data = result && result.value;
      if (data) {
        const yearsFromApi = data.map( year => year.nadaId); 
        yearsFromApi.forEach(function(year) {
          var newOption = new Option(year, year);
          document.getElementById('year').append(newOption);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

//Select Year Step 3
window.onSelectYear = function (e){
  const vehicle = document.getElementById('vehicle_type').value;
  
  
  document.getElementById('make').innerHTML = "<option disabled='disabled' SELECTED>Make</option>"
  document.getElementById('model').innerHTML = "<option disabled='disabled' SELECTED>Model</option>"

  const value = e.target.value

  if(vehicle == 'Motorcycle'){
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

    Object.keys(makes).forEach(function(id) {
      var newOption = new Option(makes[id], id);
      document.getElementById('make').append(newOption);
    })
  }else{

    fetch(`https://aa-prod-function-nada.azurewebsites.net/api/years/${value}/makes`, 
      {
        method: 'GET',
      }
    )
    .then((response) => response.json())
    .then((result) => {
      
      const data = result && result.value;
      
      if (data) {
        data.forEach(function(item) {
          var newOption = new Option(item.name, item.nadaId);
          document.getElementById('make').append(newOption);
        });
      }


    })
    .catch((error) => {
      console.log(error);
    });

  }
}

//Select Make Step 3
window.onSelectMake= function (e){
  const vehicle = document.getElementById('vehicle_type').value;

  var year = document.getElementById('year').value;
  var value = e.target.value;
  
  document.getElementById('model').innerHTML = "<option disabled='disabled' SELECTED>Model</option>"

  if(vehicle == 'Motorcycle'){
    
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${value}/modelyear/${year}/vehicleType/motorcycle?format=json`, 
      {
        method: 'GET',
      }
    )
    .then((response) => response.json())
    .then((result) => {
      
      const data = result && result.value;
      
      if (data) {
        data.forEach(function(item) {
          var newOption = new Option(item.Model_Name, item.Model_ID);
          document.getElementById('model').append(newOption);
        });
      }

    })
    .catch((error) => {
      console.log(error);
    });




  }else{

    fetch(`https://aa-prod-function-nada.azurewebsites.net/api/years/${year}/makes/${value}/models`, 
      {
        method: 'GET',
      }
    )
    .then((response) => response.json())
    .then((result) => {
      
      const data = result && result.value;
      
      if (data) {
        data.forEach(function(item) {
          var newOption = new Option(item.name, item.nadaId);
          document.getElementById('model').append(newOption);
        });
      }

    })
    .catch((error) => {
      console.log(error);
    });

  }
}


window.onPhone = function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
  get_phone_validation(e.target.value);
}

window.onEmail = function (e) {
  get_email_validation(e.target.value);
}

document.getElementById('cur_credit').innerHTML = '600';
document.getElementById('credit_score').value = 600;

window.onChangeCredit = function (val) {
  document.getElementById('cur_credit').innerHTML = val;
}


var fields = ["source", "landing_id", "first_name", "last_name", "email_address", "phone_number", "credit_score", "affiliate_id",
  "street_address", "city", "state", "zip_code", "birth_date", "social_security", "make_name", "model_name",
  "vehicle_type", "year", "make", "model", "current_payment", "current_interest", "payoff_amount", "desired_term", "vin", "mileage",
  "mortgageBroker"
];

window.form_step1_submit = function (e) {
  e.preventDefault();
  form_submitted = true;

  const firstname_valid = get_required_validation(document.getElementById('first_name').value, 'first_name_required');
  const lastname_valid = get_required_validation(document.getElementById('last_name').value, 'last_name_required');
  const phone_valid = get_phone_validation(document.getElementById('phone_number').value);
  const email_valid = get_email_validation(document.getElementById('email_address').value);
  if (!firstname_valid) {
    scroll_window('first_name');  
  } else if (!lastname_valid){
    scroll_window('last_name');
  } else if (!phone_valid) {
    scroll_window('phone_number');
  } else if (!email_valid) {
    scroll_window('email_address');
  } else {

    if(isMobile()){
      window.scrollTo({top: 40, behavior: 'smooth'});
    }else{
      window.scrollTo({top: 100, behavior: 'smooth'});
    }
    
    var data = {};

    fields.forEach(function (item) {
      if(item){
        let element = document.getElementById(item)
        if(element != null){
          data[item] =element.value 
        } 
      }
    });

    const postData = formatData(data)

    var lead = {
      "lead": postData
    }

    // submit event to google tag
    dataLayer.push({'event' : 'personalInfoForm', 'formName' : 'Personal Info'});
    
    const tokenCsrf = document.querySelector('[name=csrf-token]').content
    

    fetch(`/leads`, 
      {
        method: 'POST',
        body: JSON.stringify({lead:postData}),
        headers: {
          'X-CSRF-TOKEN': tokenCsrf,
          "Content-Type": "application/json"
        },
      }
    )
    .then((response) => response.json())
    .then((result) => {
      document.getElementById('token').value = result.lead.token

      return go_next();
    })
    .catch((error) => {
      showErrorMessage();
      console.log(error);
    });
    
  }
}

// Form step2
const zipcode_len = 5;
const social_len = 4;
const birthdate_len = 10;

window.get_zipcode_validation = function (value) {
  if (required_validation(value)) {
    setItemDisplay('zipcode_required', 'none');
    if (length_validation(value, zipcode_len)) {
      setItemDisplay('zipcode_invalid', 'none');
      return true;
    } else {
      setItemDisplay('zipcode_invalid', 'block');
      return false;
    }
  } else {
    setItemDisplay('zipcode_required', 'block');
    setItemDisplay('zipcode_invalid', 'none');
    return false;
  }
}

window.get_birthdate_validation = function (value) {
  if (required_validation(value)) {
    setItemDisplay('birthdate_required', 'none');
    if (length_validation(value, birthdate_len)) {
      setItemDisplay('birthdate_invalid', 'none');
      return true;
    } else {
      setItemDisplay('birthdate_invalid', 'block');
      return false;
    }
  } else {
    setItemDisplay('birthdate_required', 'block');
    setItemDisplay('birthdate_invalid', 'none');
    return false;
  }
}

window.onSocialSecurity = function (e) {
  get_socialsecurity_validation(e.target.value)
}


window.get_socialsecurity_validation = function (value) {
  if (value.length == 0 || length_validation(value, social_len)) {
    setItemDisplay('social_security_invalid', 'none');
    return true;
  } else {
    setItemDisplay('social_security_invalid', 'block');
    return false;
  }
}  

window.onZipCode = function (e) {
  e.target.value = e.target.value.replace(/[^\d]/,'');
  get_zipcode_validation(e.target.value);
}

window.onBirthDate = function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
  const x1 = x[1]? parseInt(x[1]) : 0;
  const x2 = x[2]? parseInt(x[2]) : 0;
  const x3 = x[3]? parseInt(x[3]) : 0;

  if (x[1].length == 1 && x1 > 1) {
    e.target.value = '';
  } else if (x[1].length == 2 && x1 > 12) {
    e.target.value = x[1].substr(0, 1);
  } else if (x[2].length == 1 && x2 > 3) {
    e.target.value = x[1];
  } else if (x[2].length == 2 && x2 > 31) {
    e.target.value = x[1];
  } else {
    e.target.value = !x[2] ? x[1] : x[1] + '/' + x[2] + (x[3] ? '/' + x[3] : '');
  }
  get_birthdate_validation(e.target.value);
}

window.form_step2_submit = function (e) {
  e.preventDefault();
  form_submitted = true;

  const streetaddress_valid = get_required_validation(document.getElementById('street_address').value, 'street_address_required');
  const city_valid = get_required_validation(document.getElementById('city').value, 'city_required');
  const state_valid = get_select_validation(document.getElementById('state').value, 'state_required');
  const zipcode_valid = get_zipcode_validation(document.getElementById('zip_code').value);
  const birthdate_valid = get_birthdate_validation(document.getElementById('birth_date').value);
  const socialsecurity_valid = get_socialsecurity_validation(document.getElementById('social_security').value);
  if (!streetaddress_valid) {
    scroll_window('street_address');
  } else if (!city_valid) {
    scroll_window('city');
  } else if (!state_valid) {
    scroll_window('state');
  } else if (!zipcode_valid) {
    scroll_window('zip_code');
  } else if (!birthdate_valid) {
    scroll_window('birth_date');
  } else if (!socialsecurity_valid) {
    scroll_window('social_security');
  } else {
    if (isMobile()) {
      window.scrollTo({top: 100, behavior: 'smooth'});
    } else {
      window.scrollTo({top: 80, behavior: 'smooth'});
    }
  }


  if (streetaddress_valid && city_valid && state_valid && zipcode_valid && birthdate_valid && socialsecurity_valid)
  {
    
    var data = {};

    fields.forEach(function (item) {
      if(item){
        let element = document.getElementById(item)
        if(element != null){
          data[item] =element.value 
        } 
      }
    });


    const token = document.getElementById("token").value;
    const postData = formatData(data)

    
    const tokenCsrf = document.querySelector('[name=csrf-token]').content
    
    fetch(`/leads/${token}/step2`, 
      {
        method: 'PUT',
        body: JSON.stringify({lead:postData}),
        headers: {
          'X-CSRF-TOKEN': tokenCsrf,
          "Content-Type": "application/json"
        },
      }
    )
    .then((response) => response.json())
    .then((result) => {
      

      return go_next();
    })
    .catch((error) => {
      showErrorMessage();
      dataLayer.push({'event' : 'vehicleDetailsForm', 'formName' : 'Vehicle Details'});
      console.log(error);
    });
    

  }
  
  

}

// Form step3

window.form_step3_submit = function (e) {
  e.preventDefault();
  form_submitted = true;

  const vehicletype_valid = get_select_validation(document.getElementById('vehicle_type').value, 'vehicle_type_required');
  const year_valid = get_select_validation(document.getElementById('year').value, 'year_required');
  const make_valid = get_select_validation(document.getElementById('make').value, 'make_required');
  const model_valid = get_select_validation(document.getElementById('model').value, 'model_required');
  const currentpayment_valid = get_required_validation(document.getElementById('current_payment').value, 'current_payment_required');
  const currentinterest_valid = get_required_validation(document.getElementById('current_interest').value, 'current_interest_required');
  const payoffamount_valid = get_required_validation(document.getElementById('payoff_amount').value, 'payoff_amount_required');
  const desiredterm_valid = get_select_validation(document.getElementById('desired_term').value, 'desired_term_required');
  
  if (!vehicletype_valid) {
    scroll_window('vehicle_type');
  } else if (!year_valid) {
    scroll_window('year');
  } else if (!make_valid) {
    scroll_window('make');
  } else if (!model_valid) {
    scroll_window('model');
  } else if (!currentpayment_valid) {
    scroll_window('current_payment');
  } else if (!currentinterest_valid) {
    scroll_window('current_interest');
  } else if (!payoffamount_valid) {
    scroll_window('payoff_amount');
  } else if (!desiredterm_valid) {
    scroll_window('desired_term');
  } else {
    if (isMobile()) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }else{
      window.scrollTo({top: 40, behavior: 'smooth'});
    }
  }

  
  if (vehicletype_valid && year_valid && make_valid && model_valid && currentpayment_valid && currentinterest_valid && payoffamount_valid && desiredterm_valid) {
      
    var data = {};

    fields.forEach(function (item) {
      if(item){
        let element = document.getElementById(item)
        if(element != null){
          data[item] =element.value 
        } 
      }
    });


    const token = document.getElementById("token").value;
    const postData = formatData(data)

    
    const tokenCsrf = document.querySelector('[name=csrf-token]').content
    
    fetch(`/leads/${token}/step3`, 
      {
        method: 'PUT',
        body: JSON.stringify({lead:postData}),
        headers: {
          'X-CSRF-TOKEN': tokenCsrf,
          "Content-Type": "application/json"
        },
      }
    )
    .then((response) => response.json())
    .then((result) => {
      

      return go_next();
    })
    .catch((error) => {
      console.log(error.responseText);
      if (error.responseText.match(/Failed to create pre-approval/)) {
        showFailedApproval();
      }else{
        showErrorMessage();
      }
      
    });
  
  }
}

// go next step
window.go_next = function () {
  form_submitted = false;
  if (cur_page_idx < 6) {
    document.querySelector('[data-step="'+cur_page_idx+'"]').style.display = 'none';
    cur_page_idx++;
    document.querySelector('[data-step="'+cur_page_idx+'"]').style.display = 'block';
  }
}

// go previous step 
window.go_previous = function () {
  if (isMobile()) {
    window.scrollTo({top: 100, behavior: 'smooth'});
  } else {
    window.scrollTo({top: 80, behavior: 'smooth'});
  }
  form_submitted = false;
  if (cur_page_idx < 4) {
    document.querySelector('[data-step="'+cur_page_idx+'"]').style.display = 'none';
    cur_page_idx--;
    document.querySelector('[data-step="'+cur_page_idx+'"]').style.display = 'block';
  }
}

window.showErrorMessage = function () {
  form_submitted = false;
  document.querySelector('[data-step="'+cur_page_idx+'"]').style.display = 'none';
  cur_page_idx = 1;
  document.querySelector('[data-step="6"]').style.display = 'block';
}

window.showFailedApproval = function () {
  form_submitted = false;
  document.querySelector('[data-step="'+cur_page_idx+'"]').style.display = 'none';
  cur_page_idx = 1;
  document.querySelector('[data-step="5"]').style.display = 'block';
}



// scroll window to element that has issue
window.scroll_window = function (id) {
  const yOffset = -100; 
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
}

window.isMobile = function () {
  let res = false;
  if (window.innerWidth < 800)
    return true;
};

window.onFocusOutEvent = function (element) {
  if(element.value){
    element.classList.add("has-content");
  }else{
    element.classList.remove("has-content");
  }
}

var inputElements = document.getElementsByClassName("inputAnimation");

for (var i = 0; i < inputElements.length; i++) {
  inputElements[i].addEventListener("focusout", function(event){
    onFocusOutEvent(event.target);
  });
}

window.formatData = function (data) {
  var urls = Tracking.get();

  return {
    source: data.source? data.source : '',
    affiliate_id: data.affiliate_id? data.affiliate_id: '',
    tracking_urls: urls,
    landing_id: data.landing_id,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email_address,
    date_of_birth: data.birth_date? data.birth_date : '',
    phone: data.phone_number,
    estimated_credit_score: data.credit_score? data.credit_score: '',
    street1: data.street_address? data.street_address : '',
    city: data.city? data.city : '',
    state_code: data.state? data.state : '',
    zipcode: data.zip_code? data.zip_code : '',
    last_4_ssn: data.social_security? data.social_security : '',
    lien_payoff: data.payoff_amount? data.payoff_amount : '',
    lien_payment: data.current_payment? data.current_payment : '',
    lien_rate: data.current_interest? data.current_interest:'',
    desired_term: data.desired_term? data.desired_term : '',
    vehicle_type: data.vehicle_type? data.vehicle_type : '',
    vehicle_year: data.year? data.year : '',
    vehicle_make_id: data.make? data.make : '',
    vehicle_make_name: data.make_name? data.make_name : '',
    vehicle_model_id: data.model? data.model : '',
    vehicle_model_name: data.model_name? data.model_name : '',
    vehicle_mileage: data.mileage? data.mileage : '',
    vehicle_vin: data.vin? data.vin : '',
    job_name: '',
    job_title: '',
    job_wages: '',
    job_years: '',
    job_months: '',
    mortgage_broker: data.mortgageBroker? data.mortgageBroker : ''
  }
}