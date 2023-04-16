var url = location.href;

var event = [];

if (url.indexOf("important") != -1) {
  document.getElementById("important").checked = true;
  event.push(
    ["604", "十七条の憲法が施行される"],
    ["645", "中大兄皇子と中臣鎌足が大化の改新を行う"],
    ["701", "大宝律令が制定される"],
    ["710", "元明天皇が平城京に遷都する"],
    ["743", "墾田永年私財法が発布される"],
    ["743", "聖武天皇が大仏造立の詔を発する"],
    ["794", "桓武天皇が平安京に遷都する"],
    ["894", "菅原道真が遣唐使を止める"],
    ["1185", "壇ノ浦の戦いが起こる"],
    ["1185", "国ごとに守護が設置される"],
    ["1185", "荘園ごとに地頭が設置される"],
    ["1192", "源頼朝が征夷大将軍になる"],
    ["1221", "承久の乱が起こる"],
    ["1221", "六波羅探題が設置される"],
    ["1232", "御成敗式目（貞永式目）が制定される"],
    ["1274", "文永の役が起こる"],
    ["1281", "弘安の役が起こる"],
    ["1333", "鎌倉幕府が滅亡する"],
    ["1334", "後醍醐天皇が建武の新政を開始する"],
    ["1338", "足利高氏が室町幕府を開く"],
    ["1392", "南北朝が合一される"],
    ["1467", "応仁の乱が起こる"],
    ["1543", "鉄砲の伝来する"],
    ["1549", "キリスト教が伝来する"],
    ["1573", "室町幕府が滅亡する"],
    ["1582", "天正遣欧使節が派遣される"],
    ["1582", "本能寺の変が起こる"],
    ["1582", "太閤検地が行われる"],
    ["1588", "刀狩令が発令される"],
    ["1600", "リーフデ号が漂着する"],
    ["1600", "関ヶ原の戦い"],
    ["1603", "徳川家康が江戸幕府を開く"],
    ["1615", "大阪夏の陣が起こる"],
    ["1615", "武家諸法度（元和令）が制定される"],
    ["1615", "禁中並公家諸法度が制定される"],
    ["1637", "島原・天草一揆（島原の乱）が起こる"],
    ["1638", "ポルトガル船の来航が禁止される"],
    ["1837", "大塩の乱が起こる"],
    ["1837", "モリソン号事件が起こる"],
    ["1853", "ペリーが浦賀に来航する"],
    ["1854", "日米和親条約が結ばれる"],
    ["1858", "日米修好通商条約が結ばれる"],
    ["1858", "安政の大獄が起こる"],
    ["1867", "大政奉還が起こる"],
    ["1867", "王政復古の大号令が発せられる"],
    ["1868", "戊辰戦争が起こる"],
    ["1868", "五箇条の御誓文が示される"],
    ["1868", "明治が始まる"],
    ["1871", "廃藩置県が行われる"],
    ["1871", "日清修好条規が結ばれる"],
    ["1871", "岩倉使節団が派遣される"],
    ["1872", "学制が定められる"],
    ["1872", "新橋駅（汐留駅）〜横浜駅（桜木町駅）に鉄道が開通する"],
    ["1872", "富岡製糸場が操業する"],
    ["1873", "徴兵令が発せられる"],
    ["1873", "地租改正が行われる"],
    ["1874", "民撰議院設立の建白書が提出される"],
    ["1877", "西南戦争が起こる"],
    ["1886", "ノルマントン号事件が起こる"],
    ["1889", "大日本帝国憲法が発布される（2月11日）"],
    ["1894", "領事裁判権が撤廃される"],
    ["1894", "日清戦争が起こる"],
    ["1895", "下関条約が結ばれる"],
    ["1895", "三国干渉が起こる"],
    ["1901", "八幡製鉄所が操業する"],
    ["1902", "日英同盟が結ばれる"],
    ["1904", "日露戦争が始まる"],
    ["1905", "ポーツマス条約が結ばれる"],
    ["1910", "韓国併合が行われる"],
    ["1911", "関税自主権が回復する"],
    ["1911", "青踏社が結成される"],
    ["1914", "サラエボ事件が起こる"],
    ["1914", "第一次世界大戦が起こる"],
    ["1918", "シベリア出兵が起こる"],
    ["1918", "米騒動が起こる"],
    ["1918", "原敬内閣が成立する"],
    ["1919", "パリ講和会議が開催される"],
    ["1919", "ベルサイユ条約が結ばれる"],
    ["1923", "関東大震災が起こる（9月1日》"],
    ["1925", "ラジオ放送が開始する"],
    ["1925", "治安維持法は制定される"],
    ["1925", "普通選挙法が制定される"],
    ["1931", "満州事変が起こる"],
    ["1932", "満州国が建国される"],
    ["1932", "五・一五事件が起こる"],
    ["1933", "国際連盟から脱退する"],
    ["1936", "二・二六事件が起こる"],
    ["1937", "日中戦争が始まる"],
    ["1937", "南京事件が起こる"],
    ["1941", "日ソ中立条約が結ばれる"],
    ["1941", "太平洋戦争が始まる"],
    ["1945", "広島（8月9日）・長崎（9日）に原子爆弾が投下される"],
    ["1945", "ポツダム宣言を受け入れる"],
    ["1945", "連合国軍に占領される"],
    ["1945", "婦人参政権が認められる"],
    ["1946", "日本国憲法が公布される（11月3日）"],
    ["1947", "日本国憲法が施行される（5月3日）"],
    ["1950", "朝鮮戦争が開始される"],
    ["1950", "警察予備隊が設置される"],
    ["1951", "サンフランシスコ平和条約が結ばれる"],
    ["1951", "日米安全保障条約"],
    ["1956", "日ソ共同宣言が宣言される"],
    ["1956", "国際連合へ加盟する"],
    ["1964", "「夢の超特急」東海道新幹線が開通する"],
    ["1964", "東京オリンピックが開催される"],
    ["1972", "沖縄が復帰される"],
    ["1972", "国連人間環境会議が開かれる"],
    ["1972", "日中共同声明が調印される"],
    ["1973", "第一次石油危機が起こる"],
    ["1989", "平成が始まる"],
    ["1989", "消費税が実施される"],
    ["1989", "マルタ会議が開かれる"],
    ["1991", "湾岸戦争が起こる"],
    ["1991", "牛肉・オレンジの輸入が自由化される"],
    ["1991", "ソ連が解体される"],
    ["1995", "阪神・淡路大震災が起こる（1月17日）"],
    ["2011", "東日本大震災が起こる（3月11日）"]
  );
}

if (url.indexOf("basic") != -1) {
  document.getElementById("basic").checked = true;
  event.push(
    ["538", "百済の聖明王が仏教を伝える"],
    ["593", "聖徳太子が推古天皇の摂政となる"],
    ["603", "冠位十二階が制定される"],
    ["607", "小野妹子らが遣隋使として派遣される"],
    ["630", "犬上御田鍬らが遣唐使として派遣される"],
    ["663", "白村江の戦いが起こる"],
    ["672", "壬申の乱が起こる"],
    ["723", "三世一身の法が施行される"],
    ["939", "平将門の乱が起こる"],
    ["939", "藤原純友の乱が起こる"],
    ["1016", "藤原道長が摂政になる"],
    ["1086", "白河上皇が院政を始める"],
    ["1156", "保元の乱が起こる"],
    ["1159", "平治の乱が起こる"],
    ["1297", "永仁の徳政令が発令される"],
    ["1404", "勘合貿易が開始する"],
    ["1428", "正長の土一揆"],
    ["1485", "山城の国一揆が起こる"],
    ["1488", "加賀の一向一揆が起こる"],
    ["1560", "桶狭間の戦いが起こる"],
    ["1575", "長篠の戦いが起こる"],
    ["1590", "豊臣秀吉が全国統一を成し遂げる"],
    ["1592", "文禄の役が起こる"],
    ["1597", "慶長の役が起こる"],
    ["1635", "参勤交代が制度化する"],
    ["1716", "徳川吉宗が享保の改革を行う"],
    ["1787", "松平定信が寛政の改革を行う"],
    ["1792", "ラクスマンが根室に来航する"],
    ["1825", "外国船（異国船）打払令が発せされる"],
    ["1841", "水野忠邦が天保の改革を行う"],
    ["1860", "桜田門外の変が起こる"],
    ["1866", "薩長同盟が成立する"],
    ["1869", "版籍奉還が行われる"],
    ["1869", "東京に遷都する"],
    ["1875", "樺太・千島交換条約が結ばれる"],
    ["1875", "江華島事件が起こる"],
    ["1881", "国会開設の詔が発せられる"],
    ["1881", "自由党が結成される"],
    ["1884", "秩父事件が起こる"],
    ["1885", "内閣制度が創設される"],
    ["1912", "大正が始まる"],
    ["1912", "第一次護憲運動が起こる"],
    ["1915", "（対華）二十一か条の要求が出される"],
    ["1920", "国際連盟が成立する（日本が常任理事国に）"],
    ["1922", "全国水平社が創立される"],
    ["1922", "ソ連が成立する"],
    ["1929", "世界恐慌が起こる"],
    ["1939", "第二次世界大戦が始まる"],
    ["1940", "日独伊三国同盟が結ばれる"],
    ["1940", "大政翼賛会が結成される"],
    ["1945", "沖縄にアメリカ軍が上陸する"],
    ["1945", "農地改革が始まる"],
    ["1945", "財閥解体が行われる"],
    ["1949", "中華人民共和国が成立する"],
    ["1954", "第五福竜丸事件が起こる"],
    ["1954", "自衛隊が発足する"],
    ["1960", "日米安全保障条約が結ばれる"],
    ["1960", "国民所得倍増計画が閣議決定される"],
    ["1965", "ベトナム戦争が開始する"],
    ["1965", "日韓基本条約が結ばれる"],
    ["1967", "公開対策基本法が制定される"],
    ["1971", "環境庁が設置される"],
    ["1978", "日中平和友好条約が結ばれる"],
    ["1985", "男女雇用機会均等法が制定される"],
    ["1992", "国連環境開発会議が開かれる"],
    ["1992", "PKO協力法が成立する"],
    ["2001", "1府12省庁が始まる"],
    ["2001", "アメリカ同時多発テロが起こる"],
    ["2002", "環境開発サミットが開催される"],
    ["2003", "イラク戦争が起こる"],
    ["2009", "裁判員制度が始まる"],
    ["2015", "選挙権が18歳以上となる"]
  );
}

if (url.indexOf("advanced") != -1) {
  document.getElementById("advanced").checked = true;
  event.push(
    ["57", "奴国王が後漢に使いを送り、金印を授かる"],
    ["239", "卑弥呼が魏に使いを送る"],
    ["694", "持統天皇が藤原京に遷都する"],
    ["708", "和同開珎が作られる"],
    ["752", "東大寺大仏が完成する"],
    ["805", "最澄が唐から帰国する"],
    ["806", "空海が唐から帰国する"],
    ["866", "藤原良房が摂政になる"],
    ["887", "藤原基経が関白になる"],
    ["1051", "前九年合戦が起こる"],
    ["1083", "後三年合戦が起こる"],
    ["1336", "南北朝時代が始まる"],
    ["1613", "全国に禁教令が布告される"],
    ["1641", "オランダ商館が平戸から出島に移動する"],
    ["1685", "生類憐みの令が制定される"],
    ["1709", "新井白石が正徳の治を行う"],
    ["1808", "フェートン号事件が起こる"],
    ["1839", "蛮社の獄が起こる"],
    ["1840", "アヘン戦争が起こる"],
    ["1862", "生麦事件が起こる"],
    ["1863", "薩英戦争が起こる"],
    ["1876", "日朝修好条規が結ばれる"],
    ["1880", "国会期成同盟が結ばれる"],
    ["1882", "立憲改進党が結成される"],
    ["1883", "鹿鳴館が開館する"],
    ["1890", "第一回衆議院議員総選挙が行われる"],
    ["1890", "教育勅語が発布される"],
    ["1890", "第一回帝国議会が開かれる"],
    ["1924", "第二次護憲運動が起こる"],
    ["1926", "昭和時代になる"],
    ["1938", "国家総動員法が公布・施行される"],
    ["1948", "世界人権宣言が宣言される"],
    ["1955", "第一回原水爆禁止世界大会が広島市で開かれる"],
    ["1955", "自由民主党が結成される"],
    ["1968", "小笠原諸島が日本に戻る"],
    ["1988", "青函トンネルが開通する"],
    ["1988", "瀬戸大橋が開通する"],
    ["1990", "東西ドイツが統一される"],
    ["1993", "55年体制が崩壊する"],
    ["1993", "環境基本法が定められる"],
    ["1995", "消費税が5％になる"],
    ["1995", "京都議定書が提出される"],
    ["2014", "消費税が8%になる"],
    ["2019", "令和が始まる"],
    ["2019", "消費税が10%になる"]
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
  answer = event[pnum][1];
  document.getElementById("question").textContent = event[pnum][0];
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
  alert(answer);
}

function audio(file) {
  document.getElementById(file).currentTime = 0;
  document.getElementById(file).play();
}

function transform() {
  var query = [];
  if (isChecked("important")) {
    query.push = "important";
  }

  if (isChecked("basic")) {
    query.push = "basic";
  }

  if (isChecked("advanced")) {
    query.push = "advanced";
  }

  query.join("&");

  location.href = "https://tozaburo.github.io/aboutme/history?" + query;
}

function isChecked(Id) {
  return document.getElementById(Id).checked;
}
