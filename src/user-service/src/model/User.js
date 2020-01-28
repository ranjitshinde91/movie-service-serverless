class User {

    constructor(userId, firstName) {
        this.userId = userId;
        this.firstName = firstName;
    }

    static from(item) {
        return new User(item.userId, item.firstName)
    }
}
module.exports = User;
