const Properties = require("../../../src/user-service/src/Properties");

const dynamoDbClient = Properties.dynamoDbClient();
const userTableName = Properties.userTableName();

class UserFixture {

    static async deleteAll() {
        console.log("deleting all users from table.")
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

    static async _delete(user) {
        return await dynamoDbClient.delete({
            TableName: userTableName,
            Key: {
                "userId": user.userId
            },
        }).promise()
    }

    static async add(user) {
        return dynamoDbClient.put({
            TableName: userTableName,
            Item: {
                userId: user.userId,
                firstName: user.firstName,
            }
        }).promise();
    }
}

module.exports = UserFixture;
