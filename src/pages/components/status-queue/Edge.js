import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getClassName } from '../../../services/Utils';

export const EdgeStyle = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  chevron: {
    width: '15px',
    height: '15px',
    margin: '0 0',
  },
  chevron1: {
    '&.success.current': {
      color: theme.brandSuccessLightColor,
      animation: 'chevron1Success 1s linear infinite',
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
  chevron2: {
    '&.success.current': {
      color: theme.brandSuccessLightColor,
      animation: 'chevron2Success 1s linear infinite',
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
  chevron3: {
    '&.success.current': {
      color: theme.brandSuccessLightColor,
      animation: 'chevron3Success 1s linear infinite',
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
  chevron4: {
    '&.success.current': {
      color: theme.brandSuccessLightColor,
      animation: 'chevron4Success 1s linear infinite',
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
  chevron5: {
    '&.success.current': {
      color: theme.brandSuccessLightColor,
      animation: 'chevron5Success 1s linear infinite',
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
  '@global': {
    '@keyframes chevron1Success': {
      '0%': {
        color: theme.brandSuccessLightColor,
      },
      '25%': {
        color: theme.brandSuccessDarkColor,
      },
      '50%': {
        color: 'rgba(255, 255, 255, 0)',
      },
    },
    '@keyframes chevron2Success': {
      '10%': {
        color: theme.brandSuccessLightColor,
      },
      '35%': {
        color: theme.brandSuccessDarkColor,
      },
      '60%': {
        color: 'rgba(255, 255, 255, 0)',
      },
    },
    '@keyframes chevron3Success': {
      '20%': {
        color: theme.brandSuccessLightColor,
      },
      '45%': {
        color: theme.brandSuccessDarkColor,
      },
      '70%': {
        color: 'rgba(255, 255, 255, 0)',
      },
    },
    '@keyframes chevron4Success': {
      '30%': {
        color: theme.brandSuccessLightColor,
      },
      '55%': {
        color: theme.brandSuccessDarkColor,
      },
      '80%': {
        color: 'rgba(255, 255, 255, 0)',
      },
    },
    '@keyframes chevron5Success': {
      '40%': {
        color: theme.brandSuccessLightColor,
      },
      '75%': {
        color: theme.brandSuccessDarkColor,
      },
      '100%': {
        color: 'rgba(255, 255, 255, 0)',
      },
    },
  },
});

const Edge = (props) => {
  const {
    classes = {},
    className = '',
    type = '',
    action = '',
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
    type,
    action,
  ]);
  const chevron1Classes = getClassName([
    classes.chevron,
    classes.chevron1,
    type,
    action,
  ]);
  const chevron2Classes = getClassName([
    classes.chevron,
    classes.chevron2,
    type,
    action,
  ]);
  const chevron3Classes = getClassName([
    classes.chevron,
    classes.chevron3,
    type,
    action,
  ]);
  const chevron4Classes = getClassName([
    classes.chevron,
    classes.chevron4,
    type,
    action,
  ]);
  const chevron5Classes = getClassName([
    classes.chevron,
    classes.chevron5,
    type,
    action,
  ]);

  return (
    <div className={rootClasses}>
      <FontAwesomeIcon className={chevron1Classes} icon={'chevron-right'} />
      <FontAwesomeIcon className={chevron2Classes} icon={'chevron-right'} />
      <FontAwesomeIcon className={chevron3Classes} icon={'chevron-right'} />
      <FontAwesomeIcon className={chevron4Classes} icon={'chevron-right'} />
      <FontAwesomeIcon className={chevron5Classes} icon={'chevron-right'} />
    </div>
  );
};

Edge.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
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

export default withStyles(EdgeStyle)(Edge);
