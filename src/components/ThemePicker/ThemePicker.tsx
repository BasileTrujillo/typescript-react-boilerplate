import React, {useContext, useEffect} from "react";
import {useIntl} from "react-intl";
import {AppContext} from "views/App/App.context";
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {Tooltip} from "@material-ui/core";

/**
 * Theme picker component able automatically or manually swith from dark to light theme
 */
export const ThemePicker = () => {
    const {formatMessage: f} = useIntl();
    const appContext = useContext(AppContext);

    /**
     * Get a function to set the theme and disable auto-mode
     * @param {string} theme Theme value ('dark', 'light')
     * @param {boolean} swithToManual Whether to auto switch to manual mode
     */
    const setTheme = (theme: string, swithToManual: boolean = true) => () => {
        appContext.dispatch({ type: 'change-theme', theme });
        if (swithToManual) {
            appContext.dispatch({ type: 'change-theme-auto-detect', enabled: false });
        }
    };

    const isAutoTheme = appContext.state.themeAutoDetect;

    /**
     * If in auto mode, try to auto-detect and set user system theme
     */
    const autoSetTheme = () => {
        if (isAutoTheme) {
            // Try to detect dark mode from system
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark', false)();
            } else {
                setTheme('light', false)();
            }
        }
    };

    // On component did mount - Listen to prefers-color-scheme change if available
    useEffect(() => {
        if (window.matchMedia) {
            const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            colorSchemeQuery.addEventListener('change', autoSetTheme)
        }
    });

    // When eventually switching from manual mode to auto mode, let's auto set the theme from auto-detection
    useEffect(autoSetTheme, [isAutoTheme]);

    // Compute theme and icon
    const reversedTheme = appContext.state.theme === 'dark' ? 'light' : 'dark';
    const themeIcon = appContext.state.theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />;

    return (
        <div>
            <Tooltip title={f({id: 'swithThemeTo_' + reversedTheme}) + (isAutoTheme ? ' (Auto)' : '')}>
                <IconButton aria-label="select theme" onClick={setTheme(reversedTheme)}>
                    {themeIcon}
                </IconButton>
            </Tooltip>
        </div>
    );
};