#!/bin/sh

echo 'uploading lambda code zip file to s3 bucket'
aws s3 cp ../../src/movie-service/movie-service.zip s3://movie-service/ --endpoint-url http://localhost:4572
echo 'lambda code zip file uploaded to s3 bucket successfully'
