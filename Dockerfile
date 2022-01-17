FROM node:16
WORKDIR /app
COPY ["package.json", "/app"]
RUN yarn install
COPY . .
EXPOSE 1337
CMD ["yarn", "develop"]