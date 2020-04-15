import React, {ReactNode, useContext} from "react";
import {AppContext} from "../../views/App/App.context";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {lightTheme} from "./themes/ligthTheme";
import {darkTheme} from "./themes/darkTheme";

type ThemeProviderProps = {
    children: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const appContext = useContext(AppContext);
    let theme;
    switch (appContext.state.theme) {
        case 'dark':
            theme = darkTheme;
            break;
        default:
        case 'light':
            theme = lightTheme;
            break;
    }

    return (
        <MuiThemeProvider theme={theme}>
            {props.children}
        </MuiThemeProvider>
    );
};