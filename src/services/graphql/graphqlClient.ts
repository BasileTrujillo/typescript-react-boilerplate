import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import {ApolloClient} from "apollo-client";

// Create an http link:
const httpLink = new HttpLink({
  uri: 'http://localhost:4001/graphql',
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://127.0.0.1:4001/graphql`,
  options: {
    reconnect: true,
    lazy: true,
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const httpAndWSLink = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const apolloConfig = {
  link: ApolloLink.from([
    errorLink,
    httpAndWSLink,
  ]),
  cache: new InMemoryCache(),
};

export const client = new ApolloClient(apolloConfig);
