window.show_sidemenu = function () {
    var side_bg = document.getElementById("side-bg");
    side_bg.style.display = "block";
    var side_menu = document.getElementById("side-menu");
    side_menu.style.right = "0";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

window.hide_sidemenu = function () {
    var side_bg = document.getElementById("side-bg");
    side_bg.style.display = "none";
    var side_menu = document.getElementById("side-menu");
    side_menu.style.right = "-18rem";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}