FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g sequelize-cli

ENV NODE_ENV=production

CMD npm start