FROM node:16-buster-slim

WORKDIR /app

ENV CHOKIDAR_USEPOLLING=true

COPY package.json yarn.lock /app/
RUN yarn install

COPY . .

CMD ["yarn", "start"]
