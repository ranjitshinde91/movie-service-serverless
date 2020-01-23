import {APIGatewayEvent} from "aws-lambda";
import {UserController} from "./controller/UserController";
import {GetUserRequest} from "./model/GetUserRequest";

export const handle = async (event: Partial<APIGatewayEvent>) => {
    return await new UserController().handle(new GetUserRequest(event));
};
