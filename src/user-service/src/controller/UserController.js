const UserRepository = require("../repository/UserRepository");

class UserController {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async handle(findUserRequest) {
        const user = await this.userRepository.findBy(findUserRequest.userId());

        if (user) {
            return UserController.successResponse(user);
        }
        return UserController.notFoundResponse();
    }

    static successResponse(body) {
        console.log(`returning success response.`);
        return {
            "statusCode": 200,
            "body": body,
            "headers": {
                "Content-Type": "application/json"
            }
        }
    }

    static notFoundResponse() {
        console.log(`returning not found response`);
        return {
            "statusCode": 404,
        }
    }
}

module.exports = UserController;
