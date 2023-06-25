var scaleList = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var scale = "C";
var scaleNum = 4;
var updownsum = 0;
var activelist = [];

function note(updown) {
    updownsum += 1;
    for (var i = 0; i < Math.abs(updown); i++) {
        if (updown > 0) {
            if (scaleList.indexOf(scale) == 11) {
                scale = "C";
                scaleNum += 1;
            } else {
                scale = scaleList[scaleList.indexOf(scale) + 1];
            }
        } else {
            if (scaleList.indexOf(scale) == 0) {
                scale = "B";
                scaleNum -= 1;
            } else {
                scale = scaleList[scaleList.indexOf(scale) - 1];
            }
        }
    }
    var n = 0;
    var oldU = updownsum;
    let wait = setInterval(() => {
        n += 1;
        if (n >= threshold) {
            clearInterval(wait);
            const synth = new Tone.Synth().toDestination();
            document.querySelector("#scale").innerHTML = scale + String(scaleNum);
            synth.triggerAttackRelease(scale + String(scaleNum), "8n");
        }
        if (oldU != updownsum) {
            clearInterval(wait);
        }
    }, 1);
}

document.addEventListener("keydown", keydown_ivent);
document.addEventListener("keyup", keyup_ivent);

function keydown_ivent(e) {
    switch (e.code) {
        case "KeyQ":
            keycase("Q", 1);
            break;
        case "KeyW":
            keycase("W", 2);
            break;
        case "KeyE":
            keycase("E", 4);
            break;
        case "KeyR":
            keycase("R", 8);
            break;
        case "KeyT":
            keycase("T", 16);
            break;
        case "KeyY":
            keycase("Y", 32);
            break;
        case "KeyU":
            keycase("U", 64);
            break;

        case "KeyA":
            keycase("A", -1);
            break;
        case "KeyS":
            keycase("S", -2);
            break;
        case "KeyD":
            keycase("D", -4);
            break;
        case "KeyF":
            keycase("F", -8);
            break;
        case "KeyG":
            keycase("G", -16);
            break;
        case "KeyH":
            keycase("H", -32);
            break;
        case "KeyJ":
            keycase("J", -64);
            break;
    }
}

function keyup_ivent(e) {
    switch (e.code) {
        case "KeyQ":
            document.querySelector("#Q").classList.remove("active");
            activelist.splice(activelist.indexOf("Q"), 1);
            break;
        case "KeyW":
            document.querySelector("#W").classList.remove("active");
            activelist.splice(activelist.indexOf("W"), 1);
            break;
        case "KeyE":
            document.querySelector("#E").classList.remove("active");
            activelist.splice(activelist.indexOf("E"), 1);
            break;
        case "KeyR":
            document.querySelector("#R").classList.remove("active");
            activelist.splice(activelist.indexOf("R"), 1);
            break;
        case "KeyT":
            document.querySelector("#T").classList.remove("active");
            activelist.splice(activelist.indexOf("T"), 1);
            break;
        case "KeyY":
            document.querySelector("#Y").classList.remove("active");
            activelist.splice(activelist.indexOf("Y"), 1);
            break;
        case "KeyU":
            document.querySelector("#U").classList.remove("active");
            activelist.splice(activelist.indexOf("U"), 1);
            break;

        case "KeyA":
            document.querySelector("#A").classList.remove("active");
            activelist.splice(activelist.indexOf("A"), 1);
            break;
        case "KeyS":
            document.querySelector("#S").classList.remove("active");
            activelist.splice(activelist.indexOf("S"), 1);
            break;
        case "KeyD":
            document.querySelector("#D").classList.remove("active");
            activelist.splice(activelist.indexOf("D"), 1);
            break;
        case "KeyF":
            document.querySelector("#F").classList.remove("active");
            activelist.splice(activelist.indexOf("F"), 1);
            break;
        case "KeyG":
            document.querySelector("#G").classList.remove("active");
            activelist.splice(activelist.indexOf("G"), 1);
            break;
        case "KeyH":
            document.querySelector("#H").classList.remove("active");
            activelist.splice(activelist.indexOf("H"), 1);
            break;
        case "KeyJ":
            document.querySelector("#J").classList.remove("active");
            activelist.splice(activelist.indexOf("J"), 1);
            break;
    }
}

window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.updown').forEach(function (updown) {
        updown.addEventListener('mousedown', function () {
            this.classList.add('active');
        });

        updown.addEventListener('mouseup', function () {
            this.classList.remove('active');
        });
    });

    let tabs = document.querySelectorAll('.tab-menu .tabs .tab');
    let contents = document.querySelectorAll('.tab-menu .contents .content');
    let tabslider = document.querySelector('.tab-menu .tabs .tabslider');

    // Set the slider to the initial position
    tabslider.style.left = `calc(0 * calc(100% / 3))`;

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach((tab) => {
                tab.classList.remove('opened');
            });

            contents.forEach((content) => {
                content.classList.remove('opened');
            });

            tab.classList.add('opened');
            contents[index].classList.add('opened');

            tabslider.style.left = `calc(${index} * calc(100% / 3))`;
        });
    });

});

var slider = -1;
var speed = 1;
setInterval(() => {
    if (slider != document.querySelector("#threshold").value) {
        slider = document.querySelector("#threshold").value;
        threshold = slider;
        document.querySelector("#thresholddisplay").innerHTML = "keyboard push-threshold : " + slider + "ms";
    }
}, 1)

function keycase(key, playnote) {
    if (!activelist.includes(key)) {
        document.querySelector("#" + key).classList.add("active");
        note(playnote);
        activelist.push(key);
    }
}
