#!/bin/bash

echo 'VPS upload: 🚚 at' $HOST $PORT

# clear
echo 'VPS upload: clear' $REMOTE
ssh -p $PORT -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "rm -fr $REMOTE"
ssh -p $PORT -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "mkdir -p $REMOTE/"

# upload
echo 'VPS upload: upload'
rsync -a -I -e "ssh -i ./rsa.cert -p $PORT" out.tar.gz $HOST:$REMOTE

# unzip
echo 'VPS upload: unzip'
ssh -p $PORT -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "tar -xzf $REMOTE/out.tar.gz -C $REMOTE/"

# clear
echo 'VPS upload: clear'
ssh -p $PORT -i ./rsa.cert -oStrictHostKeyChecking=no $HOST "rm $REMOTE/out.tar.gz"

# done
echo 'VPS upload: ⚡️ done!'
