const MovieController = require("../../../src/movie-service/src/controller/MovieController");
const MovieRepository = require("../../../src/movie-service/src/repository/MovieRepository");
const FindMovieRequest = require("../../../src/movie-service/src/model/FindMovieRequest");
const Movie = require("../../../src/movie-service/src/model/Movie");

const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const sinonTest = require("sinon-test");
const test = sinonTest(sinon);

describe("MovieController", () => {

    it("should return http status 200 as status code given movie exists", test(async function () {
        const movieId = "movie-100";
        const findMovieRequest = new FindMovieRequest({
            pathParameters: {
                movieId: movieId
            }
        });
        this.stub(MovieRepository.prototype, "findBy").returns(new Movie(movieId), "Tumbbad");
        const movieController = new MovieController(findMovieRequest);

        const response = await movieController.handle(findMovieRequest);

        expect(response.statusCode).to.be.eql(200);
    }));

    it("should return movie details as body given movie exists", test(async function () {
        const movieId = "movie-100";
        const movieName = "Tumbbad";
        const findMovieRequest = new FindMovieRequest({
            pathParameters: {
                movieId: movieId
            }
        });
        this.stub(MovieRepository.prototype, "findBy").returns(new Movie(movieId, movieName));
        const movieController = new MovieController(findMovieRequest);

        const response = await movieController.handle(findMovieRequest);

        expect(response.body).to.be.eql(new Movie(movieId, movieName));
    }));

    it("should return application/json as Content-Type given movie exists", test(async function () {
        const movieId = "movie-100";
        const movieName = "Tumbbad";
        const findMovieRequest = new FindMovieRequest({
            pathParameters: {
                movieId: movieId
            }
        });
        this.stub(MovieRepository.prototype, "findBy").returns(new Movie(movieId, movieName));
        const movieController = new MovieController(findMovieRequest);

        const response = await movieController.handle(findMovieRequest);

        expect(response.headers["Content-Type"]).to.be.eql("application/json");
    }));

    it("should return http status 404 given movie does not exist", test(async function () {
        const movieId = "movie-100";
        const findMovieRequest = new FindMovieRequest({
            pathParameters: {
                movieId: movieId
            }
        });
        this.stub(MovieRepository.prototype, "findBy").returns(null);
        const movieController = new MovieController(findMovieRequest);

        const response = await movieController.handle(findMovieRequest);

        expect(response.statusCode).to.be.eql(404);
    }));
});
