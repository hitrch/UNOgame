FROM node

WORKDIR /client

COPY ./client/package*.json ./

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]