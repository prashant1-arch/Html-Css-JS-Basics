//!1: program To check if a year is a leap year🧑‍💻


var year = 2028;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year, "it's a leap year");
} else {
  console.log(year, "it's not a leap year");
}