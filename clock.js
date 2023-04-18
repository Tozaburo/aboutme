var tsec = 61;

document.documentElement.requestFullscreen();

setInterval(() => {
  timeChanged();
}, 1);

function timeChanged() {
  if (tsec != new Date().getMilliseconds()) {
    replacetime();
    tsec = new Date().getMilliseconds();
  }
}

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

  var csec = ssec;

  var cmin = min + sec / 60;

  var chour = hour + cmin / 60;

  var gsec = "hsl(" + String(csec * 6) + " 80% 40%)";

  var gmin = "hsl(" + String(cmin * 6) + " 80% 40%)";

  var ghour = "hsl(" + String(chour * 15) + " 80% 40%)";

  var backgroundsec = "linear-gradient(to right, transparent, " + gsec + ")";

  var backgroundhm = "linear-gradient(" + gmin + ", " + ghour + ")";

  var cssg = backgroundsec + "\n" + backgroundhm;
  document.getElementById("main").style.background = backgroundhm;

  if (show == 1) {
    document.getElementById("overlay").style.background = backgroundsec;
  } else {
    document.getElementById("overlay").style.background = "transparent";
  }
}

document.addEventListener("keydown", keydownEvent, false);

var fontW = 200;

var show = 0;

function keydownEvent(event) {
  if (event.code === "KeyB") {
    if (fontW == 200) {
      fontW = 700;
    } else {
      fontW = 200;
    }
    document.getElementById("time").style.fontWeight = fontW;
  }

  if (event.code === "KeyS") {
    if (show == 1) {
      show = 0;
    } else {
      show = 1;
    }
    document.getElementById("time").style.fontWeight = fontW;
  }
}

if (window.navigator.language == 'ja'){
  alert('新感覚の時計へようこそ！\nこの時計は時間に合わせて背景が変わる時計です。\nまた、「b」キーを押すことで文字の太さを、\n「s」キーを押すことで秒単位で変わるかどうかを変えられます。');
}else{
  alert('Welcome to a new kind of clock!\nThis clock is a clock with a background that changes with the time.\nYou can change the thickness of the letters by pressing the "b" key\nYou can also change whether the background changes in seconds by pressing the "s" key.');
}
