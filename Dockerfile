FROM node:20-alpine AS base
WORKDIR /app

RUN apk --no-cache add curl
RUN apk update

