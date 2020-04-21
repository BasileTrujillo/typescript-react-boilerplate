import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import WifiTetheringOutlinedIcon from '@material-ui/icons/WifiTetheringOutlined';
// import CheckIcon from '@material-ui/icons/Check';
// import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
// import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonDefault: {
      color: theme.palette.text.primary,
    },
    buttonSuccess: {
      color: green[500],
    },
    buttonError: {
      color: red[500],
    },
    buttonWarning: {
      color: orange[500],
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -4,
      left: -4,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }),
);

type NetworkIndicatorButtonProps = {
  loading: boolean;
  nbErrors: number;
  nbRequests: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const NetworkIndicatorButton = (props: NetworkIndicatorButtonProps) => {
  const classes = useStyles();

  const buttonClassname = clsx({
    [classes.buttonDefault]: true,
    // All requests successed
    [classes.buttonSuccess]: props.nbRequests && !props.nbErrors,
    // All request errored
    [classes.buttonError]:
      props.nbRequests && props.nbRequests <= props.nbErrors,
    // Some request errored but not everyone
    [classes.buttonWarning]:
      props.nbErrors && props.nbRequests > props.nbErrors,
  });

  const icon = <WifiTetheringOutlinedIcon />;
  /**
   * Exemple to change icon related to the network status
    let icon = (<WifiTetheringOutlinedIcon />);
    // All requests successed
    if (props.nbRequests && !props.nbErrors) {
      icon = (<CheckIcon />);
    // All request errored
    } else if (props.nbRequests && props.nbRequests <= props.nbErrors) {
      icon = (<ErrorOutlineIcon />);
    // Some request errored but not everyone
    } else if (props.nbRequests && props.nbRequests > props.nbErrors) {
      icon = (<ReportProblemOutlinedIcon />);
    }
 */

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <IconButton
          size={'small'}
          aria-label="save"
          className={buttonClassname}
          onClick={props.onClick}
        >
          {icon}
        </IconButton>
        {props.loading && (
          <CircularProgress size={38} className={classes.fabProgress} />
        )}
      </div>
    </div>
  );
};

NetworkIndicatorButton.defaultProps = {
  loading: false,
  nbErrors: 0,
  nbRequests: 0,
  onClick: () => {},
};
