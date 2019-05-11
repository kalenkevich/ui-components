import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import SpinnerStyle from './SpinnerStyle';

const Spinner = (props) => {
  const {
    classes = {},
    className = '',
    size = 'md',
    type = 'primary',
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
    size,
    type,
  ]);

  return <div className={rootClasses}/>;
};

Spinner.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger']),
};

export default withStyles(SpinnerStyle)(Spinner);
