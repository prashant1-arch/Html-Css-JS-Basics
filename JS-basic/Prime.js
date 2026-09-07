
var num = 13;
var isPrime = true;

for (var i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Num is prime");
} else {
  console.log("Num is not prime");
}