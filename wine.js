function calc() {
  var lrain = Number(document.getElementById("lrain").value);
  var train = Number(document.getElementById("train").value);
  var temp = Number(document.getElementById("temp").value);
  var year = Number(document.getElementById("year").value);
  var price =
    lrain * 0.00117 - train * 0.00386 + temp * 0.616 + year * 0.02358 - 12.145;
  document.querySelector(".result").innerHTML =
    "ワインの品質：" + String(price);
}
