import React from 'react';
import { useIntl } from 'react-intl';
import logo from '../../logo.svg';
import { useStyles } from './Home.style';

type HomeProps = {
  title: string;
};

const Home = (props: HomeProps) => {
  const { formatMessage: f } = useIntl();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <p>{f({ id: 'homeBaseline' })}</p>
        <a
          className={classes.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {f({ id: 'learnReact' })}
        </a>
      </header>
    </div>
  );
};

export default Home;
