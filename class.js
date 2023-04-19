var tmin = 61;

setInterval(() => {
  timeChanged();
}, 1);

function timeChanged() {
  if (tmin != new Date().getMinutes()) {
    pospointer();
    tmin = new Date().getMinutes();
  }
}

function pospointer() {
  var now = new Date();

  // var hour = now.getHours();
  // var min = now.getMinutes();

  var hour = 8;
  var min = 0;

  min = (hour - 8) * 60 + min;

  if (min < 0) {
    document.querySelector(".pointer").style.top = String(0 + 10 - 2.5) + "vh";
  } else if (min > 445) {
    document.querySelector(".pointer").style.top =
      String(445 + 10 - 2.5) + "vh";
  } else {
    document.querySelector(".pointer").style.top =
      String(min + 10 - 2.5) + "vh";
  }

  var px = document.body.clientWidth / 2;

  var vh = (document.documentElement.clientHeight / 100) * 70;

  document.querySelector(".pointer").style.left = "10" + "px";
}
