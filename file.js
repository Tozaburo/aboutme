var vname = "";
var result = "";
var ntype = "";
var last = "";

window.addEventListener("load", () => {
  const f = document.getElementById("file");
  f.addEventListener("change", (e) => {
    let input = e.target;
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      var txt = reader.result;
      txt = txt.split("\n");
      var n = 0;
      result = " = [";
      while (n < txt.length) {
        if (n < txt.length - 1) {
          result = result + '"' + txt[n] + '",';
        } else {
          result = result + '"' + txt[n] + '"';
        }
        n += 1;
      }
      result = result + "]";
    };
  });
});

function changeType() {
  if (ntype == "") {
    ntype = "var ";
    last = ";";
    document.querySelector(".switch").innerHTML = "js";
  } else {
    ntype = "";
    last = "";
    document.querySelector(".switch").innerHTML = "python";
  }
}

function copyResult() {
  vname = document.getElementById("name").value;
  copy = ntype + vname + result + last;
  navigator.clipboard.writeText(copy);
}

var lang = window.navigator.language;

window.addEventListener("DOMContentLoaded", function () {
  clang();
});

function clang() {
  if (lang != "ja") {
    document.getElementById("main").innerHTML = `
		<div class="title">
      <h1>Files to Python/JS Lists</h1>
    </div>
    <div class="quiz">
      <h2 id="question">Making txt file to python/js's list</h2>
      <div class="input">
        <h3 for="name">Name of list：</h3>
        <input type="text" id="name" class="name">
      </div>
      <div class="button-list">
        <label class="button"><input type="file" accept=".txt" id='file' style="display: none;">Upload the File</label>
        <a onclick="changeType()" class="button switch">python</a>
        <a onclick="copyResult()" class="button">Copy!</a>
      </div>
    </div>
    <div class="icon">
      <a href="https://tozaburo.github.io/aboutme/">
        <img src="home.png" alt="">
      </a>
    </div>
    `;
  }
}
