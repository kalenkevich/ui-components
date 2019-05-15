import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../../services/Utils';

export const NodeStyle = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '80px',
    margin: '0 10px',
  },
  circle: {
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    border: '1px solid',
    '&.success.current': {
      borderColor: theme.brandSuccessDarkColor,
      backgroundColor: theme.brandSuccessLightColor,
    },
    '&.error.current': {
      borderColor: theme.brandErrorDarkColor,
      backgroundColor: theme.brandErrorLightColor,
    },
    '&.success.past': {
      borderColor: theme.brandDarkGrayColor,
      backgroundColor: theme.brandDarkGrayColor,
    },
    '&.error.past': {
      borderColor: theme.brandDarkGrayColor,
      backgroundColor: theme.brandDarkGrayColor,
    },
    '&.success.future': {
      borderColor: theme.brandLightGrayColor,
      backgroundColor: theme.brandLightGrayColor,
    },
    '&.error.future': {
      borderColor: theme.brandLightGrayColor,
      backgroundColor: theme.brandLightGrayColor,
    },
  },
  label: {
    fontSize: '12px',
    textAlign: 'center',
    '&.success.current': {
      color: theme.brandSuccessLightColor,
    },
    '&.error.current': {
      color: theme.brandErrorLightColor,
    },
    '&.success.past': {
      color: theme.brandDarkGrayColor,
    },
    '&.error.past': {
      color: theme.brandDarkGrayColor,
    },
    '&.success.future': {
      color: theme.brandLightGrayColor,
    },
    '&.error.future': {
      color: theme.brandLightGrayColor,
    },
  },
});

const Node = (props) => {
  const {
    classes = {},
    className = '',
    label = '',
    type = '',
    action = '',
    current = false,
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  const circleClasses = getClassName([
    classes.circle,
    type,
    action,
    current ? 'current' : '',
  ]);

  const labelClasses = getClassName([
    classes.label,
    type,
    action,
    current ? 'current' : '',
  ]);

  return (
    <div className={rootClasses}>
      <div className={circleClasses}/>
      <div className={labelClasses}>{label}</div>
    </div>
  );
};

Node.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
  current: PropTypes.bool,
  action: PropTypes.oneOf([
    'active',
    'past',
    'future',
  ]),
  type: PropTypes.oneOf([
    'success',
    'error',
  ]),
};

export default withStyles(NodeStyle)(Node);
