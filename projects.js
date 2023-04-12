var lang = window.navigator.language;

clang();

function clang() {
  if (lang != "ja") {
    document.getElementById("main").innerHTML = `
      <div class="text">
      <div class="title">
        <h1>Projects</h1>
      </div>
      <div class="button-list">
        <a href="https://tozaburo.github.io/aboutme/clock" class="button">New Kind of Clock</a>
        <a href="https://tozaburo.github.io/aboutme/wine" class="button">Quality of Wine</a>
        <a href="https://tozaburo.github.io/aboutme/file" class="button">Files to Python/JS Lists</a>
        <p class="comingsoon">Comming soon...</p>
      </div>
    </div>
    <div class="icon">
      <a href="https://tozaburo.github.io/aboutme/">
        <img src="home.png" alt="">
      </a>
    </div>
    `;
  }
}
