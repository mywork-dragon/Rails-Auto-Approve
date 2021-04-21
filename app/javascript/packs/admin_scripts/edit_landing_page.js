window.onSwitch = function () {
  if (document.getElementById('live').checked) {
    document.getElementById('livetext').style.color = '#44e0b7';
  } else {
    document.getElementById('livetext').style.color = '#898A8D';
  }
}