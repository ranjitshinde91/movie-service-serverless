const UserService = require("../service/UserService");

class UserController {

    constructor() {
        this.userService = new UserService();
    }

    async handle(getUserRequest) {
        const user = await this.userService.getUser(getUserRequest.userId());

        if (user) {
            return UserController.buildSuccessResponse(user);
        } else {
            return UserController.buildNotFoundResponse();
        }
    }

    static buildSuccessResponse(body) {
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

module.exports = UserController;
