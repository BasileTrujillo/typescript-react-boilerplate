import React, {ReactNode, useContext} from 'react';
import clsx from 'clsx';
import { Header } from './Header';
import { Footer } from './Footer';
import Sidebar from "../../components/Sidebar/Sidebar";
import {Container} from "@material-ui/core";
import {useStyles} from "./AppLayout.style";
import {AppContext} from "../../views/App/App.context";

type AppLayoutProps = {
  children: ReactNode;
};

/**
 * The AppLayout layout is the main app layout
 */
export const AppLayout = (props: AppLayoutProps) => {
  const classes = useStyles();
  const appContext = useContext(AppContext);

  return (
    <div className={classes.root}>
      <Header/>
      <Sidebar/>
      <Container maxWidth="xl" className={clsx(classes.container, {
        [classes.containerWithSidebarOpen]: appContext.state.sidebarOpened
      })}>
        {props.children}
      </Container>
      <Footer/>
    </div>
  );
};

AppLayout.defaultProps = {};
