FROM node:20.9.0-alpine3.18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json server.js ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

EXPOSE 5000
CMD [ "node", "server.js" ]