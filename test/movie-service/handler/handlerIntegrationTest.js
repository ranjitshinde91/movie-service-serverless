const MovieFixture = require("../fixture/MovieFixture");
const Movie = require("../../../src/movie-service/src/model/Movie");

const fs = require("fs");
const path = require("path");
const axios = require("axios");
const chai = require("chai");
chai.use(require("chai-as-promised"));
const assert = chai.assert;
const expect = chai.expect;

describe("handler (Integration)", () => {

    let apiId = "";

    beforeEach(async () => {
        apiId = fs.readFileSync(path.resolve("test/scripts/.api_id"), "utf8").trim();
        await MovieFixture.deleteAll();
    });

    it("should return success response given movie exists", (async function () {
        const movieId = "movie-101";
        const movieName = "Tumbbad";

        await MovieFixture.save(new Movie(movieId, movieName));

        const apiUrl = `http://localhost:4567/restapis/${apiId}/test/_user_request_/movies/${movieId}`;

        const response = await axios.default.get(apiUrl);

        expect(response.status).to.equal(200);

        const movie = response.data;
        expect(movie.movieId).to.be.equal(movieId);
        expect(movie.name).to.be.equal(movieName);
    })).timeout(15000);

    it("should return not found response given movie does not exists", (async function () {

        const apiUrl = `http://localhost:4567/restapis/${apiId}/test/_user_request_/movies/non-existing-movie-id`;

        await assertNotFoundOn(apiUrl);
    })).timeout(15000);

    async function assertNotFoundOn(apiUrl) {
        await axios.get(apiUrl)
            .then(() => {
                throw new Error();
            }, error => {
                expect(error.response.status).to.be.eql(404)
            })
            .catch(() => expect.fail("api should return http status notFound"));
    }
});
