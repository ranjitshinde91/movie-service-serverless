'use strict';

const AWSSDK = require('aws-sdk');

const env = () => {
    const defaultEnvironment = 'local';
    return process.env.Env || defaultEnvironment;
};

function movieTableName() {
    const defaultTableName = 'movies';
    return process.env.MovieTableName || defaultTableName;
}

const localDynamoDbEndpoint = function () {
    const host = process.env.LOCALSTACK_HOSTNAME || 'localhost';
    return `http://${host}:4566`;
};

const isLocalEnv = () => env() === 'local';

const dynamoDbClientOptions = function () {
    if (isLocalEnv()) {
        AWSSDK.config.update({
            accessKeyId: "accessKey",
            secretAccessKey: "secretKey",
            region: "us-east-1"   
        });
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
    movieTableName,
    dynamoDbClient
};
