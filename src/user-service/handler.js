const UserController = require("./src/controller/UserController");
const FindUserRequest = require("./src/model/FindUserRequest");

exports.handle = async (event) => {
    return await new UserController().handle(new FindUserRequest(event));
};
