#!/bin/bash

echo "NextJS: Installing dependencies..."
yarn install --frozen-lockfile --no-progress

echo "NextJS: Building..."
yarn run build;

echo "NextJS: Compressing..."
tar -czf out.tar.gz .next package.json yarn.lock scripts public postcss.config.js tailwind.config.js next.config.mjs;
