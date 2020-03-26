FROM node:13-slim
# FROM arm32v7/node:13-slim

WORKDIR /app
COPY package*.json /app/
RUN npm install

COPY tsconfig.json /app/
COPY src /app/src/
COPY sentence_*.txt /app/

RUN npm run build

CMD node dist/App.js