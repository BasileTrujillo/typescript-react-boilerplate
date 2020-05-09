import React, {useContext} from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './Navbar.style';
import Link from 'components/Link/Link';
import { getRedirectHandler } from 'services/routing/history';
import {Button} from "@material-ui/core";
import {AppContext} from "../../views/App/App.context";

export default function Navbar() {
  const classes = useStyles();
  const appContext = useContext(AppContext);

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={clsx(classes.appBar, {
        [classes.appBarShift]: appContext.state.sidebarOpened,
      })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => appContext.dispatch({ type: 'toggle-sidebar' })}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: appContext.state.sidebarOpened,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to={'/'}>Typescript React Boilerplate</Link>
          </Typography>

          <div className={classes.grow} />
          <Button color="inherit" onClick={getRedirectHandler('/graphql')}>GraphQL Exemple</Button>
          <Button color="inherit" onClick={getRedirectHandler('/login')}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
