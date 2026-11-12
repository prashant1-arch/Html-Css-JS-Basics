//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

// const result = numbers.find((curElem) => {
//   return curElem > 6;
// });

// console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.map((curElem) => curElem * 5);
// console.log(result);
// const result2 = result.findIndex((curElem) => {
//   return curElem > 15;
// });
// console.log(result2);

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.filter((curElem) => {
//   return curElem > 4;
// });

// console.log(result);