document.addEventListener("DOMContentLoaded", function () {
  let inputRating = document.getElementById("review_rating").value

  if(inputRating){
    document.getElementById(`star-${inputRating}`).checked = true
  }

  let a = ''
  var labels = document.getElementsByTagName('label');
  document.getElementsByName("review[review_site_id]").forEach((input) => {
    if(input.checked){
      a =  input;
      for (var i = 0; i < labels.length; i++) {
        if(labels[i].htmlFor == input.id){
          labels[i].classList.add('active')
        }
        
      }
    }
    input.addEventListener('change', changeLogo);
  });
})

window.handleStar = function (radio) {
  document.getElementById("review_rating").value = radio.value
}


function changeLogo(event) {
  document.getElementsByClassName("active")[0]?.classList.remove("active");
  event.path[1].classList.add('active');
}
