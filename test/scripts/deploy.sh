#!/bin/sh

echo 'deploying infra on localstack'
aws cloudformation deploy \
--template-file template.yaml \
--stack-name movie-service \
--region us-east-1 \
--capabilities CAPABILITY_IAM  \
--endpoint-url http://localhost:4581

echo 'deployment for infra on localstack'
