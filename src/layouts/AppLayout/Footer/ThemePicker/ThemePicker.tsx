import React, {useContext} from "react";
import {useIntl} from "react-intl";
import {AppContext} from "views/App/App.context";
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {Tooltip} from "@material-ui/core";

export const ThemePicker = () => {
    const {formatMessage: f} = useIntl();
    const appContext = useContext(AppContext);

    const setTheme = (theme: string) => () => appContext.dispatch({ type: 'change-theme', theme });

    const reversedTheme = appContext.state.theme === 'dark' ? 'light' : 'dark';
    const themeIcon = appContext.state.theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />;

    return (
        <div>
            <Tooltip title={f({id: 'swithThemeTo_'+reversedTheme})}>
                <IconButton
                    aria-label="select theme"
                    onClick={setTheme(reversedTheme)}
                >
                    {themeIcon}
                </IconButton>
            </Tooltip>
        </div>
    );
};