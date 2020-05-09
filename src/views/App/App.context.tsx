import React, { Dispatch, ReactNode, useEffect, useReducer } from 'react';

// Define and export the AppContextState type
export type AppContextState = {
  state: any;
  dispatch: Dispatch<AppAction>;
};

// Create the context
export const AppContext = React.createContext({} as AppContextState);

// Initial store state
export const defaultState = {
  lang: 'en-US',
  theme: 'light',
  themeAutoDetect: true,
  sidebarOpened: true,
};
type AppState = typeof defaultState;

// Load state from localstorage
const LOCALSTORAGE_KEY = 'appContext';
let localState: AppState;
const rawLocalState = localStorage.getItem(LOCALSTORAGE_KEY);
if (typeof rawLocalState === 'string' && rawLocalState !== '') {
  localState = JSON.parse(rawLocalState);
}

// Types for ts validation and completion
type AppAction =
    { type: 'change-language'; lang: string }
  | { type: 'change-theme'; theme: string }
  | { type: 'change-theme-auto-detect'; enabled: boolean }
  | { type: 'toggle-sidebar'; }
;

// Define the reducer to handle store mutations
const appContextReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case 'change-language':
      return { ...state, lang: action.lang };
    case 'change-theme':
      return { ...state, theme: action.theme };
    case 'change-theme-auto-detect':
      return { ...state, themeAutoDetect: action.enabled };
    case 'toggle-sidebar':
      return { ...state, sidebarOpened: !state.sidebarOpened };
  }
};

// AppContextProvider props type
type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = (props: AppContextProviderProps) => {
  let [state, dispatch] = useReducer(
    appContextReducer,
    localState || defaultState,
  );
  let appContextValue = { state, dispatch };

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={appContextValue}>
      {props.children}
    </AppContext.Provider>
  );
};
