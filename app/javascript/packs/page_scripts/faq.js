
window.onViewContent = function (id) {
    let element = document.getElementById(id + "_content");
    let growDiv = document.getElementById(id + "_grow");
    let arrowImg = document.getElementById(id + "_img");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
      arrowImg.classList.remove("arrow-top");
    } else {
      growDiv.style.height = element.clientHeight + "px";
      arrowImg.classList.add("arrow-top");
    }
}