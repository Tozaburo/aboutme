var scaleList = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var scale = "C";
var scaleNum = 4;
var updownsum = 0;
var activelist = [];
var keylist = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O"], ["A", "S", "D", "F", "G", "H", "J", "K", "L"]]
var activekeylist = [["Q", "W", "E", "R", "T"], ["A", "S", "D", "F", "G"]];
var number = null;

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
    var key = e.code.replace("Key", "");
    switch (e.code) {
        case "Key" + activekeylist[0][0]:
            keycase(activekeylist[0][0], 1);
            break;
        case "Key" + activekeylist[0][1]:
            keycase(activekeylist[0][1], 2);
            break;
        case "Key" + activekeylist[0][2]:
            keycase(activekeylist[0][2], 4);
            break;
        case "Key" + activekeylist[0][3]:
            keycase(activekeylist[0][3], 8);
            break;
        case "Key" + activekeylist[0][4]:
            keycase(activekeylist[0][4], 16);
            break;
        case "Key" + activekeylist[0][5]:
            keycase(activekeylist[0][5], 32);
            break;
        case "Key" + activekeylist[0][6]:
            keycase(activekeylist[0][6], 64);
            break;
        case "Key" + activekeylist[0][7]:
            keycase(activekeylist[0][7], 128);
            break;
        case "Key" + activekeylist[0][8]:
            keycase(activekeylist[0][8], 256);
            break;

        case "Key" + activekeylist[1][0]:
            keycase(activekeylist[1][0], -1);
            break;
        case "Key" + activekeylist[1][1]:
            keycase(activekeylist[1][1], -2);
            break;
        case "Key" + activekeylist[1][2]:
            keycase(activekeylist[1][2], -4);
            break;
        case "Key" + activekeylist[1][3]:
            keycase(activekeylist[1][3], -8);
            break;
        case "Key" + activekeylist[1][4]:
            keycase(activekeylist[1][4], -16);
            break;
        case "Key" + activekeylist[1][5]:
            keycase(activekeylist[1][5], -32);
            break;
        case "Key" + activekeylist[1][6]:
            keycase(activekeylist[1][6], -64);
            break;
        case "Key" + activekeylist[1][7]:
            keycase(activekeylist[1][7], -128);
            break;
        case "Key" + activekeylist[1][8]:
            keycase(activekeylist[1][8], -256);
            break;
    }
}

function keyup_ivent(e) {
    switch (e.code) {
        case "Key" + activekeylist[0][0]:
            document.querySelector("#" + activekeylist[0][0]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[0][0]), 1);
            break;
        case "Key" + activekeylist[0][1]:
            document.querySelector("#" + activekeylist[0][1]).classList.remove("active");
            activelist.splice(activelist.indexOf(keyactivekeylistlist[0][1]), 1);
            break;
        case "Key" + activekeylist[0][2]:
            document.querySelector("#" + activekeylist[0][2]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[0][2]), 1);
            break;
        case "Key" + activekeylist[0][3]:
            document.querySelector("#" + activekeylist[0][3]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[0][3]), 1);
            break;
        case "Key" + activekeylist[0][4]:
            document.querySelector("#" + activekeylist[0][4]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[0][4]), 1);
            break;
        case "Key" + activekeylist[0][5]:
            document.querySelector("#" + activekeylist[0][5]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[0][5]), 1);
            break;
        case "Key" + activekeylist[0][6]:
            document.querySelector("#" + activekeylist[0][6]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[0][6]), 1);
            break;
        case "Key" + activekeylist[0][7]:
            document.querySelector("#" + activekeylist[0][7]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[0][7]), 1);
            break;
        case "Key" + activekeylist[0][8]:
            document.querySelector("#" + activekeylist[0][8]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[0][8]), 1);
            break;

        case "Key" + activekeylist[1][0]:
            document.querySelector("#" + activekeylist[1][0]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[1][0]), 1);
            break;
        case "Key" + activekeylist[1][1]:
            document.querySelector("#" + activekeylist[1][1]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[1][1]), 1);
            break;
        case "Key" + activekeylist[1][2]:
            document.querySelector("#" + activekeylist[1][2]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[1][2]), 1);
            break;
        case "Key" + activekeylist[1][3]:
            document.querySelector("#" + activekeylist[1][3]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[1][3]), 1);
            break;
        case "Key" + activekeylist[1][4]:
            document.querySelector("#" + activekeylist[1][4]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[1][4]), 1);
            break;
        case "Key" + activekeylist[1][5]:
            document.querySelector("#" + activekeylist[1][5]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[1][5]), 1);
            break;
        case "Key" + activekeylist[1][6]:
            document.querySelector("#" + activekeylist[1][6]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[1][6]), 1);
            break;
        case "Key" + activekeylist[1][7]:
            document.querySelector("#" + activekeylist[1][7]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[1][7]), 1);
            break;
        case "Key" + activekeylist[1][8]:
            document.querySelector("#" + activekeylist[1][8]).classList.remove("active");
            activelist.splice(activelist.indexOf(activekeylist[1][8]), 1);
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

    const tabs = document.querySelectorAll('.tab-menu .tabs .tab');
    const contents = document.querySelectorAll('.tab-menu .contents .content');
    const tabslider = document.querySelector('.tab-menu .tabs .tabslider');

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

var tslider = -1;
var nslider = -1;
setInterval(() => {
    if (tslider != document.querySelector("#threshold").value) {
        tslider = document.querySelector("#threshold").value;
        threshold = tslider;
        document.querySelector("#thresholddisplay").innerHTML = "keyboard push-threshold : " + tslider + "ms";
    }
    if (nslider != document.querySelector("#number").value) {
        nslider = document.querySelector("#number").value;
        number = nslider;
        document.querySelector("#keyboardsizedisplay").innerHTML = "number-of-keyboard : " + nslider;

        var uphtml = "";
        activekeylist = [[], []];
        for (var n = 0; n < nslider / 2; n++) {
            uphtml += '<a onclick="note(' + String(2 ** n) + ')" oncontextmenu="showContextMenuForKey(event, 0, ' + n + ')" class="updown" id="' + keylist[0][n] + '">+' + String(2 ** n) + '<span>' + keylist[0][n] + '</span></a>';
            activekeylist[0][n] = keylist[0][n];
        }

        var downhtml = "";
        for (var n = 0; n < nslider / 2; n++) {
            downhtml += '<a onclick="note(-' + String(2 ** n) + ')" oncontextmenu="showContextMenuForKey(event, 1, ' + n + ')" class="updown" id="' + keylist[1][n] + '">-' + String(2 ** n) + '<span>' + keylist[1][n] + '</span></a>';
            activekeylist[1][n] = keylist[1][n];
        }

        document.querySelector("#plusbuttons").innerHTML = uphtml;
        document.querySelector("#minusbuttons").innerHTML = downhtml;
    }
}, 1)

function keycase(key, playnote) {
    if (!activelist.includes(key)) {
        document.querySelector("#" + key).classList.add("active");
        note(playnote);
        activelist.push(key);
        console.log(activelist)
    }
}

window.addEventListener("DOMContentLoaded", function () {
    var contextMenu = document.getElementById("contextMenu");
    var contextText = document.getElementById("contextText");
    var currentButton = null;
    var currentRow = null;
});

function showContextMenuForKey(e, row, index) {
    e.preventDefault();
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;
    contextMenu.style.display = "block";
    currentButton = keylist[row][index];
    currentRow = row;
    contextText.textContent = "Key " + currentButton;
}

// オプションがクリックされたときの処理
function changeKeyboardLayout() {
    nslider = -1;
    document.querySelector("#keyboardLayoutInput").style.display = "flex";
}

// 何か他の部分がクリックされた時の処理
window.onclick = function () {
    contextMenu.style.display = "none";
};

function typed(e) {
    document.querySelector("#keyboardLayoutDisplay").innerHTML = "New Key : " + e.target.value;
    console.log(e.target.value);
    setTimeout(() => {
        keylist[currentRow][keylist[currentRow].indexOf(currentButton)] = e.target.value;
        nslider = -1;
        document.querySelector("#keyboardLayoutInput").style.display = "none";
    }, 500)
}
