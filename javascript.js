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
