export class User {

    constructor(readonly userId: string, readonly firstName: string) {
    }

    static from(item: any): User {
        return new User(item.userId, item.firstName)
    }
}
