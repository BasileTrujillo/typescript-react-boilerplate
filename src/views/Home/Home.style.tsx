import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    logo: {
      height: '40vmin',
      pointerEvents: 'none',
      animation: '$home-logo-spin infinite 20s linear',
    },
    header: {
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: theme.palette.text.primary,
    },
    link: {
      color: theme.palette.text.secondary,
    },
    '@keyframes home-logo-spin': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
  }),
);
