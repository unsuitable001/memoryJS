#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  npm install -g codecov
  npm run test:coverage
  codecov
fi
