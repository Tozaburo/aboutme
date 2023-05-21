var stringsentence = "";
var splitstr = "";
var sentence = stringsentence.split(splitstr);
var start = "";
var result = [start];
var lastWord = start;
var started = 0;

function startgen() {
    changeS();
    if (started == 1){
        stringsentence = document.querySelector("#data").value;
        stringsentence = stringsentence.replace(/\n/g, '');
        splitstr = document.querySelector("#split").value;
        sentence = stringsentence.split(splitstr);
        start = sentence[0];
        result = [start];
        lastWord = start;
        console.log(lastWord);
    }
    let sg = setInterval(() => {
        makeSentence();
        if (started == 0) {
            clearInterval(sg);
        }
    }, 10);
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
    console.log(result);
    document.querySelector("#sentence").innerHTML = result.join('');
}

function next(text) {
    var candidate = [];
    var last = 0;
    var loop = numberOf(text, sentence);
    for (var i = 0; i < loop; i++) {
        if (sentence[sentence.indexOf(text, last) + 1] != undefined) {
            candidate.push(sentence[sentence.indexOf(text, last) + 1]);
        }
        last = sentence.indexOf(text, last) + 1;
    }
    result.push(candidate[randomNumber(0, candidate.length - 1)]);
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
