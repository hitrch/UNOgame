FROM node

WORKDIR /server

COPY ./server/package.json ./package.json
RUN npm install
RUN npm install -g nodemon
CMD nodemon server.js