setInterval(() => {
  replacetime();
}, 100);

function replacetime() {
  var now = new Date();

  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var shour = String(hour);
  var smin = String(min);
  var ssec = String(sec);

  if (shour.length == 1) {
    shour = "0" + shour;
  }

  if (smin.length == 1) {
    smin = "0" + smin;
  }

  if (ssec.length == 1) {
    ssec = "0" + ssec;
  }

  var result = shour + " : " + smin + " : " + ssec;

  document.querySelector(".time").innerHTML = result;

  var cmin = min + sec / 60;

  var chour = hour + cmin / 60;

  var gmin = "hsl(" + String(cmin * 6) + " 80% 40%)";

  var ghour = "hsl(" + String(chour * 15) + " 80% 40%)";

  document.getElementById("main").style.background =
    "linear-gradient(" + gmin + ", " + ghour + ")";
}

document.addEventListener("keydown", keydownEvent, false);

var fontW = 200;

function keydownEvent(event) {
  if (event.code === "KeyB") {
    if (fontW == 200) {
      fontW = 700;
      console.log("700");
    } else {
      console.log("200");
      fontW = 200;
    }
    document.getElementById("time").style.fontWeight = fontW;
  }
}
