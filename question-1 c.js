function Movie(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;

    this.getPG = function(movieArray) {
        return movieArray.filter(movie => movie.rating === "PG");
    };
}

var movies = [
    new Movie("AVENGERS", "MARVEL", "PG"),
    new Movie("BATMAN", "DC", "R"),
    new Movie("FLASH", "DCU", "PG-13"),
    new Movie("ENDGAME", "MARVEL", "PG"),
];

const movieInstance = new Movie("SampleMovie", "SampleStudio", "PG-13");

// Getting movies with rating "PG" from the array
const myMovies = movieInstance.getPG(movies);

console.log(myMovies);

