const chai = require("chai");
const expect = chai.expect;

const MovieRepository = require("../../../src/movie-service/src/repository/MovieRepository");
const Movie = require("../../../src/movie-service/src/model/Movie");
const MovieFixture = require("../fixture/MovieFixture");

describe("MovieRepositoryIntegrationTest", () => {

    beforeEach(async () => {
        await MovieFixture.deleteAll();
    });

    it("should return movie given movie id", async function () {
        const movieId   = "movie-100";
        const movieName = "Tumbbad";

        await MovieFixture.save(new Movie(movieId, movieName));

        const movie = await new MovieRepository().findBy(movieId);

        expect(movie.movieId).to.be.eql(movieId);
        expect(movie.name).to.be.eql(movieName);
    });

    it("should return null given movie does not exists", async function () {
        const movieId = "non-existing-movie-id";

        const movie = await new MovieRepository().findBy(movieId);

        expect(movie).to.be.null;
    });
});
