const handler = require("../../../src/movie-service/handler");
const MovieController = require("../../../src/movie-service/src/controller/MovieController");
const FindMovieRequest = require("../../../src/movie-service/src/model/FindMovieRequest");

const sinon = require("sinon");
const sinonTest = require("sinon-test");
const test = sinonTest(sinon);
const chai = require("chai");
const expect = chai.expect;

describe("handlerUnitTest", () => {
    it("should return the response returned by MovieController", test(async function () {
        const event = {};

        this.stub(MovieController.prototype, "handle").returns({statusCode: 404});

        const response = await handler.handle(event);

        expect(response.statusCode).to.be.eql(404);
    }));
});
