#!/bin/bash

echo "Removing old build...";
rm -fr .next;

echo "Installing dependencies..."
yarn install;

echo "Building..."
yarn run build;

echo "Compressing..."
tar -czf out.tar.gz .next package.json yarn.lock public next.config.mjs postcss.config.js tailwind.config.js tsconfig.json scripts;

