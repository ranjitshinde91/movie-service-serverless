class Movie {

    constructor(movieId, name) {
        this.movieId = movieId;
        this.name = name;
    }

    static from(item) {
        return new Movie(item.movieId, item.name);
    }
}

module.exports = Movie;
