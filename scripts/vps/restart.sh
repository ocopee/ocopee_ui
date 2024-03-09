#!/bin/bash

source /home/ocopee/.nvm/nvm.sh;
cd /home/ocopee/ocopee_ui;

yarn install;
pm2 delete ocopee_ui;
pm2 start "yarn run start" --name="ocopee_ui";
