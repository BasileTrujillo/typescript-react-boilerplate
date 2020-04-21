import React from 'react';
import { useIntl } from 'react-intl';
import logo from '../../logo.svg';
import { useStyles } from './Home.style';
import gql from 'graphql-tag';
import {Button} from "@material-ui/core";
import {useLazyQuery} from "../../services/graphql/hooks";

type HomeProps = {
  title: string;
};

const Home = (props: HomeProps) => {
  const { formatMessage: f } = useIntl();
  const classes = useStyles();

  let GET_USER = gql`
    query {
      pokemon(name: "Pikachu") {
        id
        number
        name
        attacks {
          special {
            name
            type
            damage
          }
        }
        evolutions {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          attacks {
            fast {
              name
              type
              damage
            }
          }
        }
      }
    }
  `;

  const [loadGreeting, { called, error, loading, data }]  = useLazyQuery(GET_USER);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <p>{f({ id: 'homeBaseline' })}</p>
        <Button onClick={() => loadGreeting()}>
          Load Pikachu data
        </Button>
        {called && (
          <>
            {loading && 'Loading...'}
            {error && 'error :\'('}
            {data && JSON.stringify(data)}
          </>
        )}
      </header>
    </div>
  );
};

export default Home;
