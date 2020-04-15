import React from 'react';
import {AppContextProvider} from "./App.context";
import {I18nProvider} from "services/i18n/I18nProvider";
import {RoutingProvider} from "services/routing/RoutingProvider";
import {ThemeProvider} from "services/style/ThemeProvider";

export const App = () => {
    return (
        <AppContextProvider>
            <I18nProvider>
                <ThemeProvider>
                    <RoutingProvider />
                </ThemeProvider>
            </I18nProvider>
        </AppContextProvider>
    );
};