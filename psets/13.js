/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...

var PI = 3.14;

function calcCircumfrence(radius){
  var diameter = 2 * radius;
  var circumference = PI * diameter;
  console.log("the circumference is " + circumference);

}

function calcArea(radius){
  var circleArea = PI * (radius * radius);
  console.log("the area is " + circleArea);
}


calcCircumfrence(4);
calcArea(4);
