// noinspection JSUnresolvedFunction
const chai = require("chai");
const expect = chai.expect;

const UserRepository = require("../../../src/user-service/src/repository/UserRepository");
const User = require("../../../src/user-service/src/model/User");
const UserFixture = require("../fixture/UserFixture");

describe("UserRepositoryIntegrationTest", () => {

    beforeEach(async () => {
        await UserFixture.deleteAll();
    });

    it("should find user given user id", async function () {
        const userId = "userId";
        const firstName = "John";

        await UserFixture.add(new User(userId, firstName));

        const user = await new UserRepository().find(userId);

        expect(user.userId).to.be.eql(userId);
        expect(user.firstName).to.be.eql(firstName);
    });

    it("should return null given user with userId does not exists", async function () {
        const userId = "non-existing-user-id";

        const user = await new UserRepository().find(userId);

        expect(user).to.be.null;
    });
});
