#!/bin/bash

echo 'VPS upload: ' $2

DIR=$2
HOST='ocopee@'$1
REMOTE='/home/ocopee/'$DIR
CACHE='/home/ocopee/_cache/'$DIR

# cache
echo 'VPS upload: cache (1/7)'
ssh -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "mkdir -p $CACHE/; mkdir -p $CACHE/node_modules; mkdir -p $REMOTE/"
ssh -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "[ ! -d $REMOTE/node_modules ] || mv $REMOTE/node_modules $CACHE/node_modules"

# clear
echo 'VPS upload: clear (2/7)'
ssh -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "rm -fr $REMOTE"
ssh -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "mkdir -p $REMOTE/"

# upload
echo 'VPS upload: upload (3/7)'
rsync -a -I -e "ssh -i ./rsa.cert" out.tar.gz $HOST:$REMOTE

# unzip
echo 'VPS upload: unzip (4/7)'
ssh -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "tar -xzvf $REMOTE/out.tar.gz -C $REMOTE/"

# restore
echo 'VPS upload: restore (5/7)'
ssh -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "mv $CACHE/node_modules $REMOTE/node_modules"

# clear
echo 'VPS upload: clear (6/7)'
ssh -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "rm $REMOTE/out.tar.gz"
ssh -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "rm -fr $CACHE"

# restart
echo 'VPS upload: restart (7/7)'
ssh -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "source $REMOTE/scripts/vps/restart.sh"

echo 'VPS upload > 🚀 done!'
