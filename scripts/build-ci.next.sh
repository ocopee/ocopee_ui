#!/bin/bash

echo "NextJS: Installing dependencies..."
yarn install --frozen-lockfile --no-progress;

echo "NextJS: Building..."
yarn run build;

echo "NextJS: Compressing..."
tar -czf out.tar.gz .next .env package.json postcss.config.js public scripts mdx-components.tsx tailwind.config.js next-env.d.ts tsconfig.json next.config.mjs yarn.lock;
