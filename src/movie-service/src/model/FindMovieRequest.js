class FindMovieRequest {

    constructor(event) {
        this.event = event;
    }

    movieId() {
        return this.event.pathParameters.movieId;
    }
}

module.exports = FindMovieRequest;
