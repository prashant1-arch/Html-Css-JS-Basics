let userInput;
let positiveNumber;
do {
  userInput = prompt("enter any positive number");
  positiveNumber = parseFloat(userInput);
} while (isNaN(positiveNumber) || positiveNumber < 0);
console.log("You entered a valid positive number:", positiveNumber);