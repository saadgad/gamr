const mainH1 = document.querySelector(".main-screen--text");
const [level1, level2, level3, level4, level5, level6] =
  document.querySelectorAll(".main-level");
const levels = [level1, level2, level3, level4, level5, level6];
const sublevels = [
  "sublevel 1",
  "sublevel 2",
  "sublevel 3",
  "sublevel 4",
  "sublevel 5",
  "sublevel 6",
];
let chosenLevel;
for (level of levels) {
  level.addEventListener("click", (e) => {
    if (level.classList.contains("main-level")) {
      chosenLevel = e.target.textContent;
      mainH1.textContent = e.target.textContent;
      //delete levels
      deletLevels();
      //add sublevels
      addSublevels();
      //add sublevels content
      addSublevelsContent();
      console.log(e.target.textContent);
    }
  });
}

function deletLevels() {
  for (level of levels) {
    level.classList.remove("main-level");
  }
}

function addSublevels() {
  for (level of levels) {
    level.classList.add("sublevel");
  }
}

function addSublevelsContent() {
  for (let i = 0; i < levels.length; i++) {
    levels[i].textContent = chosenLevel + " " + sublevels[i];
  }
}
