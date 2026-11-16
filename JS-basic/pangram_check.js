const pangramChecker = (str) => {
  let inputArr = str.toLowerCase().split("");
  // console.log(inputArr);
  // // console.log("z".charCodeAt());
  const values = inputArr.filter(
    (curElem) =>
      curElem.charCodeAt() >= "a".charCodeAt() &&
      curElem.charCodeAt() <= "z".charCodeAt()
  );
  // console.log(values);

  return new Set(values).size === 26;

  // return [...new Set(values)].length === 26;
};

console.log(pangramChecker("The quick  @ brown fox jumps ove the lazy dog"));