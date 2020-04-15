import React, {ReactNode, useContext} from "react";
import {RawIntlProvider} from "react-intl";
import {loadTranslations} from './translations';
import {AppContext} from "../../views/App/App.context";

type I18nProviderProps = {
    children: ReactNode
}

export const I18nProvider = (props: I18nProviderProps) => {
    const appContext = useContext(AppContext);
    const intl = loadTranslations(appContext.state.lang);

    return (
        <RawIntlProvider value={intl}>
            {props.children}
        </RawIntlProvider>
    );
};