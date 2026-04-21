FROM node:20

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

ENV REDIS_HOST="redis" \
    CATALOGUE_HOST="catalogue" \
    CATALOGUE_PORT="8080"

CMD ["node", "server.js"]