const FindMovieRequest = require("../../../src/movie-service/src/model/FindMovieRequest");

const chai = require("chai");
const expect = chai.expect;

describe("FindMovieRequest", () => {

    it("should return movie id", () => {
        const event = {
            pathParameters: {
                movieId: "movie-100"
            }
        };
        const findMovieRequest = new FindMovieRequest(event);

        expect(findMovieRequest.movieId()).to.be.eql("movie-100");
    });
});
