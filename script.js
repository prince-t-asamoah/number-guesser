let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Generate random target number between 0 to 9
const generateTarget = () => {
  let randomIntegers = Math.floor(Math.random() * 10);
  return randomIntegers;
}

//Finds difference between target and guess number
const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
}

//Checks which guess is closer to target number
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    return window.alert('Please enter a number between 0 and 9'); //Alert to prompt users if input is out of range.
  } else {
    let userDifference = getAbsoluteDistance(userGuess, targetNumber);
    let computerDifference = getAbsoluteDistance(computerGuess, targetNumber);

    if (userDifference < computerDifference) {
      return true;
    } else if (computerDifference < userDifference) {
      return false;
    } else {
      return true;
    }
  }
}
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}
const advanceRound = () => {
  return currentRoundNumber++;
}
