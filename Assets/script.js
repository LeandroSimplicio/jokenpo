const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const opponentScore = document.querySelector(".opponent-score");
const opponentChoiceDisplay = document.querySelector(".opponent-choice span");
let playerScore = 0;
let opponentScoreValue = 0;
let playerChoice;
let opponentChoice;
const choices = ["rock", "paper", "scissors"];
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.id;
    opponentChoice = choices[Math.floor(Math.random() * choices.length)];
    playGame(playerChoice, opponentChoice);
  });
});
function playGame(playerChoice, opponentChoice) {
  if (playerChoice === opponentChoice) {
    resultMessage = "Empate!";
  } else if (
    (playerChoice === "rock" && opponentChoice === "scissors") ||
    (playerChoice === "paper" && opponentChoice === "rock") ||
    (playerChoice === "scissors" && opponentChoice === "paper")
  ) {
    resultMessage = "Você ganhou!";
    playerScore++;
  } else {
    resultMessage = "Você perdeu!";
    opponentScoreValue++;
  }
  updateUI();

  console.log(
    `Você escolheu: ${playerChoice}, Adversário escolheu: ${opponentChoice}`
  );
}

function updateUI() {
  result.textContent = resultMessage;
  score.querySelector("span").textContent = playerScore;
  opponentScore.querySelector("span").textContent = opponentScoreValue;
  opponentChoiceDisplay.textContent = opponentChoice;
}
updateUI();
// Adiciona um evento de teclado para reiniciar o jogo
document.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    playerScore = 0;
    opponentScoreValue = 0;
    result.textContent = "";
    updateUI();
  }
});
