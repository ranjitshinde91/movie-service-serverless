class FindUserRequest {

    constructor(event) {
        this.event = event;
    }

    userId() {
        return this.event.pathParameters.userId;
    }
}

module.exports = FindUserRequest;
