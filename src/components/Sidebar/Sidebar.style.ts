import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import {sidebarWidth} from "../../services/style/themes/common";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: sidebarWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: sidebarWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    logo: {
      height: '10vmin',
      pointerEvents: 'none',
    },
  }),
);
