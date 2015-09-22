/*
The Calculator

- Write a function called squareNumber that will take one argument (a number),
  square that number, and return the result.
  It should also log a string like "The result of squaring the number 3 is 9."

- Write a function called halfNumber that will take one argument (a number),
  divide it by 2, and return the result.
  It should also log a string like "Half of 5 is 2.5.".

- Write a function called percentOf that will take two numbers,
  figure out what percent the first number represents of the second number,
  and return the result. It should also log a string like "2 is 50% of 4."

- Write a function called areaOfCircle that will take one argument (the radius),
  calculate the area based on that, and return the result.
  It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  - Bonus: Round the result so there are only two digits after the decimal.

Write a function that will take one argument (a number) and perform the following operations,
  using the functions you wrote earlier:
  - Take half of the number and store the result.
  - Square the result of #1 and store that result.
  - Calculate the area of a circle with the result of #2 as the radius.
  - Calculate what percentage that area is of the squared result (#3).
*/

// write your solution here...
var PI = 3.14;

function squareNumber(number) {
  var square = number * number;
  return square;
}

function halfNumber(number) {
  var half = number / 2;
  return half;
}

function percentOf(part, total) {
  var percent = Math.round((part / total) * 100);
  return percent;
}

function areaOfCircle(radius) {
  var area = Math.round(PI * squareNumber(radius));
  var fixed = area.toFixed(2);
  return fixed;
}

function execute(number) {
   var result = halfNumber(number);
   console.log("the half of " + number + " is " + result);

   var result1 = squareNumber(result);
   console.log("the result of squaring " + result + " is " + result1);

   var result2 = areaOfCircle(result1);
   console.log("the area of the circle with radius " + result1 + " is " + result2);

   var result3 = percentOf(result2, squareNumber(result2) );
   console.log(result2 + " is " + result3 + "% of " + squareNumber(result2));
}

execute(5);
execute(6);
