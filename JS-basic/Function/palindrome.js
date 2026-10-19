//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).

// // isi     isi
// radar
// level
const isPalindrome = (str) => {
  let reverse = "";
  for (let char = str.length - 1; char >= 0; char--) {
    reverse = reverse + str[char];
  }
  //   if (str === reverse) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return str === reverse ? true : false;
};

console.log(isPalindrome("level"));