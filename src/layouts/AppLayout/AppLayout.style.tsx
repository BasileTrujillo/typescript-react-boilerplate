import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {sidebarWidth} from "../../services/style/themes/common";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      height: '100%',
      width: '100%',
    },
    container: {
      backgroundColor: theme.palette.background.default,
      paddingLeft: theme.spacing(7) + 1,
      paddingTop: '5rem',
      paddingBottom: '4rem',
      paddingRight: 0,
      fontSize: 'calc(10px + 2vmin)',
      color: theme.palette.text.primary,
      height: '100vh',
      width: '100%',
      transition: theme.transitions.create(['padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    containerWithSidebarOpen: {
      paddingLeft: sidebarWidth,
      transition: theme.transitions.create(['padding'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  }),
);
