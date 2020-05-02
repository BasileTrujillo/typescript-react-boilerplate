/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {Button} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useMutation, useQuery, useSubscribeToMore} from "../../../services/graphql/hooks";
import {userRequests} from "../../../services/graphql/handlers/userRequests";
import {useIntl} from "react-intl";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// Define some style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      'position': 'absolute',
      'bottom': '0px',
      'width': '100%',
    },
  })
);

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

const GraphqlTests = () => {
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
    <div>
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
    </div>
  );
};

export default GraphqlTests;
