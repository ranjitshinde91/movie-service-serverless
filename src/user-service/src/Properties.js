'use strict';

const AWSSDK = require('aws-sdk');

const env = () => {
    const defaultEnvironment = 'local';
    return process.env.Env || defaultEnvironment;
};

function userTableName() {
    const defaultTable = 'users';
    return process.env.UserTableName || defaultTable;
}

const localDynamoDbEndpoint = function () {
    const host = process.env.LOCALSTACK_HOSTNAME || 'localhost';
    return `http://${host}:4569`;
};

const isLocalEnv = () => env() === 'local';

const dynamoDbClientOptions = function () {
    if (isLocalEnv()) {
        return {
            region: 'us-east-1',
            endpoint: localDynamoDbEndpoint()
        };
    } else {
        return {}
    }
};

function dynamoDbClient() {
    return new AWSSDK.DynamoDB.DocumentClient(dynamoDbClientOptions());
}

module.exports = {
    userTableName,
    dynamoDbClient
};
