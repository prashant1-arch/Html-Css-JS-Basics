const checkAllVowelPresentOrNot = (str) => {
  const vowels = "aeiou";
  for (let char of vowels) {
    // console.log(char);
    // console.log(str.includes(char));
    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
};

console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));