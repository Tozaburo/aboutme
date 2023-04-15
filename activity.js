function replaceDes(result){
  document.querySelector('.description').innerHTML = result;
}

function replaceWeek(result){
  document.querySelector('.week').innerHTML = result;
}

var lang = window.navigator.language;

window.addEventListener("DOMContentLoaded", function () {
  clang();
});

function clang() {
  if (lang != "ja") {
    document.querySelector('#title').innerHTML = "Activity";
    document.querySelector(".main").innerHTML = `
    <div class="text">
      <div class="title">
        <h1>Activity</h1>
      </div>
      <div class="button-list">
        <a href="https://www.youtube.com/@Tozaburo3D" target="_blank" rel="noopener noreferrer" class="button" onmouseover='replaceDes("Mainly uploading 3D/2D works."); replaceWeek("0.5 / week");'>Youtube</a>
        <a href="https://note.com/tozaburo" target="_blank" rel="noopener noreferrer" class="button" onmouseover='replaceDes("Posting my daily questions, what I have done, etc."); replaceWeek("0.5 / week");'>note</a>
        <a href="https://scratch.mit.edu/users/tozaburo/" target="_blank" rel="noopener noreferrer" class="button" onmouseover='replaceDes("Publishing Simulator and mathematics projects."); replaceWeek("0.5 / week");'>Scratch</a>
        <a href="https://store.line.me/search/en?q=tozaburo" target="_blank" rel="noopener noreferrer" class="button" onmouseover='replaceDes("Stickers and themes are available."); replaceWeek("0.05 / week");'>LINE</a>
        <a href="https://suzuri.jp/Tozaburo" target="_blank" rel="noopener noreferrer" class="button" onmouseover='replaceDes("T-shirts, eco-bags, and other goods."); replaceWeek("0.005 / week");'>SUZURI</a>
        <a href="https://www.curseforge.com/members/tozaburo512/projects" target="_blank" rel="noopener noreferrer" class="button" onmouseover='replaceDes("Mods for Minecraft."); replaceWeek("0.001 / week");'>CurseForge</a>
      </div>
      <div class="detail">
        <div class="about">
          <img src="calender.png" alt="">
          <h2 class="week">? / week</h2>
          <img src="pencil.png" alt="">
          <h2 class="description">Hold the mouse over the button.</h2>
        </div>
      </div>
      <div class="icon">
        <a href="https://tozaburo.github.io/aboutme/">
          <img src="home.png" alt="">
        </a>
      </div>
    </div>
    `;
  }
}
