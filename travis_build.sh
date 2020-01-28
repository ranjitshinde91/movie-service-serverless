#!/bin/sh
npm i
cd $TRAVIS_BUILD_DIR/src/user-service/
npm i
cd -
npm t
