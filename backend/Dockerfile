FROM node:12.2.0-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD [ "node" ]
