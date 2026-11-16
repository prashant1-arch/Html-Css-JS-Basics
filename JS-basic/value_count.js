const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str) {
    console.log(char);
    // console.log(str.includes(char));
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
  console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));
console.log(countVowels("Hello a i o u world"));