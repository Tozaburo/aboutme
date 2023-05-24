var stringsentence = "";
var splitstr = "";
var sentence = stringsentence.split(splitstr);
var start = "";
var result = [start];
var lastWord = start;
var started = 0;
var level = 2;

window.addEventListener("DOMContentLoaded", function () {
    setLevel(2);
});

function startgen() {
    changeS();
    if (started == 1) {
        stringsentence = document.querySelector("#data").value;
        stringsentence = stringsentence.replace(/\n/g, '');
        splitstr = document.querySelector("#split").value;
        sentence = stringsentence.split(splitstr);
        start = sentence[0];
        result = [start];
        lastWord = start;
    }
    let sg = setInterval(() => {
        makeSentence();
        if (started == 0) {
            clearInterval(sg);
        }
    }, slider);
}

function changeS() {
    if (started == 0) {
        started = 1;
        document.querySelector("#startstop").innerHTML =
            "停止！";
    } else {
        started = 0;
        document.querySelector("#startstop").innerHTML =
            "作成！";
    }
}

function makeSentence() {
    next(lastWord);
    lastWord = result[result.length - 1];
    document.querySelector("#sentence").innerHTML = result.join('');
}

function next(text) {
    var candidate = [];
    var last = 0;
    var loop = numberOf(text, sentence);
    for (var i = 0; i < loop; i++) {
        if (level == 1) {
            if (sentence[sentence.indexOf(text, last) + 1] != undefined) {
                candidate.push(sentence[sentence.indexOf(text, last) + 1]);
            }
        } else if (level == 2) {
            if (sentence[sentence.indexOf(text, last) + 1] != undefined && sentence[sentence.indexOf(text, last) - 1] == result[result.length - 2]) {
                candidate.push(sentence[sentence.indexOf(text, last) + 1]);
            }
        } else {
            if (sentence[sentence.indexOf(text, last) + 1] != undefined && sentence[sentence.indexOf(text, last) - 1] == result[result.length - 2] && sentence[sentence.indexOf(text, last) - 2] == result[result.length - 3] && sentence[sentence.indexOf(text, last) - 3] == result[result.length - 4]) {
                candidate.push(sentence[sentence.indexOf(text, last) + 1]);
            }
        }

        last = sentence.indexOf(text, last) + 1;
    }
    var shrinked = 0;
    result.push(candidate[randomNumber(0, candidate.length - 1)]);
    if (candidate.length > 3) {
        candidate.length = 3;
        shrinked = 1;
    }
    var tree = "";
    for (var i = 0; i < candidate.length; i++) {
        tree += "<li"
        if (candidate.indexOf(result[result.length - 1]) == i) {
            tree += ' class="red">'
        } else {
            tree += ">";
        }
        if (i == 3 && shrinked == 1) {
            tree += candidate[i] + "...";
        } else {
            tree += candidate[i];
        }
        tree += '</li>';
    }
    document.querySelector("#tree").innerHTML = tree;
    document.querySelector("#last").innerHTML = text;
}

function numberOf(ch, str) {
    const arr = str;
    const obj = {};
    for (const item of arr) {
        if (obj[item]) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
    }
    return obj[ch];
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function setLevel(set) {
    if (set == 1) {
        document.getElementById("one").classList.add("emphasize");
        document.getElementById("two").classList.remove("emphasize");
        document.getElementById("three").classList.remove("emphasize");
    } else if (set == 2) {
        document.getElementById("one").classList.remove("emphasize");
        document.getElementById("two").classList.add("emphasize");
        document.getElementById("three").classList.remove("emphasize");
    } else {
        document.getElementById("one").classList.remove("emphasize");
        document.getElementById("two").classList.remove("emphasize");
        document.getElementById("three").classList.add("emphasize");
    }
    level = set;
}

var slider = -1;
var speed = 1;
setInterval(() => {
    if (slider != document.querySelector("#speed").value) {
        slider = document.querySelector("#speed").value;
        speed = slider;
        document.querySelector("#speedlabel").innerHTML = "文章生成のスピード = 1単語 / " + slider + "ms";
    }
}, 1)
