/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...
var movie = {
  title: "The Matrix",
  duration: 120,
  stars: ["keanu reeves", "daniel chang"]
};

function printMovie() {
  console.log(movie.title + " lasts for about " + movie.duration + ". Stars: ");
  for(var i in movie.stars) {
    console.log(movie.stars[i]);
  }
}

printMovie();
