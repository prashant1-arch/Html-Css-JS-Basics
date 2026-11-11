// todo Challenge time
// ? 1: Add Dec at the end of an array?
// ? 2: What is the return value of splice method?
// ? 3: Update march to March (update)?
// ? 4: Delete June from an array?

const months = ["Jan", "march", "April", "June", "July"];

// 1
months.splice(months.length, 0, "Dec");
// console.log(months);

// 2:
// When used to add elements, the splice method returns an empty array ([]).

// 3
const indexToUpdate = months.indexOf("march");
months.splice(indexToUpdate, 1, "March");
// console.log(months);

// 4
const indexToDelete = months.indexOf("June");
months.splice(indexToDelete, 1);
console.log(months);