// 1. Deposit money
// 2. Determine number of lines to bet on 
// 3. Collect bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings/take money
// 7. Play again/no money

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
     }
  }
}; 

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
        console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines;
     }
  }
}