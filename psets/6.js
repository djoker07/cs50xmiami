/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  // write your solution here...
  var x = a;
  var y = b;
  //indexing the right chars in the strings
  var x = x.replace(x.charAt(0), b.charAt(0));
  var x = x.replace(x.charAt(1), b.charAt(1));
  var y = y.replace(y.charAt(0), a.charAt(0));
  var y = y.replace(y.charAt(1), a.charAt(1));
  //concatinate one with the other and adding a space in between
  console.log(x.concat(" " + y));
}

mixUp("mix", "pod");
