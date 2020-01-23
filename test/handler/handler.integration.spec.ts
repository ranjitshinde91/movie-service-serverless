import * as chai from "chai";

import * as fs from "fs";
import * as path from "path";

import * as axios from "axios";
import {UserFixture} from "../fixture/UserFixture";
import {User} from "../../src/model/User";

const expect = chai.expect;

describe("handler (Integration)", () => {

    describe("associate a nudge with a user", () => {
        let apiId = '';

        beforeEach(async () => {
            apiId = fs.readFileSync(path.resolve('test/scripts/.api_id'), 'utf8').trim();
            await UserFixture.deleteAll();
        });

        it("should associate nudge to user on receiving policy issued event", (async function () {
            const userId = "user-101";
            await UserFixture.add(new User(userId, "Ranjit"));

            const apiUrl = `http://localhost:4567/restapis/${apiId}/test/_user_request_/users/${userId}`;

            const response = await axios.default.get(apiUrl);

            expect(response.status).to.equal(200);

            const user = response.data;
            expect(user.userId).to.be.equal(userId);
            expect(user.firstName).to.be.equal("Ranjit");
        })).timeout(15000);
    });
});
