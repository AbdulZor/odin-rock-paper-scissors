function getComputerChoice() {
    // randomly return a string from the following values: rock, paper or scissors.

    // 1. Plan:
    // Use Math.random to get a number that is random.
    // IF random number < (1/3)
    //  THEN RETURN rock
    // ELSE IF random number > (1/3) AND random number < (2/3)
    //  THEN RETURN paper
    // ELSE random number will be bigger than 2/3, but also less than 1
    //  THEN RETURN scissors

    const randomNumber = Math.random();
    if (randomNumber < (1 / 3)) {
        return "rock";
    } else if (randomNumber >= (1 / 3) && randomNumber < (2 / 3)) {
        return "paper";
    }

    return "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    // Get user and computer choice
    // If user choice trumps computer choice, increment score of the winner and log winner announcement

    if (humanScore === 5) {
        displayResult("Human has won the game!");
        humanScore = 0;
        return;
    } else if (computerScore === 5) {
        displayResult("Computer wins the game!");
        computerScore = 0;
        return;
    }

    const humanChoiceResult = getHumanChoiceResult(humanChoice, computerChoice);
    if (humanChoiceResult === 1) {
        humanScore++;
        displayResult("Humans wins!!");
    } else if (humanChoiceResult === -1) {
        computerScore++;
        displayResult("Computer wins!!");
    } else {
        displayResult("It is a tie!");
    }

    return;
}

function getHumanChoiceResult(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        return 1;
    }

    return -1;
}

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

btnRock.addEventListener("click", () => {
    playRound("rock");
});

btnPaper.addEventListener("click", () => {
    playRound("paper");
});

btnScissors.addEventListener("click", () => {
    playRound("scissors");
});


function displayResult(result) {
    const resultsDiv = document.querySelector(".results");
    const newParagraph = document.createElement("p");
    newParagraph.style.margin = 0;
    newParagraph.textContent = result;
    resultsDiv.appendChild(newParagraph);
}
