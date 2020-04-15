import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.default,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'calc(10px + 2vmin)',
            color: theme.palette.text.primary
        },
        card: {
            textAlign: 'center'
        },
        title: {},
        form: {},
        logo: {
            height: '20vmin',
            pointerEvents: 'none',
            animation: '$login-logo-spin infinite 20s linear'
        },
        '@keyframes login-logo-spin': {
            from: {
                transform: 'rotate(0deg)'
            },
            to: {
                transform: 'rotate(360deg)'
            },
        },
    }),
);
