import React from 'react';
import { AppContextProvider } from './App.context';
import { I18nProvider } from 'services/i18n/I18nProvider';
import { RoutingProvider } from 'services/routing/RoutingProvider';
import { ThemeProvider } from 'services/style/ThemeProvider';
import { GraphqlProvider } from '../../services/graphql/GraphqlProvider';
import {GraphqlContextProvider} from "../../services/graphql/Graphql.context";
import {SnackbarProvider} from "notistack";

export const App = () => {
  return (
    <AppContextProvider>
        <I18nProvider>
          <ThemeProvider>
            <GraphqlContextProvider>
              <GraphqlProvider>
                <SnackbarProvider maxSnack={5}>
                  <RoutingProvider />
                </SnackbarProvider>
              </GraphqlProvider>
            </GraphqlContextProvider>
          </ThemeProvider>
        </I18nProvider>
    </AppContextProvider>
  );
};
