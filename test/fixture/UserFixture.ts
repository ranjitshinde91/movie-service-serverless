import * as Properties from "../../src/properties";
import {User} from "../../src/model/User";

const dynamoDbClient = Properties.dynamoDbClient();
const userTableName = Properties.userTableName();

export class UserFixture {

    static async deleteAll() {
        const users = await this.findAll();
        for (let user of users) {
            await this._delete(user)
        }
    }

    static async findAll() {
        const response = await dynamoDbClient.scan({
            TableName: userTableName
        }).promise();

        return response.Items
    }

    static async _delete(user: User) {
        return await dynamoDbClient.delete({
            TableName: userTableName,
            Key: {
                "userId": user.userId,
            }
        }).promise()
    }

    static async add(user: User) {
        return dynamoDbClient.put({
            TableName: userTableName,
            Item: {
                userId: user.userId,
                firstName: user.firstName,
            }
        }).promise();
    }
}
