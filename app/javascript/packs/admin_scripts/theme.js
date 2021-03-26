window.onMouseOver = function (element) {
  var rect = element.getBoundingClientRect();
  var rect1 = document.getElementById("content").getBoundingClientRect();

  const preview_element = document.getElementById("preview");
  const preview_img = document.querySelector("#preview img");
  preview_element.style.right = preview_element.style.top = preview_element.style.left = preview_element.style.bottom = null;
  const w1 = rect1.right - rect.right - 80;
  const w2 = rect.left - rect1.left - 80;
  const h1 = rect.top - rect1.top;
  const h2 = rect1.bottom - rect.bottom;

  const left_triangle = document.getElementById("left-triangle");
  const right_triangle = document.getElementById("right-triangle");
  const top_triangle = document.getElementById("top-triangle");
  left_triangle.style.display = right_triangle.style.display = top_triangle.style.display = "none";
  left_triangle.style.top = left_triangle.style.bottom = right_triangle.style.top = right_triangle.style.bottom = null;
  if (window.innerWidth > 767) {
    if (w1 >= w2) {
      preview_element.style.left = rect.right.toString() + "px";
      preview_img.style.width = Math.min(640, w1).toString() + "px";
      
      left_triangle.style.display = "block";
    } else {
      preview_element.style.right = (rect1.right - rect.left).toString() + "px";
      preview_img.style.width = Math.min(640, w2).toString() + "px";
      
      right_triangle.style.display = "block";
    }
    if (h1 < h2) {
      if (w1 >= w2) {
        left_triangle.style.top = ((rect.bottom - rect.top) / 2).toString() + "px";
      } else {
        right_triangle.style.top = ((rect.bottom - rect.top) / 2).toString() + "px";
      }
      preview_element.style.top = rect.top.toString() + "px";
    } else {
      if (w1 >= w2) {
        left_triangle.style.bottom = ((rect.bottom - rect.top) / 2).toString() + "px";
      } else {
        right_triangle.style.bottom = ((rect.bottom - rect.top) / 2).toString() + "px";
      }
      preview_element.style.bottom = (rect1.bottom - rect.bottom).toString() + "px";
    }
  } else {
    preview_img.style.width = "500px"
    preview_element.style.top = rect.bottom.toString() + "px";
    top_triangle.style.left = ((rect.right - rect.left) / 2).toString() + "px";
    top_triangle.style.display = "block";
  }
  preview_element.style.display = "block";
}

window.onMouseLeave = function () {
  document.getElementById("preview").style.display = "none";
  const left_triangle = document.getElementById("left-triangle");
  const right_triangle = document.getElementById("right-triangle");
  const top_triangle = document.getElementById("top-triangle");
  left_triangle.style.display = right_triangle.style.display = top_triangle.style.display = "none";
}
