import express from "express";
import serverless from "serverless-http";
import graphiql from "graphql-playground-middleware-express";
import { ApolloServer, gql } from "apollo-server-express";
import glob from 'glob';
import fs from 'fs';
import resolvers from './resolvers';
import MoviesService from './service/api';

const schemasPath = glob.sync('./src/models/**/*.graphql');

const typeDefs = [
  ...schemasPath
    .map(schema => gql(fs.readFileSync(schema, 'utf8'))),
];

const context = ({ req }) => ({ apikey: req.headers.apikey, });
const options = { port: 4040 };

const graphQLOptions = ({
  context,
  typeDefs,
  resolvers,
  dataSources: () => ({
    moviesService: new MoviesService(),
  }),
  path: "/graphql",
  playground: true,
});

const server = new ApolloServer(graphQLOptions);

const app = express();

server.applyMiddleware({ app });

app.get("/playground", graphiql({ endpoint: "/graphql" }));
const handler = serverless(app);

export { handler };
