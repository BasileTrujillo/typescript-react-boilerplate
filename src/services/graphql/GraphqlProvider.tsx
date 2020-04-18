import React, {ReactNode} from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import {client} from "./graphqlClient";

type GraphqlProviderProps = {
    children: ReactNode
}

export const GraphqlProvider = (props: GraphqlProviderProps) => {
    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    );
};