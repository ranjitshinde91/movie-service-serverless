import * as chai from "chai";

import * as fs from "fs";
import * as path from "path";

import * as axios from "axios";
import {UserFixture} from "../fixture/UserFixture";
import {User} from "../../src/model/User";

const expect = chai.expect;

describe("handler (Integration)", () => {

    let apiId = '';

    beforeEach(async () => {
        apiId = fs.readFileSync(path.resolve('test/scripts/.api_id'), 'utf8').trim();
        await UserFixture.deleteAll();
    });

    it("should return user given user exists for a user id", (async function () {
        const userId = "user-101";

        await UserFixture.add(new User(userId, "Ranjit"));

        const apiUrl = `http://localhost:4567/restapis/${apiId}/test/_user_request_/users/${userId}`;

        const response = await axios.default.get(apiUrl);

        expect(response.status).to.equal(200);

        const user = response.data;
        expect(user.userId).to.be.equal(userId);
        expect(user.firstName).to.be.equal("Ranjit");
    })).timeout(15000);

    it("should return http status not found given user does not exists for a user id", (async function () {

        const apiUrl = `http://localhost:4567/restapis/${apiId}/test/_user_request_/users/non-existing-user-id`;

        await assertNotFoundOn(apiUrl);
    })).timeout(15000);

    async function assertNotFoundOn(apiUrl) {
        await axios.default.get(apiUrl)
            .then(() => {
                throw new Error();
            }, error => {
                expect(error.response.status).to.be.eql(404)
            })
            .catch(() => expect.fail("api should return http status notFound"));
    }
});
