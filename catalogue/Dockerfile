FROM node:20

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

ENV MONGO=true \
    MONGO_URL=mongodb://mongo:27017/catalogue

EXPOSE 8080

CMD ["node", "server.js"]