const handler = require("../../../src/user-service/handler");
const UserController = require("../../../src/user-service/src/controller/UserController");
const FindUserRequest = require("../../../src/user-service/src/model/FindUserRequest");

const sinon = require("sinon");
const sinonTest = require("sinon-test");
const test = sinonTest(sinon);
const chai = require("chai");
const expect = chai.expect;

describe("handlerUnitTest", () => {

    it("should handle find User event", test(async function () {
        const event = {};

        const UserControllerStub = this.stub(UserController.prototype, "handle");

        const response = await handler.handle(event);

        sinon.assert.calledWith(UserControllerStub, new FindUserRequest(event));
    }));
});
