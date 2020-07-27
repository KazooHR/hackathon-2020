FROM node:14-alpine

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app

COPY ./server .
COPY ./web/build ./assets

ARG SHA
ENV SHA=${SHA}

RUN yarn

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start:in-container"]
