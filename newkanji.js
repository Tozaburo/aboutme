var url = location.href;
var search = url.replace("https://tozaburo.github.io/aboutme/newkanji", "");
var kanji = [["一", "員", "一", "数偏", "イチ"], ["七", "員", "七", "数偏", "シチ"], ["十", "員", "十", "数偏", "シチ"], ["人", "亻", "壬", "人偏", "ジン"], ["九", "員", "九", "数偏", "キュウ"], ["二", "員", "二", "数偏", "ニ"], ["八", "員", "八", "数偏", "ハチ"], ["力", "亻", "力", "人偏", "リキ"], ["入", "亻", "入", "人偏", "ニュウ"], ["川", "氵", "千", "水部", "セン"], ["山", "木", "彡", "木偏", "サン"], ["三", "員", "彡", "数偏", "サン"], ["小", "土", "小", "物偏", "ショウ"], ["上", "土", "上", "物偏", "ジョウ"], ["女", "亻", "女", "人偏", "ジョ"], ["口", "月", "句", "肉月", "ク"], ["夕", "日", "昔", "日偏", "セキ"], ["千", "員", "千", "数偏", "セン"], ["下", "土", "可", "物偏", "カ"], ["大", "土", "大", "物偏", "ダイ"], ["子", "亻", "支", "人偏", "シ"], ["土", "木", "土", "木偏", "ト"], ["水", "氵", "欠", "水部", "スイ"], ["手", "月", "朱", "肉月", "シュ"], ["六", "員", "录", "数偏", "ロク"], ["文", "竹", "文", "竹偏", "ブン"], ["中", "土", "主", "物偏", "チュウ"], ["天", "木", "占", "木偏", "テン"], ["木", "木", "卜", "木偏", "ボク"], ["日", "木", "日", "木偏", "ジツ"], ["火", "火", "可", "火偏", "カ"], ["月", "木", "月", "木偏", "ゲツ"], ["犬", "犭", "巻", "獣偏", "ケン"], ["王", "亻", "央", "人偏", "オウ"], ["五", "員", "五", "数偏", "ゴ"], ["円", "貝", "奄", "貝偏", "エン"], ["生", "亻", "小", "人偏", "ショウ"], ["白", "采", "白", "色偏", "ハク"], ["本", "竹", "本", "竹偏", "ホン"], ["石", "木", "尺", "木偏", "シャク"], ["目", "月", "目", "肉月", "モク"], ["右", "土", "于", "物偏", "ウ"], ["立", "亻", "栗", "人偏", "リツ"], ["正", "亻", "小", "人偏", "ショウ"], ["左", "土", "乍", "物偏", "サ"], ["四", "員", "支", "数偏", "シ"], ["出", "土", "出", "物偏", "シュツ"], ["玉", "石", "玉", "石偏", "ギョク"], ["田", "木", "田", "木偏", "デン"], ["耳", "月", "寺", "肉月", "ジ"], ["年", "亥", "念", "亥偏", "ネン"], ["虫", "犭", "主", "獣偏", "チュウ"], ["竹", "木", "竹", "木偏", "チク"], ["休", "亻", "九", "人偏", "キュウ"], ["気", "气", "几", "气偏", "キ"], ["百", "員", "百", "数偏", "ヒャク"], ["早", "走", "曹", "走偏", "ソウ"], ["先", "土", "千", "物偏", "セン"], ["名", "亻", "名", "人偏", "ミョウ"], ["糸", "糸", "支", "糸編", "シ"], ["字", "竹", "寺", "竹偏", "ジ"], ["花", "木", "可", "木偏", "カ"], ["車", "丫", "者", "丫偏", "シャ"], ["貝", "犭", "介", "獣偏", "カイ"], ["町", "彳", "丁", "行人偏", "チョウ"], ["男", "亻", "亶", "人偏", "ダン"], ["村", "彳", "寸", "行人偏", "ソン"], ["足", "月", "束", "肉月", "ソク"], ["見", "目", "㑒", "目偏", "ケン"], ["赤", "采", "昔", "色偏", "セキ"], ["学", "竹", "咢", "竹偏", "ガク"], ["空", "土", "空", "物偏", "クウ"], ["青", "采", "折", "色偏", "セイ"], ["雨", "气", "于", "气偏", "ウ"], ["金", "采", "斤", "色偏", "キン"], ["林", "木", "令", "木偏", "リン"], ["草", "木", "曹", "木偏", "ソウ"], ["音", "气", "夗", "气偏", "オン"], ["校", "竹", "広", "竹偏", "コウ"], ["森", "木", "申", "木偏", "シン"]];
var hen = [["数偏", "数に関することを表す"], ["人偏", "人に関することを表す"], ["水部", "水に関することを表す"], ["物偏", "物の状態に関することを表す"], ["肉月", "体の部位に関することを表す"], ["气偏", "天気、太陽、空気に関することを表す"], ["木偏", "自然に関することを表す"], ["竹偏", "文字、学問に関することを表す"], ["火偏", "火に関することを表す"], ["獣偏", "動物に関することを表す"], ["貝偏", "お金に関することを表す"], ["色偏", "色に関することを表す"], ["石偏", "宝石、財宝に関することを表す"], ["亥偏", "時間、歳月に関することを表す"], ["走偏", "動くことに関することを表す"], ["糸編", "糸、服に関することを表す"], ["丫偏", "機械、コンピュータに関することを表す"], ["行人偏", "町、都市に関することを表す"], ["目偏", "目、視覚に関することを表す"]]

search = url.replace("file:///Users/TOE/Desktop/website/New%20Kanji/newkanji.html", "");

search = decodeURIComponent(search);

window.addEventListener("DOMContentLoaded", function () {
    if (url.includes("?")) {
        if (url.includes("?s=")) {
            search = search.replace("?s=", "");
            document.querySelector(".main").innerHTML = `
        <div class="content">
            <h1 id="kanji"></h1>
            <div class="detail">
                <p id="oldkanji"></p>
                <a href="" id="hen" class="link"></a>
                <a href="" id="tukuri" class="link"></a>
            </div>
        </div>` + document.querySelector(".main").innerHTML;
            document.querySelector("#kanji").innerHTML = findList(kanji, search, 0, 1) + findList(kanji, search, 0, 2);
            document.querySelector("#oldkanji").innerHTML = "元の漢字：" + search;
            document.querySelector("#hen").innerHTML = "偏：" + findList(kanji, search, 0, 3);
            document.querySelector("#hen").href = "?h=" + findList(kanji, search, 0, 3);
            document.querySelector("#tukuri").innerHTML = "旁：" + findList(kanji, search, 0, 2) + "（" + findList(kanji, search, 0, 4) + "）";
            document.querySelector("#tukuri").href = "?t=" + findList(kanji, search, 0, 2);
        } else if (url.includes("?h=")) {
            search = search.replace("?h=", "");
            document.querySelector(".main").innerHTML = `
        <div class="content">
            <h1 id="kanji"></h1>
            <div class="detail">
                <p id="kind"></p>
                <p id="name"></p>
                <p id="meaning"></p>
            </div>
            <div class="example">
            </div>
        </div>` + document.querySelector(".main").innerHTML;
            document.querySelector("#kanji").innerHTML = findList(kanji, search, 3, 1) + "□";
            document.querySelector("#kind").innerHTML = "種類：偏";
            document.querySelector("#name").innerHTML = "名前：" + search;
            document.querySelector("#meaning").innerHTML = "意味：" + findList(hen, search, 0, 1);
            for (var i = 0; i < kanji.length; i++) {
                if (kanji[i][3] == search) {
                    document.querySelector(".example").innerHTML += '<a class="big" href="?s=' + kanji[i][0] + '">' + kanji[i][1] + kanji[i][2] + '</a>';
                }
            }
        } else if (url.includes("?t=")) {
            search = search.replace("?t=", "");
            document.querySelector(".main").innerHTML = `
        <div class="content">
            <h1 id="kanji"></h1>
            <div class="detail">
                <p id="kind"></p>
                <p id="name"></p>
                <p id="meaning"></p>
            </div>
            <div class="example">
            </div>
        </div>` + document.querySelector(".main").innerHTML;
            document.querySelector("#kanji").innerHTML = "□" + search;
            document.querySelector("#kind").innerHTML = "種類：旁";
            document.querySelector("#name").innerHTML = "読み：" + findList(kanji, search, 2, 4);
            for (var i = 0; i < kanji.length; i++) {
                if (kanji[i][2] == search) {
                    document.querySelector(".example").innerHTML += '<a class="big" href="?s=' + kanji[i][0] + '">' + kanji[i][1] + kanji[i][2] + '</a>';
                }
            }
        } else if (url.includes("?a")) {
            location.href = location.href.replace("?a", "");
        }
    } else {
        document.querySelector(".main").innerHTML = `
        <h1>漢字は好きですか？</h1>
        <h3>この世には様々な漢字があります。しかし、ややこしいものが大半です。<br>唯一わかりやすいのは、形声文字です。<br>形声文字は意味と文字が別れているものです。<br>形成文字の意味を表す部分さえ分かれば、意味が分かる。<br>さらに、形成文字の音を表す部分が分かれば、読みも分かる。最高ですね。<br>ただ、残念ながらすべての漢字は形声文字ではありません。
        </h3>
        <h2>じゃあ作っちゃえば良いんじゃない？</h2>
        <h4>というノリで作られた新たな漢字です。</h4>
        <div class="search">
            <input type="text" placeholder="検索したい「昔の」漢字を入力..." maxlength="1" id="skanji">
            <a onclick="goToSearch('skanji', 's')" class="input">検索！</a>
        </div>
        <div class="search">
            <input type="text" placeholder="検索したい漢字の偏を入力..." maxlength="3" id="hen">
            <a onclick="goToSearch('hen', 'h')" class="input">検索！</a>
        </div>
        <div class="search">
            <input type="text" placeholder="検索したい漢字の旁を入力..." id="tukuri">
            <a onclick="goToSearch('tukuri', 't')" class="input">検索！</a>
        </div>`;
    }
});

function findList(list, target, targetIndex, returnIndex) {
    for (var i = 0; i < list.length; i++) {
        if (list[i][targetIndex] === target) {
            return list[i][returnIndex];
        }
    }
}

function goToSearch(id, a) {
    location.href += "?" + a + "=" + document.querySelector("#" + id).value;
}
