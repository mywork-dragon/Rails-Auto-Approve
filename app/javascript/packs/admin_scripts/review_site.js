
window.onImage = function (input) {
  readURL(input);
}

window.readURL = function (input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      document.getElementById('site_logo').src = e.target.result;
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  } 
}