#!/bin/sh

aws --endpoint-url=http://localhost:4566 apigateway get-rest-apis --query "items[?name=='movie-service-api-gw'].id" --output text --region us-east-1 > .api_id
