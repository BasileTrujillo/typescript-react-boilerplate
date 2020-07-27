/* eslint-disable react-hooks/exhaustive-deps */
/**
 * @todo handle fetchMore and subscribeToMore
 */
import {
  QueryResult,
  MutationResult,
  SubscriptionResult,
  LazyQueryHookOptions,
  MutationHookOptions,
  MutationTuple,
  QueryHookOptions,
  QueryTuple,
  SubscriptionHookOptions,
} from '@apollo/client/react';
import { OperationVariables, SubscribeToMoreOptions } from '@apollo/client/core';
import { DocumentNode } from 'graphql';
import * as apolloHooks from '@apollo/client/react';
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { GraphqlAction, GraphqlContext } from './Graphql.context';

function handleQueryResponse<TData = any, TVariables = OperationVariables>(
  queryResponse: any, //QueryResult<TData, TVariables>,
  dispatch: Dispatch<GraphqlAction>,
  isLoading: boolean,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
): void {
  if (queryResponse.called) {
    if (!isLoading && queryResponse.loading) {
      setIsLoading(true);
      dispatch({ type: 'increment-pending-query' });
    } else if (isLoading) {
      setIsLoading(false);
      dispatch({ type: 'decrement-pending-query' });
    }
    if (queryResponse.error) {
      dispatch({ type: 'add-error', error: queryResponse.error });
    }
  }
}

function handleMutationResponse<TData = any, TVariables = OperationVariables>(
  mutationResponse: MutationResult,
  dispatch: Dispatch<GraphqlAction>,
  isLoading: boolean,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
): void {
  if (mutationResponse.called) {
    if (!isLoading && mutationResponse.loading) {
      setIsLoading(true);
      dispatch({ type: 'increment-pending-mutation' });
    } else if (isLoading && !mutationResponse.loading) {
      setIsLoading(false);
      dispatch({ type: 'decrement-pending-mutation' });
    }
    if (mutationResponse.error) {
      dispatch({ type: 'add-error', error: mutationResponse.error });
    }
  }
}

function handleSubscriptionResponse<
  TData = any,
  TVariables = OperationVariables
  >(
  subscriptionResponse: SubscriptionResult,
  dispatch: Dispatch<GraphqlAction>,
  isLoading: boolean,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
): void {
  if (!isLoading && subscriptionResponse.loading) {
    setIsLoading(true);
    dispatch({ type: 'increment-pending-subscription' });
  } else if (isLoading) {
    setIsLoading(false);
    dispatch({ type: 'decrement-pending-subscription' });
  }
  if (subscriptionResponse.error) {
    dispatch({ type: 'add-error', error: subscriptionResponse.error });
  }
}

export function useLazyQuery<TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
  options?: LazyQueryHookOptions<TData, TVariables>,
): QueryTuple<TData, TVariables> {
  // ReDefine a isLoading state to handle loading variations
  const [isLoading, setIsLoading] = useState(false);

  // get the GraphqlContext to dispatch data
  const graphqlContext = useContext(GraphqlContext);

  // Create a pointer to the dispatcher to avoid the need to declare graphqlContext as useEffect dependency
  const dispatch = graphqlContext.dispatch;

  // Call the original apollo hook
  // handledData => { called, error, loading, data }
  const [loader, queryResponse] = apolloHooks.useLazyQuery(query, options);

  // Handle hook variations
  useEffect(() => {
    handleQueryResponse(queryResponse, dispatch, isLoading, setIsLoading);
  }, [queryResponse]);

  // return apollo hook original response
  return [loader, queryResponse];
}

export function useQuery<TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>,
): QueryResult<TData, TVariables> {
  // ReDefine a isLoading state to handle loading variations
  const [isLoading, setIsLoading] = useState(false);

  // get the GraphqlContext to dispatch data
  const graphqlContext = useContext(GraphqlContext);

  // Create a pointer to the dispatcher to avoid the need to declare graphqlContext as useEffect dependency
  const dispatch = graphqlContext.dispatch;

  // Call the original apollo hook
  // handledData => { called, error, loading, data }
  const queryResponse = apolloHooks.useQuery(query, options);

  // Handle hook variations
  useEffect(() => {
    handleQueryResponse(queryResponse, dispatch, isLoading, setIsLoading);
  }, [queryResponse]);

  // return apollo hook original response
  return queryResponse;
}

export function useMutation<TData = any, TVariables = OperationVariables>(
  mutation: DocumentNode,
  options?: MutationHookOptions<TData, TVariables>,
): MutationTuple<TData, TVariables> {
  // ReDefine a isLoading state to handle loading variations
  const [isLoading, setIsLoading] = useState(false);

  // get the GraphqlContext to dispatch data
  const graphqlContext = useContext(GraphqlContext);

  // Create a pointer to the dispatcher to avoid the need to declare graphqlContext as useEffect dependency
  const dispatch = graphqlContext.dispatch;

  // Call the original apollo hook
  // handledData => { called, error, loading, data }
  const [loader, mutationResponse] = apolloHooks.useMutation(mutation, options);

  // Handle hook variations
  useEffect(() => {
    handleMutationResponse(mutationResponse, dispatch, isLoading, setIsLoading);
  }, [mutationResponse.called, mutationResponse.loading, mutationResponse.error]);

  // return apollo hook original response
  return [loader, mutationResponse];
}

export function useSubscription<TData = any, TVariables = OperationVariables>(
  subscription: DocumentNode,
  options?: SubscriptionHookOptions<TData, TVariables>,
): SubscriptionResult<TData> {
  // ReDefine a isLoading state to handle loading variations
  const [isLoading, setIsLoading] = useState(false);

  // get the GraphqlContext to dispatch data
  const graphqlContext = useContext(GraphqlContext);

  // Create a pointer to the dispatcher to avoid the need to declare graphqlContext as useEffect dependency
  const dispatch = graphqlContext.dispatch;

  // Call the original apollo hook
  // handledData => { called, error, loading, data }
  const subscriptionResponse = apolloHooks.useSubscription(
    subscription,
    options,
  );

  // Handle hook variations
  useEffect(() => {
    handleSubscriptionResponse(
      subscriptionResponse,
      dispatch,
      isLoading,
      setIsLoading,
    );
  }, [subscriptionResponse]);

  // return apollo hook original response
  return subscriptionResponse;
}

export function useSubscribeToMore(
  subscribeFn: (subscribeToMoreOptions: SubscribeToMoreOptions) => void,
  subscribeToMoreOptions: SubscribeToMoreOptions
) {
  useEffect(() => {
    subscribeFn(subscribeToMoreOptions);
  }, []);
}
