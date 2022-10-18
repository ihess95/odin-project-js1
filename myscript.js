let pl = 0;
let cp = 0;
let playerSelection = "";
let compRoll = "";
const btns = document.querySelectorAll("button");
const results = document.querySelector("div.results");
const cpuDisplay = document.querySelector("div.cpu");

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
    (playerChoice.toLowerCase() === "rock" && compRoll === "scissors") ||
    (playerChoice.toLowerCase() === "paper" && compRoll === "rock") ||
    (playerChoice.toLowerCase() === "scissors" && compRoll === "paper")
  ) {
    pl += 1;
    results.textContent = `You win! ${playerChoice} beats ${compRoll}.`;
  } else if (
    (playerChoice.toLowerCase() === "rock" && compRoll === "paper") ||
    (playerChoice.toLowerCase() === "paper" && compRoll === "scissors") ||
    (playerChoice.toLowerCase() === "scissors" && compRoll === "rock")
  ) {
    cp += 1;
    results.textContent = `You lose. ${compRoll} beats ${playerChoice}`;
  } else if (playerChoice.toLowerCase() === compRoll) {
    results.textContent = `Draw! Both Players rolled ${compRoll}`;
  } else {
    results.textContent = `Error: ${playerChoice} is not a valid roll, please roll again!`;
  }
}

// This function creates a best three of five game
// let playGame = function () {
//   for (let count = 0; count <= 4; count += 1) {
//     console.log(playRound());
//   }
//   if (pl > cp) {
//     return `You win! Final score: Player - ${pl}, Computer - ${cp}.`;
//   } else {
//     return `You lose... Final score: Computer - ${cp}, Player - ${pl}.`;
//   }
// };

// Running the game from the console:

btns.forEach((btns) =>
  btns.addEventListener("click", () => {
    if (btns.id) {
      playRound(btns.id);
    }
  })
);
// rock.addEventListener("click", () => {
//   playRound("rock");
// });
// paper.addEventListener("click", () => {
//   playRound("paper");
// });
// scissors.addEventListener("click", () => {
//   playRound("scissors");
// });
