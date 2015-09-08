/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...
  var first = s.charAt(0);
  var str = s;

  for(var i = 0; i <= s.length; i++)
  {
    if(str.charAt(i) == first)
    {
      console.log(i);
      var str = str.replace(str.charAt(i), "*");

    }

  }
  var str = str.replace(str.charAt(0), first);
  console.log(str);
}

fixStart("lalalallala");
