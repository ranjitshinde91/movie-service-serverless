export type JsonResponse = SuccessResponse<any> | FailedResponse<any>;

export class SuccessResponse<T extends any | null | []> {

    constructor(readonly body: T) {
    }

    get() {
        return this.isBodyNullOrEmpty() ?
            SuccessResponse.buildNotFoundResponse() : this.buildSuccessResponse();
    }

    private isBodyNullOrEmpty() {
        return this.body === null || this.body.length === 0;
    }

    private buildSuccessResponse() {
        console.log("Returning SuccessResponse");
        return {
            "statusCode": 200,
            "body": JSON.stringify(this.body)
        }
    }

    private static buildNotFoundResponse() {
        console.log("Returning NotFound response");
        return {
            "statusCode": 404,
            "body": JSON.stringify({})
        }
    }
}

export class FailedResponse<T extends Error> {

    constructor(readonly error: Error) {
    }

    get() {
        console.log("Returning FailedResponse");
        return FailedResponse.buildResponse();
    }

    private static buildResponse() {
        return {
            "statusCode": 500
        }
    }
}
