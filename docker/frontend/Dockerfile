FROM node:8.5.0

# RUN apk add --no-cache bash

WORKDIR /var/www/angular-course

COPY docker-entrypoint.sh /usr/local/bin/
RUN ln -s usr/local/bin/docker-entrypoint.sh /entrypoint.sh # backwards compat
ENTRYPOINT ["docker-entrypoint.sh"]
