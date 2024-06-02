// Cells Operations-------------------
let body = document.querySelector("body");
let GameName = document.querySelector(".GameName");
let msgContainer = document.querySelector(".msg-container");
let winner = document.querySelector(".winner");
let newGame = document.querySelector(".new-game");
let restartButton = document.querySelector(".RestartButton");
let cells = document.querySelectorAll(".cell");
let darkModeButton = document.querySelector(".dark-mode-button");
let turnO = true; // PlayerX(true), PlayerO(false)
let count = 0;
let winpattren = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// disable cells
const disableCells = () => {
  cells.forEach((cell) => {
    cell.classList.add("disabled");
  });
};
// Enable cells
const enableCells = () => {
  cells.forEach((cell) => {
    cell.classList.remove("disabled");
  });
};
// Show Winner function
function showWinner(winnerPerson) {
  msgContainer.classList.remove("hide");
  winner.innerText = `Congratulations😎, Winner is ${winnerPerson}`;
  disableCells();
}
// Check Winner function
let checkWinner = () => {
  for (let pattren of winpattren) {
    let pos1 = cells[pattren[0]].innerText;
    let pos2 = cells[pattren[1]].innerText;
    let pos3 = cells[pattren[2]].innerText;
    if ((pos1 === pos2) & (pos2 === pos3) && pos1 !== "") {
      showWinner(pos1);
      count = 0;
    }
  }
};
// disapper function of all cell
let disapperAll = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
  turnO = true;
  count = 0;
  msgContainer.classList.add("hide");
  enableCells();
};
// Match is draw
function matchIsDraw() {
  msgContainer.classList.remove("hide");
  winner.innerText = `Match is DRAW🙄😔🫠`;
  disableCells();
}
// When click on any cell
cells.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      if (turnO == true) {
        box.innerText = "O";
        turnO = false;
      } else {
        box.innerText = "X";
        turnO = true;
      }
      count++;
    }
    checkWinner();
    if (count === 9) {
      matchIsDraw();
    }
  });
});
// Restart button-----------------
restartButton.addEventListener("click", disapperAll);
// new game button-----------
newGame.addEventListener("click", disapperAll);
// Dark mode Button---------------------
let currentMode = "light";
darkModeButton.addEventListener("click", () => {
  if (currentMode == "light") {
    currentMode = "dark";
    GameName.style.color = "white";
    body.style.backgroundColor = "black";
    darkModeButton.style.backgroundColor = "white";
    darkModeButton.style.color = "black";
    winner.style.color = "white";
  } else {
    currentMode = "light";
    GameName.style.color = "black";
    body.style.backgroundColor = "#FFE8C5";
    darkModeButton.style.backgroundColor = "black";
    darkModeButton.style.color = "white";
    winner.style.color = "black";
  }
});
