import React from 'react';
import { useIntl } from 'react-intl';
import logo from '../../logo.svg';
import { useStyles } from './Home.style';
import {Container} from "@material-ui/core";

const Home = () => {
  const { formatMessage: f } = useIntl();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xl" className={classes.container}>
        <img src={logo} className={classes.logo} alt="logo" />
        <p>{f({ id: 'homeBaseline' })}</p>
      </Container>
    </div>
  );
};

export default Home;
