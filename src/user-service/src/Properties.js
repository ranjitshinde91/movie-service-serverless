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

const awsRegion = () => {
    const defaultAwsRegion = 'ap-south-1';
    return isLocalEnv() ? 'us-east-1' : defaultAwsRegion;
};

const dynamoDbClientOptions = function () {
    if (isLocalEnv()) {
        return {
            region: awsRegion(),
            endpoint: localDynamoDbEndpoint()
        };
    } else {
        return {
            region: awsRegion()
        };
    }
};

function dynamoDbClient() {
    return new AWSSDK.DynamoDB.DocumentClient(dynamoDbClientOptions());
}

module.exports = {
    userTableName,
    dynamoDbClient
};