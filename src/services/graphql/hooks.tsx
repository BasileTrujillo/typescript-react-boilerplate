/* eslint-disable react-hooks/exhaustive-deps */
import { OperationVariables } from '@apollo/react-common';
import { DocumentNode } from 'graphql';
import {
  LazyQueryHookOptions,
  QueryTuple,
} from '@apollo/react-hooks/lib/types';
import * as apolloHooks from '@apollo/react-hooks';
import {useContext, useEffect, useState} from 'react';
import { GraphqlContext } from './Graphql.context';

export function useLazyQuery<TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
  options?: LazyQueryHookOptions<TData, TVariables>,
): QueryTuple<TData, TVariables> {
  const [isLoading, setIsLoading] = useState(false);
  const graphqlContext = useContext(GraphqlContext);
  const dispatch = graphqlContext.dispatch;
  const [loader, handledData] = apolloHooks.useLazyQuery(query, options);
  // handledData = { called, error, loading, data }

  useEffect(() => {
    if (handledData.called) {
      if (!isLoading && handledData.loading) {
        setIsLoading(true);
        dispatch({ type: 'increment-pending-query' });
      } else if(isLoading) {
        setIsLoading(false);
        dispatch({ type: 'decrement-pending-query' });
      }
      if (handledData.error) {
        dispatch({ type: 'add-error', error: handledData.error });
      }
    }
  }, [handledData, handledData.called, handledData.loading, handledData.error, dispatch, handledData.data]);

  return [loader, handledData];
}
