import {GetUserRequest} from "../model/GetUserRequest";
import {UserService} from "../service/UserService";

export class UserController {
    private readonly userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async handle(getUserRequest: GetUserRequest) {
        const user = await this.userService.getUser(getUserRequest.userId());

        if (user != null) {
            return UserController.buildSuccessResponse(user);
        }
    }

    static buildSuccessResponse(body: any) {
        console.log(`Returning SuccessResponse with body ${JSON.stringify(body)}`);
        return {
            "statusCode": 200,
            "body": JSON.stringify(body)
        }
    }

}

