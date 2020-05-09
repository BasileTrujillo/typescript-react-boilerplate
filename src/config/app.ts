
export const config = {
  // GraphQL Client
  graphql: {
    // Main http link
    // https://www.apollographql.com/docs/link/links/http/#options
    http: {
      uri: 'http://localhost:4001/graphql',
    },

    // Query batching options
    // https://www.apollographql.com/docs/link/links/batch-http/
    batching: {
      enabled: true,
      options: {
        batchMax: 10,
        batchInterval: 10,
      }
    },

    // Web Socket / Subscription
    // https://www.apollographql.com/docs/link/links/ws/
    ws: {
      enabled: true,
      uri: `ws://127.0.0.1:4001/graphql`,
      options: {
        reconnect: true,
        lazy: true,
      },
    },

    // Query retry options
    // https://www.apollographql.com/docs/link/links/retry/
    retry: {
      enabled: true,
      options: {}
    },

    // Offline support
    // https://github.com/helfer/apollo-link-queue
    offline: {
      enabled: true
    },

    // Debug mode for graphql errors
    debug: {
      enabled: false
    }
  }
};
