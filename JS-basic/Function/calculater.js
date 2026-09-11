
//!JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.


const calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      result = num1 - num2;
      return result;

    case "*":
      result = num1 * num2;
      return result;

    case "/":
      if (num2 === 0) {
        return "0 is not allowed";
      } else {
        result = num1 / num2;
        return result;
      }

    default:
      return "no operator found";
  }
};

console.log(calculator(5, 2, "+")); // Output: 7
console.log(calculator(8, 4, "-")); // Output: 4
console.log(calculator(10, 0, "/")); // Output: 0 is not allowed