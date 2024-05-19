#!/bin/bash

echo 'VPS restart: 🕹️' $2

echo 'VPS restart: script'
ssh -p $PORT -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "source $REMOTE/scripts/restart-ocop.sh"

# done
echo 'VPS restart: 🚀 done!'
