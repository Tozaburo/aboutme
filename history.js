var url = location.href;

if (url.indexOf("https://tozaburo.github.io/aboutme/history?") != -1) {
  var mode = url.replace("https://tozaburo.github.io/aboutme/history?", "");
} else {
  var mode = "important";
}

var event = [
  "十七条の憲法が施行される",
  "中大兄皇子と中臣鎌足が大化の改新を行う",
  "大宝律令が制定される",
  "元明天皇が平城京に遷都する",
  "墾田永年私財法が発布される",
  "聖武天皇が大仏造立の詔を発する",
  "桓武天皇が平安京に遷都する",
  "菅原道真が遣唐使を止める",
  "壇ノ浦の戦いが起こる",
  "国ごとに守護が設置される",
  "荘園ごとに地頭が設置される",
  "源頼朝が征夷大将軍になる",
  "承久の乱が起こる",
  "六波羅探題が設置される",
  "御成敗式目（貞永式目）が制定される",
  "文永の役が起こる",
  "弘安の役が起こる",
  "鎌倉幕府が滅亡する",
  "後醍醐天皇が建武の新政を開始する",
  "足利高氏が室町幕府を開く",
  "南北朝が合一される",
  "応仁の乱が起こる",
  "鉄砲の伝来する",
  "キリスト教が伝来する",
  "室町幕府が滅亡する",
  "天正遣欧使節が派遣される",
  "本能寺の変が起こる",
  "太閤検地が行われる",
  "刀狩令が発令される",
  "リーフデ号が漂着する",
  "関ヶ原の戦い",
  "徳川家康が江戸幕府を開く",
  "大阪夏の陣が起こる",
  "武家諸法度（元和令）が制定される",
  "禁中並公家諸法度が制定される",
  "島原・天草一揆（島原の乱）が起こる",
  "ポルトガル船の来航が禁止される",
  "大塩の乱が起こる",
  "モリソン号事件が起こる",
  "ペリーが浦賀に来航する",
  "日米和親条約が結ばれる",
  "日米修好通商条約が結ばれる",
  "安政の大獄が起こる",
  "大政奉還が起こる",
  "王政復古の大号令が発せられる",
  "戊辰戦争が起こる",
  "五箇条の御誓文が示される",
  "明治が始まる",
  "廃藩置県が行われる",
  "日清修好条規が結ばれる",
  "岩倉使節団が派遣される",
  "学制が定められる",
  "新橋駅（汐留駅）〜横浜駅（桜木町駅）に鉄道が開通する",
  "富岡製糸場が操業する",
  "徴兵令が発せられる",
  "地租改正が行われる",
  "民撰議院設立の建白書が提出される",
  "西南戦争が起こる",
  "ノルマントン号事件が起こる",
  "大日本帝国憲法が発布される（2月11日）",
  "領事裁判権が撤廃される",
  "日清戦争が起こる",
  "下関条約が結ばれる",
  "三国干渉が起こる",
  "八幡製鉄所が操業する",
  "日英同盟が結ばれる",
  "日露戦争が始まる",
  "ポーツマス条約が結ばれる",
  "韓国併合が行われる",
  "関税自主権が回復する",
  "青踏社が結成される",
  "サラエボ事件が起こる",
  "第一次世界大戦が起こる",
  "シベリア出兵が起こる",
  "米騒動が起こる",
  "原敬内閣が成立する",
  "パリ講和会議が開催される",
  "ベルサイユ条約が結ばれる",
  "関東大震災が起こる（9月1日）",
  "ラジオ放送が開始する",
  "治安維持法は制定される",
  "普通選挙法が制定される",
  "満州事変が起こる",
  "満州国が建国される",
  "五・一五事件が起こる",
  "国際連盟から脱退する",
  "二・二六事件が起こる",
  "日中戦争が始まる",
  "南京事件が起こる",
  "日ソ中立条約が結ばれる",
  "太平洋戦争が始まる",
  "広島（8月9日）・長崎（9日）に原子爆弾が投下される",
  "ポツダム宣言を受け入れる",
  "連合国軍に占領される",
  "婦人参政権が認められる",
  "日本国憲法が公布される（11月3日）",
  "日本国憲法が施行される（5月3日）",
  "朝鮮戦争が開始される",
  "警察予備隊が設置される",
  "サンフランシスコ平和条約が結ばれる",
  "日米安全保障条約",
  "日ソ共同宣言が宣言される",
  "国際連合へ加盟する",
  "「夢の超特急」東海道新幹線が開通する",
  "東京オリンピックが開催される",
  "沖縄が復帰される",
  "国連人間環境会議が開かれる",
  "日中共同声明が調印される",
  "第一次石油危機が起こる",
  "平成が始まる",
  "消費税が実施される",
  "マルタ会議が開かれる",
  "湾岸戦争が起こる",
  "牛肉・オレンジの輸入が自由化される",
  "ソ連が解体される",
  "阪神・淡路大震災が起こる（1月17日）",
  "東日本大震災が起こる（3月11日）"
];

var year = [
  "604",
  "645",
  "701",
  "710",
  "743",
  "743",
  "794",
  "894",
  "1185",
  "1185",
  "1185",
  "1192",
  "1221",
  "1221",
  "1232",
  "1274",
  "1281",
  "1333",
  "1334",
  "1338",
  "1392",
  "1467",
  "1543",
  "1549",
  "1573",
  "1582",
  "1582",
  "1582",
  "1588",
  "1600",
  "1600",
  "1603",
  "1615",
  "1615",
  "1615",
  "1637",
  "1638",
  "1837",
  "1837",
  "1853",
  "1854",
  "1858",
  "1858",
  "1867",
  "1867",
  "1868",
  "1868",
  "1868",
  "1871",
  "1871",
  "1871",
  "1872",
  "1872",
  "1872",
  "1873",
  "1873",
  "1874",
  "1877",
  "1886",
  "1889",
  "1894",
  "1894",
  "1895",
  "1895",
  "1901",
  "1902",
  "1904",
  "1905",
  "1910",
  "1911",
  "1911",
  "1914",
  "1914",
  "1918",
  "1918",
  "1918",
  "1919",
  "1919",
  "1923",
  "1925",
  "1925",
  "1925",
  "1931",
  "1932",
  "1932",
  "1933",
  "1936",
  "1937",
  "1937",
  "1941",
  "1941",
  "1945",
  "1945",
  "1945",
  "1945",
  "1946",
  "1947",
  "1950",
  "1950",
  "1951",
  "1951",
  "1956",
  "1956",
  "1964",
  "1964",
  "1972",
  "1972",
  "1972",
  "1973",
  "1989",
  "1989",
  "1989",
  "1991",
  "1991",
  "1991",
  "1995",
  "2011"
];

if (mode != "important") {
  event.push(
    "百済の聖明王が仏教を伝える",
    "聖徳太子が推古天皇の摂政となる",
    "冠位十二階が制定される",
    "小野妹子らが遣隋使として派遣される",
    "犬上御田鍬らが遣唐使として派遣される",
    "白村江の戦いが起こる",
    "壬申の乱が起こる",
    "三世一身の法が施行される",
    "平将門の乱が起こる",
    "藤原純友の乱が起こる",
    "藤原道長が摂政になる",
    "白河上皇が院政を始める",
    "保元の乱が起こる",
    "平治の乱が起こる",
    "永仁の徳政令が発令される",
    "勘合貿易が開始する",
    "正長の土一揆",
    "山城の国一揆が起こる",
    "加賀の一向一揆が起こる",
    "桶狭間の戦いが起こる",
    "長篠の戦いが起こる",
    "豊臣秀吉が全国統一を成し遂げる",
    "文禄の役が起こる",
    "慶長の役が起こる",
    "参勤交代が制度化する",
    "徳川吉宗が享保の改革を行う",
    "松平定信が寛政の改革を行う",
    "ラクスマンが根室に来航する",
    "外国船（異国船）打払令が発せされる",
    "水野忠邦が天保の改革を行う",
    "桜田門外の変が起こる",
    "薩長同盟が成立する",
    "版籍奉還が行われる",
    "東京に遷都する",
    "樺太・千島交換条約が結ばれる",
    "江華島事件が起こる",
    "国会開設の詔が発せられる",
    "自由党が結成される",
    "秩父事件が起こる",
    "内閣制度が創設される",
    "大正が始まる",
    "第一次護憲運動が起こる",
    "（対華）二十一か条の要求が出される",
    "国際連盟が成立する（日本が常任理事国に）",
    "全国水平社が創立される",
    "ソ連が成立する",
    "世界恐慌が起こる",
    "第二次世界大戦が始まる",
    "日独伊三国同盟が結ばれる",
    "大政翼賛会が結成される",
    "沖縄にアメリカ軍が上陸する",
    "農地改革が始まる",
    "財閥解体が行われる",
    "中華人民共和国が成立する",
    "第五福竜丸事件が起こる",
    "自衛隊が発足する",
    "日米安全保障条約が結ばれる",
    "国民所得倍増計画が閣議決定される",
    "ベトナム戦争が開始する",
    "日韓基本条約が結ばれる",
    "公開対策基本法が制定される",
    "環境庁が設置される",
    "日中平和友好条約が結ばれる",
    "男女雇用機会均等法が制定される",
    "国連環境開発会議が開かれる",
    "PKO協力法が成立する",
    "1府12省庁が始まる",
    "アメリカ同時多発テロが起こる",
    "環境開発サミットが開催される",
    "イラク戦争が起こる",
    "裁判員制度が始まる",
    "選挙権が18歳以上となる"
  );

  year.push(
    "538",
    "593",
    "603",
    "607",
    "630",
    "663",
    "672",
    "723",
    "939",
    "939",
    "1016",
    "1086",
    "1156",
    "1159",
    "1297",
    "1404",
    "1428",
    "1485",
    "1488",
    "1560",
    "1575",
    "1590",
    "1592",
    "1597",
    "1635",
    "1716",
    "1787",
    "1792",
    "1825",
    "1841",
    "1860",
    "1866",
    "1869",
    "1869",
    "1875",
    "1875",
    "1881",
    "1881",
    "1884",
    "1885",
    "1912",
    "1912",
    "1915",
    "1920",
    "1922",
    "1922",
    "1929",
    "1939",
    "1940",
    "1940",
    "1945",
    "1945",
    "1945",
    "1949",
    "1954",
    "1954",
    "1960",
    "1960",
    "1965",
    "1965",
    "1967",
    "1971",
    "1978",
    "1985",
    "1992",
    "1992",
    "2001",
    "2001",
    "2002",
    "2003",
    "2009",
    "2015"
  );
}

if (mode == "advanced") {
  event.push(
    "奴国王が後漢に使いを送り、金印を授かる",
    "卑弥呼が魏に使いを送る",
    "持統天皇が藤原京に遷都する",
    "和同開珎が作られる",
    "東大寺大仏が完成する",
    "最澄が唐から帰国する",
    "空海が唐から帰国する",
    "藤原良房が摂政になる",
    "藤原基経が関白になる",
    "前九年合戦が起こる",
    "後三年合戦が起こる",
    "南北朝時代が始まる",
    "全国に禁教令が布告される",
    "オランダ商館が平戸から出島に移動する",
    "生類憐みの令が制定される",
    "新井白石が正徳の治を行う",
    "フェートン号事件が起こる",
    "蛮社の獄が起こる",
    "アヘン戦争が起こる",
    "生麦事件が起こる",
    "薩英戦争が起こる",
    "日朝修好条規が結ばれる",
    "国会期成同盟が結ばれる",
    "立憲改進党が結成される",
    "鹿鳴館が開館する",
    "第一回衆議院議員総選挙が行われる",
    "教育勅語が発布される",
    "第一回帝国議会が開かれる",
    "第二次護憲運動が起こる",
    "昭和時代になる",
    "国家総動員法が公布・施行される",
    "世界人権宣言が宣言される",
    "第一回原水爆禁止世界大会が広島市で開かれる",
    "自由民主党が結成される",
    "小笠原諸島が日本に戻る",
    "青函トンネルが開通する",
    "瀬戸大橋が開通する",
    "東西ドイツが統一される",
    "55年体制が崩壊する",
    "環境基本法が定められる",
    "消費税が5％になる",
    "京都議定書が提出される",
    "消費税が8%になる",
    "令和が始まる",
    "消費税が10%になる"
  );

  year.push(
    "57",
    "239",
    "694",
    "708",
    "752",
    "805",
    "806",
    "866",
    "887",
    "1051",
    "1083",
    "1336",
    "1613",
    "1641",
    "1685",
    "1709",
    "1808",
    "1839",
    "1840",
    "1862",
    "1863",
    "1876",
    "1880",
    "1882",
    "1883",
    "1890",
    "1890",
    "1890",
    "1924",
    "1926",
    "1938",
    "1948",
    "1955",
    "1955",
    "1968",
    "1988",
    "1988",
    "1990",
    "1993",
    "1993",
    "1995",
    "1995",
    "2014",
    "2019",
    "2019"
  );
}

var yanswer = "";
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
  yanswer = document.getElementById("answer").value;
  if (yanswer == answer) {
    correct();
  } else {
    wrong();
  }
}

function correct() {
  if (hadHint == 0) {
    event.splice(year.indexOf(yanswer), 1);
    // hint.splice(year.indexOf(yanswer), 1);
    year.splice(year.indexOf(yanswer), 1);
  }
  document.getElementById("answer").value = "";
  audio("correct");
  confetti();
  newQuiz();
}

function wrong() {
  audio("wrong");
}

function hint() {
  alert(answer);
}

function fhint() {
  alert(hint[pnum]);
  hadHint = 1;
}

function audio(file) {
  document.getElementById(file).currentTime = 0;
  document.getElementById(file).play();
}
