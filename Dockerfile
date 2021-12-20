FROM node:12.22.7-alpine3.14
WORKDIR '/app'
COPY ./package.json ./
COPY ./package-lock.json ./
COPY yarn.lock ./
COPY ./*.js ./
COPY ./script.sh ./
RUN chmod +x ./script.sh
RUN npm install
COPY ./tmp/* ./public/
COPY . .

EXPOSE 3002

RUN npm run build
CMD ["npm","start"]
