const UserController = require("../../../src/user-service/src/controller/UserController");
const UserRepository = require("../../../src/user-service/src/repository/UserRepository");
const FindUserRequest = require("../../../src/user-service/src/model/FindUserRequest");
const User = require("../../../src/user-service/src/model/User");

const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const sinonTest = require("sinon-test");
const test = sinonTest(sinon);

describe("UserController", () => {

    it("should return http status 200 as status code given user exists", test(async function () {
        const userId = "user-100";
        const findUserRequest = new FindUserRequest({
            pathParameters: {
                userId: userId
            }
        });
        this.stub(UserRepository.prototype, "findBy").returns(new User(userId), "username");
        const userController = new UserController(findUserRequest);

        const response = await userController.handle(findUserRequest);

        expect(response.statusCode).to.be.eql(200);
    }));

    it("should return user details as body given user exists", test(async function () {
        const userId = "user-100";
        const username = "username";
        const findUserRequest = new FindUserRequest({
            pathParameters: {
                userId: userId
            }
        });
        this.stub(UserRepository.prototype, "findBy").returns(new User(userId, username));
        const userController = new UserController(findUserRequest);

        const response = await userController.handle(findUserRequest);

        expect(response.body).to.be.eql(new User(userId, username));
    }));

    it("should return application/json as Content-Type given user exists", test(async function () {
        const userId = "user-100";
        const username = "username";
        const findUserRequest = new FindUserRequest({
            pathParameters: {
                userId: userId
            }
        });
        this.stub(UserRepository.prototype, "findBy").returns(new User(userId, username));
        const userController = new UserController(findUserRequest);

        const response = await userController.handle(findUserRequest);

        expect(response.headers["Content-Type"]).to.be.eql("application/json");
    }));

    it("should return http status 404 given user does not exist", test(async function () {
        const userId = "user-100";
        const findUserRequest = new FindUserRequest({
            pathParameters: {
                userId: userId
            }
        });
        this.stub(UserRepository.prototype, "findBy").returns(null);
        const userController = new UserController(findUserRequest);

        const response = await userController.handle(findUserRequest);

        expect(response.statusCode).to.be.eql(404);
    }));
});
