FROM cypress/base:16.18.0

WORKDIR /e2e

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx", "cypress", "run"]
