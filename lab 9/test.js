
function Movie(name, year, rating){   //owned properties
// this.movieName - "Star Wars"; - this would overwrite all the names 

this.movieName = name; //a string holding the movie name 

this.movieYear = year; //a number 

this.movieRating = rating;

//this.watch = function(){
    //console.log("make the popcorn!");
this.watch = function(){
    let movieToWatch = this.movieName; //we added a method 
    console.log("make the popcorn!", "we are watching", movieToWatch);

}

}
//you could place the let statements here and rewind would be dynamically added 

Movie.prototype.rewind = function (){  //prototype lives outside the constructor, this is like a fallback property
    console.log("what a pain!");
}

let starWars = new Movie("Star Wars",1979,5); //notice how the rating and numbers are listed 

let LOTR = new Movie("Lord of the Rings",2003,4.5);

//console.log (starWars.movieYear); //see the movie year, etc 

starWars.watch();
LOTR.watch();


starWars.rewind(); //checks the owned properties first then goes to the prototype