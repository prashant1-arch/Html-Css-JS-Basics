const numbers = [1, 2, 3, 4, 5];
// forEach -  Performs an action on each element
// map -  Creates a new array with transformed elements

numbers.forEach((curElem) => {
  console.log(curElem * 2);
  //   Performs an action on each element
});

const doubleValue = numbers.map((curElem) => {
  return curElem * 2;
  //   Creates a new array with transformed elements
});

console.log(doubleValue);