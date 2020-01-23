import {handle} from "../../src/handler";
import {APIGatewayEvent} from "aws-lambda";

import * as sinon from "sinon"
import * as sinonTest from "sinon-test"
const test = sinonTest(sinon);
import * as chai from "chai";
const expect = chai.expect;

describe("handlerUnitTest", () => {

    it("should return http status code 200", test(async function () {
        const event: Partial<APIGatewayEvent> = {};

        const response = await handle(event);

        expect(response.statusCode).to.be.eql(200)
    }));
});
