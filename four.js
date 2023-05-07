var piece = [[1, 2, 3, 4], [], []];
var camloc = 0;
var inventory = 0;

function left() {
  camloc -= 1;
  clampCamloc();
  document.querySelector(".left").animate(
    {
      borderWidth: ["3vmin 3vmin 3vmin 0"],
      marginRight: ["12vmin"]
    },
    {
      fill: "forwards",
      easing: "ease-in-out",
      duration: 200
    }
  );

  document.querySelector(".left").animate(
    {
      borderWidth: ["5vmin 5vmin 5vmin 0"],
      marginRight: ["10vmin"]
    },
    {
      fill: "forwards",
      easing: "ease-in-out",
      duration: 200
    }
  );

  document.querySelector("#number").innerHTML = piece[camloc].length;

  dec();
}

function right() {
  camloc += 1;
  clampCamloc();
  document.querySelector(".right").animate(
    {
      borderWidth: ["3vmin 0 3vmin 3vmin"],
      marginLeft: ["12vmin"]
    },
    {
      fill: "forwards",
      easing: "ease-in-out",
      duration: 200
    }
  );

  document.querySelector(".right").animate(
    {
      borderWidth: ["5vmin 0 5vmin 5vmin"],
      marginLeft: ["10vmin"]
    },
    {
      fill: "forwards",
      easing: "ease-in-out",
      duration: 200
    }
  );

  document.querySelector("#number").innerHTML = piece[camloc].length;

  dec();
}

function up() {
  if ((inventory == 0) & (piece[camloc].length > 0)) {
    inventory = piece[camloc][0];
    piece[camloc].splice(0, 1);
  }

  document.querySelector(".up").animate(
    {
      borderWidth: ["0 3vmin 3vmin 3vmin"],
      marginBottom: ["12vmin"]
    },
    {
      fill: "forwards",
      easing: "ease-in-out",
      duration: 200
    }
  );

  document.querySelector(".up").animate(
    {
      borderWidth: ["0 5vmin 5vmin 5vmin"],
      marginBottom: ["10vmin"]
    },
    {
      fill: "forwards",
      easing: "ease-in-out",
      duration: 200
    }
  );

  document.querySelector("#number").innerHTML = piece[camloc].length;

  dec();
}

function down() {
  if ((inventory != 0) & (piece[camloc][0] > inventory || piece[camloc] == 0)) {
    piece[camloc].unshift(inventory);
    inventory = 0;
  }

  document.querySelector(".down").animate(
    {
      borderWidth: ["3vmin 3vmin 0 3vmin"],
      marginTop: ["12vmin"]
    },
    {
      fill: "forwards",
      easing: "ease-in-out",
      duration: 200
    }
  );

  document.querySelector(".down").animate(
    {
      borderWidth: ["5vmin 5vmin 0 5vmin"],
      marginTop: ["10vmin"]
    },
    {
      fill: "forwards",
      easing: "ease-in-out",
      duration: 200
    }
  );

  document.querySelector("#number").innerHTML = piece[camloc].length;

  dec();
}

function easyAnimation(query, bw, mr) {
  document.querySelector(query).animate(
    {
      borderWidth: [bw],
      marginRight: [mr]
    },
    {
      fill: "forwards",
      easing: "ease-in-out",
      duration: 200
    }
  );
}

function clampCamloc() {
  camloc = (camloc + 3) % 3;
}

function dec() {
  if (piece[2].length == 4) {
    gameClear();
  }
}

function gameClear() {
  document.querySelector("#clear").style.display = "flex";
  document.querySelector("#TKFP").style.display = "flex";
  document.querySelector(".black").animate(
    {
      height: ["100vh"]
    },
    {
      fill: "forwards",
      easing: "ease-in-out",
      duration: 200
    }
  );
}

document.addEventListener("keydown", keydown_ivent);

function keydown_ivent(e) {
  switch (e.key) {
    case "ArrowUp":
      up();
      break;
    case "ArrowDown":
      down();
      break;
    case "ArrowLeft":
      left();
      break;
    case "ArrowRight":
      right();
      break;
  }
}
