import {User} from "../model/User";
import * as Properties from "../properties";
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";
import DynamoDB = require("aws-sdk/clients/dynamodb");
import GetItemOutput = DocumentClient.GetItemOutput;

const dynamoDbClient = Properties.dynamoDbClient();
const userTableName = Properties.userTableName();

export class UserRepository {

    async find(userId: string): Promise<User> {
        const request: DynamoDB.DocumentClient.GetItemInput = {
            TableName: userTableName,
            Key: {
                'userId': userId
            },
        };
        console.log(`Finding users associated with userId: ${userId}`);
        const response: GetItemOutput = await dynamoDbClient.get(request).promise();
        return User.from(response.Item);
    }
}
