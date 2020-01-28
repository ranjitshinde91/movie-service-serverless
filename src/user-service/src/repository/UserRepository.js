const Properties = require('../Properties');
const User = require("../model/User");
const dynamoDbClient = Properties.dynamoDbClient();
const userTableName = Properties.userTableName();

class UserRepository {

    async find(userId) {
        const request = {
            TableName: userTableName,
            Key: {
                userId: userId
            },
        };
        console.log(`Finding users associated with userId: ${userId}`);
        const response = await dynamoDbClient.get(request).promise();
        if (response.Item) {
            return User.from(response.Item)
        }
        return null;
    }
}

module.exports = UserRepository;
