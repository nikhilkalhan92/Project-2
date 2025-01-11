// Initialize Global Variables
let userScore = 0;
let computerScore = 0;
let totalUserScore = 0;
let totalComputerScore = 0;
let count = 0;

// Event Listeners (Set AFTER DOM Loads)
window.onload = function () {
    document.getElementById("rockButton").addEventListener("click", () => bigBang('rock', getRandomChoice()));
    document.getElementById("paperButton").addEventListener("click", () => bigBang('paper', getRandomChoice()));
    document.getElementById("scissorsButton").addEventListener("click", () => bigBang('scissors', getRandomChoice()));
    document.getElementById("lizardButton").addEventListener("click", () => bigBang('lizard', getRandomChoice()));
    document.getElementById("spockButton").addEventListener("click", () => bigBang('spock', getRandomChoice()));
};

// Random Choice Function for the Computer
function getRandomChoice() {
    const options = ["rock", "paper", "scissors", "lizard", "spock"];
    return options[Math.floor(Math.random() * options.length)];
}

// Main Game Logic
function bigBang(choice1, choice2) {
    const options = ["rock", "paper", "scissors", "lizard", "spock"];
    const index1 = options.indexOf(choice1);
    const index2 = options.indexOf(choice2);

    let dif = index2 - index1;
    if (dif < 0) dif += options.length;
    while (dif > 2) dif -= 2;

    if (dif === 1) {
        userScore++;
        totalUserScore++;
    } else if (dif === 2) {
        computerScore++;
        totalComputerScore++;
    }

    count++;
    updateUI(choice1, choice2, dif);
    updateTotalScore();

    if (count === 3) {
        endGame();
    }
}

// Update the Score and Results Display
function updateUI(choice1, choice2, dif) {
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("resultText").textContent = `${choice1} vs ${choice2}`;
}

// Update the Total Score
function updateTotalScore() {
    document.getElementById("totalScore").textContent = `${totalUserScore} - ${totalComputerScore}`;
}

// Reset Game
function startNew() {
    userScore = 0;
    computerScore = 0;
    count = 0;
    document.getElementById("userScore").textContent = "0";
    document.getElementById("computerScore").textContent = "0";
    document.getElementById("resultText").textContent = "";
}

// End Game Check
function endGame() {
    alert(userScore > computerScore ? "You Won!" : userScore < computerScore ? "Computer Won!" : "It's a Tie!");
    updateTotalScore();
}
