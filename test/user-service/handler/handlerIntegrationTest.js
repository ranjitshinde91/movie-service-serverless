const UserFixture = require("../fixture/UserFixture");
const User = require("../../../src/user-service/src/model/User");

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
        await UserFixture.deleteAll();
    });

    it("should return user given user exists for a user id", (async function () {
        const userId = "user-101";
        const username = "John";

        await UserFixture.save(new User(userId, username));

        const apiUrl = `http://localhost:4567/restapis/${apiId}/test/_user_request_/users/${userId}`;

        const response = await axios.default.get(apiUrl);

        expect(response.status).to.equal(200);

        const user = response.data;
        expect(user.userId).to.be.equal(userId);
        expect(user.username).to.be.equal(username);
    })).timeout(15000);

    it("should return http status not found given user does not exists for a user id", (async function () {

        const apiUrl = `http://localhost:4567/restapis/${apiId}/test/_user_request_/users/non-existing-user-id`;

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
