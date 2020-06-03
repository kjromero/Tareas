FROM node:12.2.0-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]
