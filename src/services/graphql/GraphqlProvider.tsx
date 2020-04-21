import React, { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './graphqlClient';
import { GraphqlContextProvider } from './Graphql.context';

type GraphqlProviderProps = {
  children: ReactNode;
};

export const GraphqlProvider = (props: GraphqlProviderProps) => {
  return (
    <ApolloProvider client={client}>
      <GraphqlContextProvider>{props.children}</GraphqlContextProvider>
    </ApolloProvider>
  );
};
