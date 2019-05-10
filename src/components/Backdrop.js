import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../services/Utils';

export const BackdropStyle = () => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: '1',
  },
});

const Backdrop = ({ classes, className, onClick }) => {
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);

  return <div onClick={onClick} className={rootClasses}/>;
};

Backdrop.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default withStyles(BackdropStyle)(Backdrop);
