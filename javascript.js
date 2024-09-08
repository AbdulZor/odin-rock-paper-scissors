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

function getHumanChoice() {
    // take user input and return it.

    // 1. Plan:
    // get input from the user
    // check if the user input is a valid choice
    // IF user input is from the following: rock, paper, scissors.
    //  THEN return the valid user input

    let userInput = prompt("What is your choice? Pick one of the following: rock, paper or scissors.");
    userInput = userInput.trim().toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    }

    return;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    // Get user and computer choice
    // If user choice trumps computer choice, increment score of the winner and log winner announcement

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const humanChoiceResult = getHumanChoiceResult(humanChoice, computerChoice);
    if (humanChoiceResult === 1) {
        humanScore++;
        console.log("Humans wins!!");
    } else if (humanChoiceResult === -1) {
        computerScore++;
        console.log("Computer wins!!");
    } else {
        console.log("It is a tie!");
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

function playGame() {
    for (let i = 0; i < 5; i++) {
        if (humanScore === 3 || computerScore === 3) {
            break;
        }
        playRound();
    }

    if (humanScore === 3) {
        console.log("Human has won the game!");
    } else {
        console.log("Computer wins the game!");
    }
}
