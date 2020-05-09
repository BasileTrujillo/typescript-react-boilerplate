import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    container: {
      backgroundColor: theme.palette.background.default,
      paddingBottom: '4rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: theme.palette.text.primary,
      heigh: '100%',
      width: '100%',
    },
    loading: {
      'position': 'absolute',
      'bottom': '0px',
      'width': '100%',
    },
  }),
);
