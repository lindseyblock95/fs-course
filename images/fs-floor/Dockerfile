FROM mhart/alpine-node:11
MAINTAINER IBM ICP CoC Team

CMD mkdir /app
WORKDIR /app
COPY app.js .
COPY package.json .
COPY package-lock.json .
COPY README.md .
COPY LICENSE .

RUN npm install

CMD ["node", "app.js"]

