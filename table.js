var code = "";
var result = "";

function change() {
    code = document.querySelector("#input").value;
    code = code.replaceAll(/(<.*?table.*?>)/g, '');
    code = code.replaceAll(/(<.*?tbody.*?>)/g, '');
    code = code.replaceAll(/(<colgroup.*?>)/g, '');
    code = code.replaceAll(/(<.colgroup.*?>)/g, '');
    code = code.replaceAll(/(<.*?col.*?>)/g, '');
    code = code.replaceAll(/\n/g, '');
    // code = code.replaceAll(/  /g, '');
    // code = code.replaceAll(/    /g, '');
    // code = code.replaceAll(/  /g, '');
    code = code.split("</tr><tr>");
    code[0] = code[0].replaceAll(/(<tr.*?>)/g, '');
    code[code.length - 1] = code[code.length - 1].replaceAll(/(<.tr.*?>)/g, '');

    for (var i = 0; i < code.length; i++) {
        if (i == 0) {
            code[i] = code[i].split("</th><th>");
            code[i][0] = code[i][0].replaceAll(/(<th.*?>)/g, '');
            code[i][code[i].length - 1] = code[i][code[i].length - 1].replaceAll(/(<.th.*?>)/g, '');
        } else {
            code[i] = code[i].split("</td><td>");
            code[i][0] = code[i][0].replaceAll(/(<td.*?>)/g, '');
            code[i][code[i].length - 1] = code[i][code[i].length - 1].replaceAll(/(<.td.*?>)/g, '');
        }
        for (var j = 0; j < code[i].length; j++) {
            code[i][j] = code[i][j].replaceAll(/(<.*?>)/g, '');
        }
    }
    result = code.join("\n")
    download_txt("table.csv", result);
}

function download_txt(file_name, data) {

    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.download = file_name;
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

}

var lang = window.navigator.language;

window.addEventListener("DOMContentLoaded", function () {
      clang();
});

function clang() {
    if (lang != "ja") {
        document.querySelector("#title").innerHTML = "html table > csv file";
        document.querySelector(".main").innerHTML = `
        <div class="title">
            <h1>html table > csv file</h1>
            <p>table element to a csv file.</p>
            <p class="small">CSS is not sent to the server, handled by JS.            </p>
        </div>
        <div class="inoutput">
            <textarea class="input" id="input"></textarea>
            <a onclick="change()">Convert!</a>
        </div>
    `;
    }
}
