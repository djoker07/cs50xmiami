/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...

var celsius = 30;
var fahrenheit = ((celsius * 9) / 5) + 32;

var fahrenheit2 = 100;
var celsius2 = Math.round(((fahrenheit2 - 32) * 5) / 9);

console.log(celsius + "C is " + fahrenheit + "F");
console.log(fahrenheit2 + "F is " + celsius2 + "C");
