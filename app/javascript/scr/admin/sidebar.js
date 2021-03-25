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