import * as chai from "chai";

import * as fs from "fs";
import * as path from "path";

import * as axios from "axios";

const expect = chai.expect;

describe("handler (Integration)", () => {

    describe("associate a nudge with a user", () => {
        let apiId = '';

        beforeEach(async () => {
            apiId = fs.readFileSync(path.resolve('test/scripts/.api_id'), 'utf8').trim();
        });

        it("should associate nudge to user on receiving policy issued event", (async function () {
            const apiUrl = `http://localhost:4567/restapis/${apiId}/test/_user_request_/users/user-100`;

            const response = await axios.default.get(apiUrl);

            expect(response.status).to.equal(200);
        })).timeout(15000);
    });
});
