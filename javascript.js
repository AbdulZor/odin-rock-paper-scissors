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

console.log(getHumanChoice());