import {APIGatewayEvent} from "aws-lambda";

export class GetUserRequest {
    private readonly event: Partial<APIGatewayEvent>;

    constructor(event: Partial<APIGatewayEvent>) {
        this.event = event;
    }

    userId(): string {
        return this.event.pathParameters.userId;
    }
}
