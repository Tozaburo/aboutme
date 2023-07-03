var lang = window.navigator.language;

window.addEventListener("DOMContentLoaded", function () {
  clang();
});

function clang() {
  if (lang != "ja") {
    document.querySelector("#title").innerHTML = "Projects"
    document.querySelector(".main").innerHTML = `
      <div class="text">
      <div class="title">
        <h1>Projects</h1>
      </div>
      <div class="button-list">
        <a href="https://tozaburo.github.io/aboutme/clock" class="button">New Kind of Clock</a>
        <a href="https://tozaburo.github.io/aboutme/wine" class="button">Quality of Wine</a>
        <a href="https://tozaburo.github.io/aboutme/file" class="button">Files to Python/JS Lists</a>
        <a href="https://tozaburo.github.io/aboutme/four" class="button">Four</a>
        <a href="https://tozaburo.github.io/aboutme/css" class="button">Organize CSS</a>
        <a href="https://tozaburo.github.io/aboutme/biano" class="button">Biano</a>
        <a href="https://tozaburo.github.io/aboutme/sequence" class="button">Next Term Prediction</a>
        <p class="comingsoon">Comming soon...</p>
      </div>
    </div>
    <div class="icon">
        <a href="https://tozaburo.github.io/aboutme/">🏠</a>
      </div>
    `;
  }
}
