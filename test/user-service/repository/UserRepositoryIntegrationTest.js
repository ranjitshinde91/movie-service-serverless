const chai = require("chai");
const expect = chai.expect;

const UserRepository = require("../../../src/user-service/src/repository/UserRepository");
const User = require("../../../src/user-service/src/model/User");
const UserFixture = require("../fixture/UserFixture");

describe("UserRepositoryIntegrationTest", () => {

    beforeEach(async () => {
        await UserFixture.deleteAll();
    });

    it("should return user given user id", async function () {
        const userId = "userId";
        const username = "user1";

        await UserFixture.add(new User(userId, username));

        const user = await new UserRepository().findBy(userId);

        expect(user.userId).to.be.eql(userId);
        expect(user.username).to.be.eql(username);
    });

    it("should return null given user does not exists", async function () {
        const userId = "non-existing-user-id";

        const user = await new UserRepository().findBy(userId);

        expect(user).to.be.null;
    });
});
