import {handle} from "../../src/handler";
import {APIGatewayEvent} from "aws-lambda";

import * as sinon from "sinon"
import * as sinonTest from "sinon-test"
import * as chai from "chai";
import {UserController} from "../../src/controller/UserController";

const test = sinonTest(sinon);
const expect = chai.expect;

describe("handlerUnitTest", () => {

    it("should return http status code 200", test(async function () {
        const event: Partial<APIGatewayEvent> = {};

        this.stub(UserController.prototype, "handle").returns({
            statusCode: 200,
        });

        const response = await handle(event);

        expect(response.statusCode).to.be.eql(200)
    }));
});
