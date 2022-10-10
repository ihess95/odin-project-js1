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

function playRound() {
  playerChoice = prompt("Choose rock, paper, or scissors please: ");
  compRoll = getComputerChoice();
  if (
    (playerChoice.toLowerCase() === "rock" && compRoll === "scissors") ||
    (playerChoice.toLowerCase() === "paper" && compRoll === "rock") ||
    (playerChoice.toLowerCase() === "scissors" && compRoll === "paper")
  ) {
    pl += 1;
    return `You win! ${playerChoice} beats ${compRoll}.`;
  } else if (
    (playerChoice.toLowerCase() === "rock" && compRoll === "paper") ||
    (playerChoice.toLowerCase() === "paper" && compRoll === "scissors") ||
    (playerChoice.toLowerCase() === "scissors" && compRoll === "rock")
  ) {
    cp += 1;
    return `You lose. ${compRoll} beats ${playerChoice}`;
  } else if (playerChoice.toLowerCase() === compRoll) {
    return `Draw! Both Players rolled ${compRoll}`;
  } else {
    `Error: ${playerChoice} is not a valid roll, please roll again!`;
  }
}

let game = function () {
  for (let count = 0; count <= 4; count += 1) {
    console.log(playRound());
  }
  if (pl > cp) {
    return `You win! Final score: Player - ${pl}, Computer - ${cp}.`;
  } else {
    return `You lose... Final score: Computer - ${cp}, Player - ${pl}.`;
  }
};

let pl = 0;
let cp = 0;
let playerSelection = "";
let compRoll = "";
console.log(game());
