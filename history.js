var year = [
  "645",
  "1582",
  "1873",
  "1894",
  "1904",
  "1910",
  "1925",
  "1931",
  "1941",
  "1945",
  "1945",
  "1945",
  "1945",
  "1945",
  "1946",
  "1947",
  "1951",
  "1972",
  "1973"
];

var event = [
  "中大兄皇子と中臣鎌足が大化の改新を行う",
  "豊臣秀吉が太閤検地を行う",
  "地租改正条例が出される",
  "日清戦争が始まる",
  "日露戦争が始まる",
  "韓国併合を行う",
  "治安維持法が制定される",
  "満州事変が起こる",
  "太平洋戦争が始まる",
  "沖縄にアメリカ軍が上陸する",
  "広島（8月9日）・長崎（9日）に原子爆弾が投下される",
  "ポツダム宣言を受諾する（8月14日）",
  "連合国軍に占領される",
  "婦人参政権が認められる",
  "日本国憲法が公布される（11月3日）",
  "日本国憲法が施行される（5月3日）",
  "サンフランシスコ平和条約が結ばれる（日本の独立回復）",
  "沖縄が日本に復帰する",
  "第一次石油危機が起こる"
];

var hint = [
  "虫殺し",
  "以後、ハニー",
  "岩、NASA",
  "いや、櫛！？",
  "行く？マヨ",
  "行く？硫黄",
  "行く？2個？",
  "戦、い（やだ）",
  "行く用意",
  "行く、死後",
  "行く、死後",
  "行く、死後",
  "行く、死後",
  "行く、死後",
  "行く、読む",
  "行く、椎名",
  "行く、来い",
  "行く、何？",
  "行く、NASA"
];

var hadHint = 0;
var pnum = 0;
var answer = "0000";

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function newQuiz() {
  hadHint = 0;
  pnum = random(0, year.length);
  answer = year[pnum];
  document.getElementById("question").textContent = event[pnum];
}

function check() {
  var yanswer = document.getElementById("answer").value;
  if (yanswer == answer) {
    correct();
  } else {
    wrong();
  }
}

function correct() {
  if (hadHint == 0){
    event.splice[year.indexOf(answer), 1]
    year.splice[year.indexOf(answer), 1]
  }
  document.getElementById("answer").value = "";
  audio("correct");
  confetti();
  newQuiz();
}

function wrong() {
  audio("wrong");
}

function fhint() {
  alert(hint[pnum]);
  hadHint = 1;
}

function audio(file) {
  document.getElementById(file).currentTime = 0;
  document.getElementById(file).play();
}
