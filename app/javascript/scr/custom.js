document.addEventListener("DOMContentLoaded", function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);


  window.addEventListener('scroll', handleScroll);


  const filters = document.querySelectorAll('.categories')

  let params = urlParams.get('filter')
  let filtersParams = ''
  if(params){
    filtersParams = params.split(',')

    filters.forEach(element => {
      filtersParams.forEach(f => {
        if(element.value == f){
          element.checked = true;
        }
      })
    })
  }
  

  

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


window.filter = function () {
  const filters = document.querySelectorAll('.categories:checked')
  let filter = '?filter=';
  filters.forEach((element,index) => {
    if(index > 0){
      filter += ','+element.value
    }else{
      filter += element.value
    }
  });

  document.location = '/resources'+filter;
}