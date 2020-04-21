import React, { Dispatch, ReactNode, useReducer } from 'react';

// Initial store state
export const defaultState = {
  pendingQuery: 0,
  pendingMutation: 0,
  pendingSubscription: 0,
  totalQuery: 0,
  totalMutation: 0,
  totalSubscription: 0,
  errors: [],
};

export type GraphqlState = {
  pendingQuery: number,
  pendingMutation: number,
  pendingSubscription: number,
  totalQuery: number,
  totalMutation: number,
  totalSubscription: number,
  errors: Error[],
};

// Define and export the GraphqlContextState type
export type GraphqlContextState = {
  state: GraphqlState;
  dispatch: Dispatch<GraphqlAction>;
};

// Create the context
export const GraphqlContext = React.createContext({} as GraphqlContextState);

// Types for ts validation and completion
export type GraphqlAction =
    { type: 'increment-pending-query'; }
  | { type: 'decrement-pending-query'; }
  | { type: 'increment-pending-mutation'; }
  | { type: 'decrement-pending-mutation'; }
  | { type: 'add-error'; error: Error };

// Define the reducer to handle store mutations
const graphqlContextReducer = (state: GraphqlState, action: GraphqlAction) => {
  switch (action.type) {
    case 'increment-pending-query':
      return {
        ...state,
        pendingQuery: state.pendingQuery + 1,
        totalQuery: state.totalQuery + 1
      };
    case 'decrement-pending-query':
      return {
        ...state,
        pendingQuery: (state.pendingQuery - 1) | 0
      };
    case 'increment-pending-mutation':
      return {
        ...state,
        pendingMutation: state.pendingMutation + 1,
        totalMutation: state.totalMutation + 1
      };
    case 'decrement-pending-mutation':
      return {
        ...state,
        pendingMutation: state.pendingMutation - 1
      };
    case 'add-error':
      return {
        ...state,
        errors: [...state.errors, action.error]
      };
  }
};

// GraphqlContextProvider props type
type GraphqlContextProviderProps = {
  children: ReactNode;
};

export const GraphqlContextProvider = (props: GraphqlContextProviderProps) => {
  let [state, dispatch] = useReducer(
    graphqlContextReducer,
    defaultState,
  );
  let contextValue = { state, dispatch };

  return (
    <GraphqlContext.Provider value={contextValue}>
      {props.children}
    </GraphqlContext.Provider>
  );
};
