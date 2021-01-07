#!/bin/sh

echo 'uploading lambda code zip file to s3 bucket'
cd  ../../src/movie-service/
npm i
zip -r movie-service.zip src/ node_modules handler.js
aws s3 cp ../../src/movie-service/movie-service.zip s3://movie-service/ --endpoint-url http://localhost:4566
echo 'lambda code zip file uploaded to s3 bucket successfully'
