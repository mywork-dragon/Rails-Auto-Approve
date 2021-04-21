window.show_sidemenu = function () {
  var side_bg = document.getElementById("side-bg");
  side_bg.style.display = "block";
  var side_menu = document.getElementById("side-menu");
  side_menu.classList.add("translate-x-0", "ease-out")
  side_menu.classList.remove("-translate-x-full", "ease-in")
}

window.hide_sidemenu = function () {
  var side_bg = document.getElementById("side-bg");
  side_bg.style.display = "none";
  var side_menu = document.getElementById("side-menu");
  side_menu.classList.remove("translate-x-0", "ease-out")
  side_menu.classList.add("-translate-x-full", "ease-in")
}




window.search = function (t) {
  
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search-text");
  filter = input.value.toUpperCase();
  

  table = document.getElementsByTagName("table")[0];
  
  td = table.getElementsByTagName("td");

  for (i = 0; i < td.length; i++) {
    span = td[i].getElementsByTagName("span")[0];

    if(span){
      txtValue = span.textContent || span.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        td[i].closest('tr').style.display = "";
      } else {
          td[i].closest('tr').style.display = "none";
      }
    }
  }
}