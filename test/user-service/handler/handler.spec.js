const handler = require("../../../src/user-service/handler");
const UserController = require("../../../src/user-service/src/controller/UserController");

const sinon = require("sinon");
const sinonTest = require("sinon-test");
const test = sinonTest(sinon);
const chai = require("chai");
const expect = chai.expect;

describe("handlerUnitTest", () => {

    it("should return http status code 200", test(async function () {
        const event = {};

        this.stub(UserController.prototype, "handle").returns({
            statusCode: 200,
        });

        const response = await handler.handle(event);

        expect(response.statusCode).to.be.eql(200)
    }));
});
