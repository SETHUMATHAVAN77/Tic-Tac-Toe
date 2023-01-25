// elements
let cells = document.querySelectorAll(".cell");
// create an array
cells = Array.from(cells);

// global variables

let currentPlayer = "X";

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// function
function checkForWinner() {
  winningCombinations.forEach((combination) => {
    let check = combination.every(
      (idx) => cells[idx].innerText.trim() == currentPlayer
    );
    if (check) {
      highlightCells(combination);
    }
  });
}
// highlight the winner

function highlightCells(combination) {
  combination.forEach((idx) => {
    cells[idx].classList.add("highlight");
  });
}

// eventListeners

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerText.trim() != "") return;
    cell.innerText = currentPlayer;
    checkForWinner();
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  });
});
