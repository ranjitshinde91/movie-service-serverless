class User {

    constructor(userId, username) {
        this.userId = userId;
        this.username = username;
    }

    static from(item) {
        return new User(item.userId, item.username)
    }
}
module.exports = User;
