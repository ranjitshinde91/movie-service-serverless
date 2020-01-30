const handler = require("../../../src/user-service/handler");
const UserController = require("../../../src/user-service/src/controller/UserController");
const FindUserRequest = require("../../../src/user-service/src/model/FindUserRequest");

const sinon = require("sinon");
const sinonTest = require("sinon-test");
const test = sinonTest(sinon);
const chai = require("chai");
const expect = chai.expect;

describe("handlerUnitTest", () => {
    it("should return the response returned by UserController", test(async function () {
        const event = {};

        this.stub(UserController.prototype, "handle").returns({statusCode: 404});

        const response = await handler.handle(event);

        expect(response.statusCode).to.be.eql(404);
    }));
});
