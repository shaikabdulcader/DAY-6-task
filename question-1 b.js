function Movie(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
}

var myMovie = new Movie("Inception", "Warner Bros.");
console.log(myMovie);
