#! /bin/bash

cd ./css-loader
yarn build
cd ../less-loader
yarn build
cd ../mini-css-extract-plugin
yarn build
cd ../style-loader
yarn build