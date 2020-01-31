const MovieRepository = require("../repository/MovieRepository");

class MovieController {

    constructor() {
        this.movieRepository = new MovieRepository();
    }

    async handle(findMovieRequest) {
        const movie = await this.movieRepository.findBy(findMovieRequest.movieId());

        if (movie) {
            return MovieController.successResponse(movie);
        }
        return MovieController.notFoundResponse();
    }

    static successResponse(movie) {
        console.log(`returning success response.`);
        return {
            "statusCode": 200,
            "body": JSON.stringify(movie),
            "headers": {
                "Content-Type": "application/json"
            }
        }
    }

    static notFoundResponse() {
        console.log(`returning not found response`);
        return {
            "statusCode": 404,
        }
    }
}

module.exports = MovieController;
