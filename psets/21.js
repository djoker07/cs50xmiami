/*
The Recipe Card

Never forget another recipe!

- Create an object to hold information on your favorite recipe. It should have
  properties for title (a string), servings (a number),
  and ingredients (an array of strings).

- On separate lines (one console.log statement for each), log the recipe
  information so it looks like:
    Mole
    Serves: 2
    Ingredients:
    cinnamon
    cumin
    cocoa
*/

// write your solution here...
var recipe = {
  title : "the chang",
  servings : 2,
  ingredients : ["chicken", "mozarella cheese", "bread crumbs", "tomato sauce"]
};
console.log(recipe.title);
console.log("serves: " + recipe.servings);
console.log("Ingredients: ");
for(var i in recipe.ingredients) {
  console.log(recipe.ingredients[i]);
}
