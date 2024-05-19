#!/bin/bash

source /home/ocop/.nvm/nvm.sh;
cd /home/ocop/ocopee/ocopee_ui;

yarn install;
pm2 delete ocopee.com || :;
pm2 start "yarn run start" --name="ocopee.com";
