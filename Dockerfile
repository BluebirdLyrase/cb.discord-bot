FROM node:18.20.4-alpine

WORKDIR /usr/app

COPY package.json .
COPY .env .
RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

CMD ["npm", "run", "start"]