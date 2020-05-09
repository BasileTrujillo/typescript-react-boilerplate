import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import {sidebarWidth} from "../../services/style/themes/common";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: theme.palette.primary[theme.palette.type],
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: sidebarWidth,
      width: `calc(100% - ${sidebarWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    hide: {
      display: 'none',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
  }),
);
