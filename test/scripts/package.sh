#!/bin/sh

echo 'uploading lambda code zip file to s3 bucket'
aws s3 cp ../../src/user-service/user-service.zip s3://user-service/ --endpoint-url http://localhost:4572
echo 'lambda code zip file uploaded to s3 bucket successfully'
