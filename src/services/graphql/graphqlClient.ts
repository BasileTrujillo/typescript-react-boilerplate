import { InMemoryCache } from '@apollo/client/cache';
import { ErrorResponse, onError } from '@apollo/client/link/error';
import { ApolloLink, split } from '@apollo/client/link/core';
import { HttpLink } from '@apollo/client/link/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { ApolloClient } from '@apollo/client/core';
import { RetryLink } from '@apollo/client/link/retry';
// import QueueLink from 'apollo-link-queue';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { setContext } from '@apollo/client/link/context';
import config from '../../config';

console.log('config', config);

const links = [];

// Add Retry link
if (config?.graphql?.retry?.enabled) {
  links.push(new RetryLink(config?.graphql?.retry?.options));
}

// Add Offline support with the Queue link
/*if (config?.graphql?.offline?.enabled) {
  const offlineLink = new QueueLink();

  // Note: remove these listeners when your app is shut down to avoid leaking listeners.
  window.addEventListener('offline', () => offlineLink.close());
  window.addEventListener('online', () => offlineLink.open());

  links.push(offlineLink);
}*/

/**
 * Debug all incoming errors in the console
 */
const debugErrors = ({ graphQLErrors, networkError }: ErrorResponse) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.error(`[Network error]: ${networkError}`);
};

// Instanciate an error link
// Error handler goes here
const errorLink = onError((errorResponse: ErrorResponse) => {
  if (config?.graphql?.debug?.enabled) {
    debugErrors(errorResponse);
  }
});
links.push(errorLink);

// Create an auth context and add it as link
const authorizationLink = setContext((request, previousContext) => ({
  headers: { authorization: '1234' },
}));
links.push(authorizationLink);

// Create an http link:
const httpLink = config?.graphql?.batching?.enabled
  ? new BatchHttpLink({
    ...config?.graphql?.http,
    ...config?.graphql?.batching?.options,
  })
  : new HttpLink(config?.graphql?.http);

// Add a WebSocket link
if (config?.graphql?.ws?.enabled) {
  const wsLink = new WebSocketLink(config?.graphql?.ws);

  // Using the ability to split links, you can send data to each link
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
    httpLink,
  );

  links.push(httpAndWSLink);
} else {
  links.push(httpLink);
}

const apolloConfig = {
  link: ApolloLink.from(links),
  cache: new InMemoryCache(),
};

export const client = new ApolloClient(apolloConfig);
