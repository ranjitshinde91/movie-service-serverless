const UserRepository = require("../repository/UserRepository");

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUser(userId) {
        return await this.userRepository.find(userId);
    }
}
module.exports = UserService;
