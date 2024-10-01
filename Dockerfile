FROM node:20.14.0-alpine3.20

RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app

COPY --chown=app:node package*.json ./
RUN npm install
COPY --chown=app:node . .

ENV API_URL=https://api-url.com/
EXPOSE 5173

CMD [ "npm", "run", "dev" ]

