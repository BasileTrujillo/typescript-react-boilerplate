import React, { useContext } from 'react';
import { GraphqlContext } from '../../services/graphql/Graphql.context';
import { NetworkIndicatorButton } from './NetworkIndicatorButton';
import {Popover} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";

type NetworkStatusProps = {};

export const NetworkStatus = (props: NetworkStatusProps) => {
  const graphqlContext = useContext(GraphqlContext);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  //const id = open ? 'simple-popover' : undefined;

  //const queryInfo = (<span>{graphqlContext.state.pendingQuery} Queries in progress…</span>);
  //const mutationInfo = (<span>{graphqlContext.state.pendingMutation} Mutation in progress…</span>);

  return (
    /*<p>
      {queryInfo} | {mutationInfo} | Total Queries: {graphqlContext.state.totalQuery} |
      number of Errors: {graphqlContext.state.errors.length} | latest error: {graphqlContext.state.errors[graphqlContext.state.errors.length - 1]?.message}
    </p>*/
    <div>
      <NetworkIndicatorButton
        loading={
          (
            graphqlContext.state.pendingQuery > 0 ||
            graphqlContext.state.pendingMutation > 0
          )
        }
        nbErrors={graphqlContext?.state?.errors?.length}
        nbRequests={graphqlContext?.state?.totalQuery + graphqlContext?.state?.totalMutation}
        onClick={handleClick}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <List dense={true} subheader={<ListSubheader>Network details</ListSubheader>}>
            <ListItem>
              <ListItemIcon>
                <span>{graphqlContext.state.pendingQuery}</span>
              </ListItemIcon>
              <ListItemText
                primary="Pending Query"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <span>{graphqlContext.state.pendingMutation}</span>
              </ListItemIcon>
              <ListItemText
                primary="Pending Mutation"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <span>{graphqlContext.state.totalQuery}</span>
              </ListItemIcon>
              <ListItemText
                primary="Total Query"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <span>{graphqlContext.state.totalMutation}</span>
              </ListItemIcon>
              <ListItemText
                primary="Total Mutation"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <span>{graphqlContext.state.errors?.length}</span>
              </ListItemIcon>
              <ListItemText
                primary="Total Error"
              />
            </ListItem>
            {graphqlContext.state.errors.length > 0 && (
              <ListItem>
                <ListItemText
                  primary={'Latest Error'}
                  secondary={graphqlContext.state.errors[graphqlContext.state.errors.length - 1]?.message}
                />
              </ListItem>
            )}
        </List>
      </Popover>
    </div>

  );
};
