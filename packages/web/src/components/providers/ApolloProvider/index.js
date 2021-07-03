import React from 'react';
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { BatchHttpLink } from 'apollo-link-batch-http';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';

const httpLink = new BatchHttpLink({ uri: process.env.REACT_APP_GQL_URL });
const apikey = process.env.REACT_APP_API_KEY;

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    apikey,
  },
}));

const link = ApolloLink.from([authLink, httpLink]);

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [],
    },
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({ fragmentMatcher }),
});

const ApolloWrapper = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloWrapper;
