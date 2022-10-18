let pl = 0;
let cp = 0;
let playerSelection = "";
let compRoll = "";
const btns = document.querySelectorAll("button");
const results = document.querySelector("div.results");
const cpuDisplay = document.querySelector("div.cpu");
const scoreDiv = document.querySelector("div.score");
const scoreH1 = document.createElement("h1");
const resetDiv = document.querySelector("div.reset");
const resetButton = document.createElement("button");
scoreH1.textContent = `${pl} : ${cp}`;
scoreDiv.appendChild(scoreH1);

// This function creates a randomly generated roll for computer player
function getComputerChoice() {
  let roll = "";
  let randNum = Math.floor(Math.random() * 10);
  if (randNum > 0 && randNum <= 3) {
    roll = "rock";
  } else if (randNum > 3 && randNum <= 6) {
    roll = "paper";
  } else {
    roll = "scissors";
  }
  return roll;
}

// This function contains logic for one round of play.
function playRound(playerChoice) {
  compRoll = getComputerChoice();
  cpuDisplay.textContent = `The Computer rolled ${compRoll}.`;

  if (
    //if player wins
    (playerChoice.toLowerCase() === "rock" && compRoll === "scissors") ||
    (playerChoice.toLowerCase() === "paper" && compRoll === "rock") ||
    (playerChoice.toLowerCase() === "scissors" && compRoll === "paper")
  ) {
    pl += 1;
    results.textContent = `You win! ${playerChoice} beats ${compRoll}.`;
    results.style.color = "green";
  } else if (
    // cpu wins
    (playerChoice.toLowerCase() === "rock" && compRoll === "paper") ||
    (playerChoice.toLowerCase() === "paper" && compRoll === "scissors") ||
    (playerChoice.toLowerCase() === "scissors" && compRoll === "rock")
  ) {
    cp += 1;
    results.textContent = `You lose. ${compRoll} beats ${playerChoice}`;
    results.style.color = "red";
  } else if (playerChoice.toLowerCase() === compRoll) {
    //draw
    results.textContent = `Draw! Both Players rolled ${compRoll}`;
    results.style.color = "black";
  } else {
    //error
    results.textContent = `Error: ${playerChoice} is not a valid roll, please roll again!`;
  }
  updateScore(pl, cp);
  if (pl >= 5 || cp >= 5) {
    gameOver();
  }
}

function updateScore(pl, cp) {
  scoreH1.textContent = `${pl} : ${cp}`;
  scoreDiv.appendChild(scoreH1);
}

function resetGame() {
  pl = 0;
  cp = 0;
  updateScore(pl, cp);
  btns.forEach((btns) => (btns.style.display = "inline"));
  resetDiv.removeChild(resetButton);
}
function gameOver() {
  btns.forEach((btns) => (btns.style.display = "none"));
  resetButton.textContent = "Play Again?";
  resetDiv.appendChild(resetButton);
  if (pl > cp) {
    return `You win! Final score: Player - ${pl}, Computer - ${cp}.`;
  } else {
    return `You lose... Final score: Computer - ${cp}, Player - ${pl}.`;
  }
}
// Running the game from the console:

btns.forEach((btns) =>
  btns.addEventListener("click", () => {
    if (btns.id) {
      playRound(btns.id);
    }
  })
);

resetButton.addEventListener("click", () => {
  resetGame();
});
// rock.addEventListener("click", () => {
//   playRound("rock");
// });
// paper.addEventListener("click", () => {
//   playRound("paper");
// });
// scissors.addEventListener("click", () => {
//   playRound("scissors");
// });
