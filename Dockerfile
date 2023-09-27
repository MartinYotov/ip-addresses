FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ ./src 
COPY tsconfig.json ./
EXPOSE 3000
ENV DB_HOST=postgres-ips \
    DB_PORT=5432 \
    DB_PASS=password \
    DB_USER=postgres \
    DB_NAME=postgres
CMD [ "npm", "start" ]
