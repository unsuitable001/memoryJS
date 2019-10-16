#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  npm install -g codeclimate-test-reporter
  npm run test:coverage
  codeclimate-test-reporter < coverage/lcov.info # report coverage
fi
