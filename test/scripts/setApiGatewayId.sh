#!/bin/sh

aws --endpoint-url=http://localhost:4567 apigateway get-rest-apis --query "items[?name=='user-service-api-gw'].id" --output text --region us-east-1 > .api_id
