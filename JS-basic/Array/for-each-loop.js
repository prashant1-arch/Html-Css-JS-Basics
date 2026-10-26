
let fruits = ["apple", "orange", "mango", "grapes", "banana"];
const myForEachArr = fruits.forEach((curElem, index, arr) => {
  return `${curElem} ${index}`;
    // console.log(arr);
});
console.log(myForEachArr);