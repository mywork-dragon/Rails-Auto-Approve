document.addEventListener("DOMContentLoaded", function () {
  let inputRating = document.getElementById("review_rating").value

  if(inputRating){
    document.getElementById(`star-${inputRating}`).checked = true
  }
})

window.handleStar = function (radio) {
  document.getElementById("review_rating").value = radio.value
}
