/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  // write your solution here...
  var notL = sentence.search("not");
  var badL = sentence.search("bad");
  if(notL > 0) {
    if(badL > notL) {
      var newString = sentence.slice(0, notL);
      var newString = newString.concat("good");
      console.log(newString);
    }
  }
  else {
    console.log(sentence); 
  }

}

notBad("this dinner is not that bad");
notBad("this dinner is bad");
