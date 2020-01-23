import {GetUserRequest} from "../model/GetUserRequest";
import {UserService} from "../service/UserService";

export class UserController {
    private readonly userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async handle(getUserRequest: GetUserRequest) {
        const user = await this.userService.getUser(getUserRequest.userId());

        if (user) {
            return UserController.buildSuccessResponse(user);
        } else {
            return UserController.buildNotFoundResponse();
        }
    }

    static buildSuccessResponse(body: any) {
        console.log(`Returning SuccessResponse with body ${JSON.stringify(body)}`);
        return {
            "statusCode": 200,
            "body": JSON.stringify(body)
        }
    }

    static buildNotFoundResponse() {
        console.log(`Returning buildNotFoundResponse`);
        return {
            "statusCode": 404,
        }
    }
}
