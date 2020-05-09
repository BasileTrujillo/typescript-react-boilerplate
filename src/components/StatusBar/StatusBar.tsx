import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker';
import { ThemePicker } from '../ThemePicker/ThemePicker';
import { NetworkStatus } from '../NetworkStatus/NetworkStatus';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      background: theme.palette.background.paper,
      top: 'auto',
      bottom: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      flexGrow: 1,
      color: theme.palette.text.primary,

    },
  }),
);

export default function StatusBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <LanguagePicker />
          <ThemePicker />
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
          >
            <NetworkStatus />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
