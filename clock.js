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

  var gmin = "hsl(" + String(cmin * 60) + " 80% 40%)";

  var ghour = "hsl(" + String(hour * 15) + " 80% 40%)";

  document.getElementById("main").style.background =
    "linear-gradient(" + gmin + ", " + ghour + ")";
  
  console.log(cmin);
}
