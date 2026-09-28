//! Write a function to find sum of two numbers? What if during function call user only passed one argument?

function sum(a,b) {
  return a + b;
}
console.log(sum(5,10)); // Output: 15
//? If user only passed one argument, we can set a default value for the second parameter
function sumWithDefault(a, b = 0) {
    return a + b;
}
console.log(sumWithDefault(5));
