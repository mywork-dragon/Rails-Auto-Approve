window.onFocusOutEvent = function (element) {
  if(element.value){
    element.classList.add("has-content");
  }else{
    element.classList.remove("has-content");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var inputElements = document.getElementsByClassName("inputAnimation");

  for (var i = 0; i < inputElements.length; i++) {
    
    inputElements[i].addEventListener("focusout", function(event){
      onFocusOutEvent(event.target);
    });
  }
})
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

// Show/hide element
window.setItemDisplay = function (id, style) {
  if (form_submitted)
    document.getElementById(id).style.display = style;
}

window.get_required_validation = function (value, id) {
  if (required_validation(value)) {
    setItemDisplay(id, 'none');
    return true;
  } else {
    setItemDisplay(id, 'block');
    return false;
  }
}

window.get_email_validation = function (value, id) {
  if (required_validation(value)) {
    setItemDisplay(id+'_required', 'none');
    if (email_validatioin(value)) {
      setItemDisplay(id+'_invalid', 'none');
      return true;
    } else {
      setItemDisplay(id+'_invalid', 'block');
      return false;
    }
  } else {
    setItemDisplay(id+'_required', 'block');
    setItemDisplay(id+'_invalid', 'none');
    return false;
  }
}

window.onTextValidation = function (e) {
  var id = e.target.id + "_required";
  get_required_validation(e.target.value, id);
}  

window.onEmail = function (e) {
  get_email_validation(e.target.value, e.target.id);
}

window.get_match_validation = function (newVal, confirmVal, id) {
  if (newVal === confirmVal) {
    setItemDisplay(id, 'none');
    return true;
  } else {
    setItemDisplay(id, 'block');
    return false;
  }
}

window.onConfirmValidation = function (e) {
  get_match_validation(document.getElementById('newpassword').value, document.getElementById('confirmpassword').value, 'password_notmatch');
}  

var form_submitted = false;
window.form_submit = function (e) {
  e.preventDefault();
  form_submitted = true;

  const email = document.getElementById('email');
  const pass = document.getElementById('password');

  const confirmPass = document.getElementById('confirmpassword');

  let email_valid = true
  if(email){
    const emailaddress = email.value;
    email_valid = get_email_validation(emailaddress, 'email');
  }
  
  let password_valid = true;
  if(pass){
    const password = pass.value;
    password_valid = get_required_validation(password, 'password_required');
  }

  let confirmpassword_valid = true;
  if(confirmPass){
    const confirmpassword = confirmPass.value;
    confirmpassword_valid = get_match_validation(newpassword, confirmpassword, 'password_notmatch');
  }
  

  if(email_valid && password_valid && confirmpassword_valid){
    document.getElementsByTagName("form")[0].submit()
  }
  
}