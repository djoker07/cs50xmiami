/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...
var currentYear = 2015;
var bornYear = 1990;
var age = currentYear - bornYear;

console.log("you are either " + age + " or " + (age-1));
