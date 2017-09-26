#!/usr/bin/env bash

cd /var/www/planarsys

if [ ! -d /var/www/planarsys/node_modules ]; then
  npm cache clean -f  &&  npm install
fi;

npm start
