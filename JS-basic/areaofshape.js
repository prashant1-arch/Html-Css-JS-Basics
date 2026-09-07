//! Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.

var areaOfShapes = "square";
var a = 5;
var b = 10;
var result;
switch (areaOfShapes) {
  case "square":
    result = a * a;
    console.log(result);
    break;

  case "rectangle":
    result = a * b;
    console.log(result);
    break;

  case "circle":
    var r = 2;
    result = 3.142 * (r * r);
    console.log(result);
    break;

  default:
    console.log("No shape matches");
}
