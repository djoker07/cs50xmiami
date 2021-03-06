/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function fortuneTeller(numKids, partnerName, geoLocation, title){
  console.log("You will be a " + title + " in " + geoLocation +
              ", and married to " + partnerName + " with " + numKids + " kids");
}

fortuneTeller(4, "vanessa", "miami", "JS developer");
fortuneTeller(2, "chang", "alaska", "architect");
