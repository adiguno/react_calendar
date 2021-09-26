#!/bin/bash

react-scripts build

cp app.yaml ./build
cd build/
gcloud app deploy
