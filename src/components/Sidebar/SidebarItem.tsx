import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";

const useSidebarItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: 15,
      borderRadius: 0,
      backgroundColor: theme.palette.action.selected
    },
  }),
);

export const SidebarItem = (props: any) => {
  const classes = useSidebarItemStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <ListItem
        button
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <ListItemIcon>
          {props.index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
      {props.disabledPopover !== true && (
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          {props.text}
        </Popover>
      )}
    </div>
  );
};
