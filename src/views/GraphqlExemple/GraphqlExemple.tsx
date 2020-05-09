/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {Button} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useMutation, useQuery, useSubscribeToMore} from "../../services/graphql/hooks";
import {userRequests} from "../../services/graphql/handlers/userRequests";
import {useIntl} from "react-intl";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import {useStyles} from "./GraphqlExemple.style";
import Typography from "@material-ui/core/Typography";

/**
 * Merge previous query data with new ones comming from subscription
 * @param {Object} prev Previous query data
 * @param {Object} subscriptionData New incoming subscription data
 */
const mergeUserQueryWithSubscription = (prev: any, {subscriptionData}: any) => {
  if (!subscriptionData.data) return prev;
  const newUser = subscriptionData.data.userCreated;

  prev.users?.hits?.push(newUser);
  prev.users.nbHits = prev.users?.nbHits ? prev.users?.nbHits + 1 : 1;

  return prev;
};

const GraphqlExemple = () => {
  // Get scoped style
  const classes = useStyles();
  // Get i18n handler
  const { formatMessage: f } = useIntl();
  // Query for users
  const usersQuery  = useQuery(userRequests.query.users);
  // Get the mutation to create new user
  const [createUser, userCreatedMutation]  = useMutation(userRequests.mutation.createUser);
  // Subscribe to more user using WS
  useSubscribeToMore(usersQuery.subscribeToMore, {
    document: userRequests.subscription.onUserCreated,
    updateQuery: mergeUserQueryWithSubscription
  });

  // Create a new user with random name base on timestamp
  const addRandomUser = () => {
    const time = +(new Date());
    createUser({
      variables: {
        data: {
          email: time + "@test.fr",
          username: "test" + time,
          fullname: "Test" + time
        }
      }
    })
  };

  const isLoading = usersQuery.loading || userCreatedMutation.loading;
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Typography variant="h6" component="h6" gutterBottom>
        GraphQL Exemple
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Here you have an exemple page that perform query, mutation and subscription over a GraphQL server.
        <br />
        At page loading a query is performed and a WebSocket subscription is iniated to listen to new items comming from the GraphQL server.
        <br />
        Then when you hit the "Add random user" button, a mutation is called then it is the subscription that will add new item to the list. So if you open two window and play with the button on each, everyone will be sync in real time.
      </Typography>

        <Button onClick={addRandomUser} disabled={isLoading}>
          Add random user
          {isLoading && (
            <LinearProgress className={classes.loading}/>
          )}
        </Button>
        <Container maxWidth="sm">
          {(usersQuery.error || userCreatedMutation.error) && f({ id: 'error' })}
          {usersQuery.data && (
            <List dense={true} subheader={<ListSubheader>Users ({usersQuery?.data?.users?.nbHits})</ListSubheader>}>
              {usersQuery?.data?.users?.hits?.map((user: any) => (
                <ListItem key={user.id}>
                  <ListItemText
                    primary={user.fullname}
                    secondary={`id: ${user.id} | username: ${user.username}`}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Container>
      </Container>
  );
};

export default GraphqlExemple;
