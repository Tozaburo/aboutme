var canvaswidth = 800;
var symbol = ["", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og", "*1", "*2"]
var url = location.href;

var query = url.replace("https://tozaburo.github.io/aboutme/atom?", "");
// var query = "10,12";
var query = query.split(",");

window.addEventListener("DOMContentLoaded", function () {
    draw();
});

function draw() {
    // var canvas = document.getElementById('canvas');
    // if (canvas.getContext) {
    //     rec(1, 1, 3, 1);
    //     rec(18, 1, 3, 2);

    //     rec(1, 2, 1, 3);
    //     rec(2, 2, 1, 4);
    //     rec(13, 2, 2, 5);
    //     rec(14, 2, 2, 6);
    //     rec(15, 2, 3, 7);
    //     rec(16, 2, 3, 8);
    //     rec(17, 2, 3, 9);
    //     rec(18, 2, 3, 10);

    //     rec(1, 3, 1, 11);
    //     rec(2, 3, 1, 12);
    //     rec(13, 3, 1, 13);
    //     rec(14, 3, 2, 14);
    //     rec(15, 3, 2, 15);
    //     rec(16, 3, 3, 16);
    //     rec(17, 3, 3, 17);
    //     rec(18, 3, 3, 18);

    //     rec(1, 4, 1, 19);
    //     rec(2, 4, 1, 20);
    //     rec(3, 4, 1, 21);
    //     rec(4, 4, 1, 22);
    //     rec(5, 4, 1, 23);
    //     rec(6, 4, 1, 24);
    //     rec(7, 4, 1, 25);
    //     rec(8, 4, 1, 26);
    //     rec(9, 4, 1, 27);
    //     rec(10, 4, 1, 28);
    //     rec(11, 4, 1, 29);
    //     rec(12, 4, 1, 30);
    //     rec(13, 4, 1, 31);
    //     rec(14, 4, 2, 32);
    //     rec(15, 4, 2, 33);
    //     rec(16, 4, 2, 34);
    //     rec(17, 4, 3, 35);
    //     rec(18, 4, 3, 36);

    //     rec(1, 5, 1, 37);
    //     rec(2, 5, 1, 38);
    //     rec(3, 5, 1, 39);
    //     rec(4, 5, 1, 40);
    //     rec(5, 5, 1, 41);
    //     rec(6, 5, 1, 42);
    //     rec(7, 5, 1, 43);
    //     rec(8, 5, 1, 44);
    //     rec(9, 5, 1, 45);
    //     rec(10, 5, 1, 46);
    //     rec(11, 5, 1, 47);
    //     rec(12, 5, 1, 48);
    //     rec(13, 5, 1, 49);
    //     rec(14, 5, 1, 50);
    //     rec(15, 5, 2, 51);
    //     rec(16, 5, 2, 52);
    //     rec(17, 5, 3, 53);
    //     rec(18, 5, 3, 54);

    //     rec(1, 6, 1, 55);
    //     rec(2, 6, 1, 56);
    //     rec(3, 6, 4, 119);
    //     rec(4, 6, 1, 72);
    //     rec(5, 6, 1, 73);
    //     rec(6, 6, 1, 74);
    //     rec(7, 6, 1, 75);
    //     rec(8, 6, 1, 76);
    //     rec(9, 6, 1, 77);
    //     rec(10, 6, 1, 78);
    //     rec(11, 6, 1, 79);
    //     rec(12, 6, 1, 80);
    //     rec(13, 6, 1, 81);
    //     rec(14, 6, 1, 82);
    //     rec(15, 6, 2, 83);
    //     rec(16, 6, 2, 84);
    //     rec(17, 6, 2, 85);
    //     rec(18, 6, 3, 86);

    //     rec(1, 7, 1, 87);
    //     rec(2, 7, 1, 88);
    //     rec(3, 7, 4, 120);
    //     rec(4, 7, 0, 104);
    //     rec(5, 7, 0, 105);
    //     rec(6, 7, 0, 106);
    //     rec(7, 7, 0, 107);
    //     rec(8, 7, 0, 108);
    //     rec(9, 7, 0, 109);
    //     rec(10, 7, 0, 110);
    //     rec(11, 7, 0, 111);
    //     rec(12, 7, 0, 112);
    //     rec(13, 7, 0, 113);
    //     rec(14, 7, 0, 114);
    //     rec(15, 7, 0, 115);
    //     rec(16, 7, 0, 116);
    //     rec(17, 7, 0, 117);
    //     rec(18, 7, 0, 118);

    //     rec(1, 9, 4, 119);
    //     rec(2, 9, 1, 57);
    //     rec(3, 9, 1, 58);
    //     rec(4, 9, 1, 59);
    //     rec(5, 9, 1, 60);
    //     rec(6, 9, 1, 61);
    //     rec(7, 9, 1, 62);
    //     rec(8, 9, 1, 63);
    //     rec(9, 9, 1, 64);
    //     rec(10, 9, 1, 65);
    //     rec(11, 9, 1, 66);
    //     rec(12, 9, 1, 67);
    //     rec(13, 9, 1, 68);
    //     rec(14, 9, 1, 69);
    //     rec(15, 9, 1, 70);
    //     rec(16, 9, 1, 71);

    //     rec(1, 10, 4, 120);
    //     rec(2, 10, 1, 89);
    //     rec(3, 10, 1, 90);
    //     rec(4, 10, 1, 91);
    //     rec(5, 10, 1, 92);
    //     rec(6, 10, 1, 93);
    //     rec(7, 10, 1, 94);
    //     rec(8, 10, 1, 95);
    //     rec(9, 10, 1, 96);
    //     rec(10, 10, 1, 97);
    //     rec(11, 10, 1, 98);
    //     rec(12, 10, 1, 99);
    //     rec(13, 10, 1, 100);
    //     rec(14, 10, 1, 101);
    //     rec(15, 10, 1, 102);
    //     rec(16, 10, 1, 103);
    // }
    rec(1, 1, 3, 1);
    rec(18, 1, 3, 2);

    rec(1, 2, 1, 3);
    rec(2, 2, 1, 4);
    rec(13, 2, 2, 5);
    rec(14, 2, 2, 6);
    rec(15, 2, 3, 7);
    rec(16, 2, 3, 8);
    rec(17, 2, 3, 9);
    rec(18, 2, 3, 10);

    rec(1, 3, 1, 11);
    rec(2, 3, 1, 12);
    rec(13, 3, 1, 13);
    rec(14, 3, 2, 14);
    rec(15, 3, 2, 15);
    rec(16, 3, 3, 16);
    rec(17, 3, 3, 17);
    rec(18, 3, 3, 18);

    rec(1, 4, 1, 19);
    rec(2, 4, 1, 20);
    rec(3, 4, 1, 21);
    rec(4, 4, 1, 22);
    rec(5, 4, 1, 23);
    rec(6, 4, 1, 24);
    rec(7, 4, 1, 25);
    rec(8, 4, 1, 26);
    rec(9, 4, 1, 27);
    rec(10, 4, 1, 28);
    rec(11, 4, 1, 29);
    rec(12, 4, 1, 30);
    rec(13, 4, 1, 31);
    rec(14, 4, 2, 32);
    rec(15, 4, 2, 33);
    rec(16, 4, 2, 34);
    rec(17, 4, 3, 35);
    rec(18, 4, 3, 36);

    rec(1, 5, 1, 37);
    rec(2, 5, 1, 38);
    rec(3, 5, 1, 39);
    rec(4, 5, 1, 40);
    rec(5, 5, 1, 41);
    rec(6, 5, 1, 42);
    rec(7, 5, 1, 43);
    rec(8, 5, 1, 44);
    rec(9, 5, 1, 45);
    rec(10, 5, 1, 46);
    rec(11, 5, 1, 47);
    rec(12, 5, 1, 48);
    rec(13, 5, 1, 49);
    rec(14, 5, 1, 50);
    rec(15, 5, 2, 51);
    rec(16, 5, 2, 52);
    rec(17, 5, 3, 53);
    rec(18, 5, 3, 54);

    rec(1, 6, 1, 55);
    rec(2, 6, 1, 56);
    rec(3, 6, 4, 119);
    rec(4, 6, 1, 72);
    rec(5, 6, 1, 73);
    rec(6, 6, 1, 74);
    rec(7, 6, 1, 75);
    rec(8, 6, 1, 76);
    rec(9, 6, 1, 77);
    rec(10, 6, 1, 78);
    rec(11, 6, 1, 79);
    rec(12, 6, 1, 80);
    rec(13, 6, 1, 81);
    rec(14, 6, 1, 82);
    rec(15, 6, 2, 83);
    rec(16, 6, 2, 84);
    rec(17, 6, 2, 85);
    rec(18, 6, 3, 86);

    rec(1, 7, 1, 87);
    rec(2, 7, 1, 88);
    rec(3, 7, 4, 120);
    rec(4, 7, 0, 104);
    rec(5, 7, 0, 105);
    rec(6, 7, 0, 106);
    rec(7, 7, 0, 107);
    rec(8, 7, 0, 108);
    rec(9, 7, 0, 109);
    rec(10, 7, 0, 110);
    rec(11, 7, 0, 111);
    rec(12, 7, 0, 112);
    rec(13, 7, 0, 113);
    rec(14, 7, 0, 114);
    rec(15, 7, 0, 115);
    rec(16, 7, 0, 116);
    rec(17, 7, 0, 117);
    rec(18, 7, 0, 118);

    rec(1, 9, 4, 119);
    rec(2, 9, 1, 57);
    rec(3, 9, 1, 58);
    rec(4, 9, 1, 59);
    rec(5, 9, 1, 60);
    rec(6, 9, 1, 61);
    rec(7, 9, 1, 62);
    rec(8, 9, 1, 63);
    rec(9, 9, 1, 64);
    rec(10, 9, 1, 65);
    rec(11, 9, 1, 66);
    rec(12, 9, 1, 67);
    rec(13, 9, 1, 68);
    rec(14, 9, 1, 69);
    rec(15, 9, 1, 70);
    rec(16, 9, 1, 71);

    rec(1, 10, 4, 120);
    rec(2, 10, 1, 89);
    rec(3, 10, 1, 90);
    rec(4, 10, 1, 91);
    rec(5, 10, 1, 92);
    rec(6, 10, 1, 93);
    rec(7, 10, 1, 94);
    rec(8, 10, 1, 95);
    rec(9, 10, 1, 96);
    rec(10, 10, 1, 97);
    rec(11, 10, 1, 98);
    rec(12, 10, 1, 99);
    rec(13, 10, 1, 100);
    rec(14, 10, 1, 101);
    rec(15, 10, 1, 102);
    rec(16, 10, 1, 103);
}

// function rec(loc1, loc2, mode, index) {
//     var ctx = canvas.getContext('2d');
//     loc1 = loc1 * (canvaswidth / 20);
//     loc2 = loc2 * (canvaswidth / 20);

//     if (query.includes(String(index))) {
//         var alpha = 0.5;
//     } else {
//         var alpha = 0.075;
//     }
//     if (mode == 0) {
//         ctx.fillStyle = 'rgba(255, 255, 255, ' + alpha + ')';
//     } else if (mode == 1) {
//         ctx.fillStyle = 'rgba(0, 0, 255, ' + alpha + ')';
//     } else if (mode == 2) {
//         ctx.fillStyle = 'rgba(255, 255, 0, ' + alpha + ')';
//     } else if (mode == 3) {
//         ctx.fillStyle = 'rgba(255, 0, 0, ' + alpha + ')';
//     } else {
//         ctx.fillStyle = 'rgba(255, 125, 0, ' + alpha + ')';
//     }
//     ctx.fillRect(loc1, loc2, (canvaswidth / 20), (canvaswidth / 20));

//     ctx.font = '24px serif';
//     ctx.fillStyle = 'black';
//     ctx.textAlign = 'center';
//     ctx.fillText(symbol[index], loc1 + (canvaswidth / 40), loc2 + (canvaswidth / 27.5));

//     if (query.includes(String(index))) {
//         ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
//         ctx.lineWidth = 2;
//     } else {
//         ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
//         ctx.lineWidth = 1;
//     }

//     ctx.strokeRect(loc1 + (ctx.lineWidth / 2), loc2 + (ctx.lineWidth / 2), ((canvaswidth / 20) - ctx.lineWidth), ((canvaswidth / 20) - ctx.lineWidth));
// }

function rec(loc1, loc2, mode, index) {
    loc1 = loc1 * (canvaswidth / 20);
    loc2 = loc2 * (canvaswidth / 20);
    if (query.includes(String(index))) {
        newsvg(loc1, loc2, mode, "0.5", index);
    } else {
        newsvg(loc1, loc2, mode, "0.075", index);
    }


}

function newsvg(loc1, loc2, mode, alpha, index) {

    if (mode == 0) {
        var color = "#000";
    } else if (mode == 1) {
        var color = "#0000FF";
    } else if (mode == 2) {
        var color = "#FFFF00";
    } else if (mode == 3) {
        var color = "#FF0000";
    } else {
        var color = "#FFBC00";
    }
    document.querySelector("#svg").innerHTML = document.querySelector("#svg").innerHTML + `<rect x=` + loc1 + ` y=` + loc2 + ` rx="0" ry="0" width="` + (canvaswidth / 20) + `" height=` + (canvaswidth / 20) + ` stroke-width="1" stroke="#000" fill="` + color + `" opacity="` + alpha + `"/>`;

    // if (query.includes(String(index))) {
    //     var line = "2";
    // } else {
    //     var line = "1";
    // }
    var line = "1";

    // document.querySelector("#svg").innerHTML = document.querySelector("#svg").innerHTML + `<rect x=` + (loc1 - (line / 2)) + ` y=` + (loc2 - (line / 2)) + ` rx="0" ry="0" width="` + ((canvaswidth / 20) - (line / 2)) + `" height=` + ((canvaswidth / 20) - (line / 2)) + ` stroke-width="` + line + `" stroke="#000" fill="transparent" opacity="1"/>`;
    if (query.includes(String(index))) {
        var opacity = "1";
    } else {
        var opacity = "0.15";
    }
    document.querySelector("#svg").innerHTML = document.querySelector("#svg").innerHTML + `<text x=` + (loc1 + canvaswidth / 40) + ` y=` + (loc2 + canvaswidth / 29) + ` font-family="Be Vietnam Pro" font-size="20" text-anchor="middle" opacity=` + opacity + `>` + symbol[index] + `</text>`;
}
