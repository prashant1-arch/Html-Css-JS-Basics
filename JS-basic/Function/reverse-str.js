//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.

const isReverse = (str) => {
  let reverse = "";
  for (let char = str.length - 1; char >= 0; char--) {
    reverse = reverse + str[char];
  }
  return reverse;
};

console.log(isReverse("prashat savita")); // Output: ativas tahsarp 