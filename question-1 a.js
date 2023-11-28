function movie(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
}

const myMovie = new movie("Inception", "Warner Bros.", "PG-13");
console.log(myMovie);
console.log(myMovie.title);
console.log(myMovie.studio);
console.log(myMovie.rating);