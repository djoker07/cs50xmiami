/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

// write your solution here...
var age = 25;
var MAXAGE = 100;
var daily = 3;
var food = ((MAXAGE - age) * 365) * 3;

console.log("you will need " +food+ " meals to last until the ripe old age of " + MAXAGE );
