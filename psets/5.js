/*
DrEvil!

Create a function called DrEvil.
It should take a single argument, an amount, and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million.

For example:
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

function drEvil(amount) {
  // write your solution here...
  var money = amount;
  if(money == 1000000)
  {
    console.log(money + " dollars (pinky)");
  }
  else {
    console.log(money + " dollars");
  }
}

drEvil(10);
drEvil(150);
drEvil(1000000);
