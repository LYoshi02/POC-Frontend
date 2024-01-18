FROM node:20.11.0-bookworm-slim

WORKDIR /app

COPY package*.json /app

RUN npm pkg delete scripts.prepare && npm ci

COPY . /app

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "preview"]