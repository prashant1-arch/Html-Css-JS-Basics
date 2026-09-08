//! 2: Drawing Patterns with Asterisks: 🧑‍💻

//*       i\j  1    2    3    4    5
//*       ----------------------------
//*       1    *    -    -    -    -
//*       2    *    *    -    -    -
//*       3    *    *    *    -    -
//*       4    *    *    *    *    -
//*       5    *    *    *    *    *

for (var i = 1; i <= 5; i++) {
  var pattern = "";
  for (var j = 1; j <= i; j++) {
    pattern = pattern + " *";
  }
  console.log(pattern);
}