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
