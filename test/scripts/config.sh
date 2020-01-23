#!/bin/sh

function fail() {
    echo $2
    exit $1
}

./createBucket.sh
[[ $? == 0 ]] || fail 1 "Failed: AWS / CreateBucket"
./package.sh
[[ $? == 0 ]] || fail 1 "Failed: AWS / package"
./deploy.sh
[[ $? == 0 ]] || fail 1 "Failed: AWS / deploy"
./setApiGatewayId.sh
