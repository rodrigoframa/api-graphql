FROM node:8.11.1
RUN mkdir /graphql && mkdir /graphql/src
WORKDIR /graphql
ADD package.json /graphql/
RUN npm i
ADD ./src /graphql/src