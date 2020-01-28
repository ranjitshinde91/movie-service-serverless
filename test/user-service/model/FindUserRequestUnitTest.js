const FindUserRequest = require("../../../src/user-service/src/model/FindUserRequest");

const chai = require("chai");
const expect = chai.expect;

describe("FindUserRequest", () => {

    it("should return user id", () => {
        const event = {
            pathParameters: {
                userId: "user-100"
            }
        };
        const findUserRequest = new FindUserRequest(event);

        expect(findUserRequest.userId()).to.be.eql("user-100");
    });
});
