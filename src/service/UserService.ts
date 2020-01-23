import {UserRepository} from "../repository/UserRepository";
import {User} from "../model/User";

export class UserService {
    private readonly userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUser(userId: string): Promise<User> {
        return await this.userRepository.find(userId);
    }
}
