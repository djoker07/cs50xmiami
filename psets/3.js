/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
var PI = 3.14;
var circleRadius = 5;
var diameter = 2 * circleRadius;
var circumference = PI * diameter;
var circleArea = PI * (circleRadius * circleRadius);

console.log("the circumference is "+ circumference);
console.log("the area is " + circleArea);
