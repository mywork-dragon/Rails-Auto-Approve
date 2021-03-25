document.addEventListener("DOMContentLoaded", function () {
  
  window.addEventListener('scroll', handleScroll);
});


window.handleScroll = function (ev) {
  let headerElement = document.getElementById("header");

  if (window.scrollY >= 100) {
    if (!headerElement.classList.contains('fixed-header')) {
      headerElement.classList.add('fixed-header');
    }
  } else {
    if (headerElement.classList.contains('fixed-header')) {
      headerElement.classList.remove('fixed-header');
    }
  }
}


