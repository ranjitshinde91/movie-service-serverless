const UserController = require("./src/controller/UserController");
const GetUserRequest = require("./src/model/GetUserRequest");

exports.handle = async (event) => {
    return await new UserController().handle(new GetUserRequest(event));
};
