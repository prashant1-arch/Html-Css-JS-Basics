(function () {
  // code to be executed
})();

var result = (function (a, b) {
  console.log(a + b);
  return a + b;
})(5, 10);

console.log("the sum of two number is " + result);