import React, { useContext } from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './Sidebar.style';
import {Drawer} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useTheme from '@material-ui/core/styles/useTheme';
import { AppContext } from '../../views/App/App.context';
import {SidebarItem} from "./SidebarItem";

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const appContext = useContext(AppContext);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: appContext.state.sidebarOpened,
        [classes.drawerClose]: !appContext.state.sidebarOpened,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: appContext.state.sidebarOpened,
          [classes.drawerClose]: !appContext.state.sidebarOpened,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton
          onClick={() => appContext.dispatch({ type: 'toggle-sidebar' })}
        >
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <SidebarItem text={text} index={index} key={index} disabledPopover={appContext.state.sidebarOpened}/>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <SidebarItem text={text} index={index} key={index} disabledPopover={appContext.state.sidebarOpened}/>
        ))}
      </List>
    </Drawer>
  );
};
