#! /bin/bash

cd ./css-loader
yarn install
yarn build
cd ../less-loader
yarn install
yarn build
cd ../mini-css-extract-plugin
yarn install
yarn build
cd ../style-loader
yarn install
yarn build