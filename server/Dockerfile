FROM node

WORKDIR /app

COPY . .

RUN npm install

ENV NODE_ENV=production
ENV PORT=8080

CMD ["node", "server.js"]

EXPOSE 8080