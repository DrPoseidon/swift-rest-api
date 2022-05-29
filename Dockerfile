FROM node:12
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 7777
CMD [ "node", "server.js" ]