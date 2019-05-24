import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import OptionsStyle from './OptionsStyle';

const Options = (props) => {
  const {
    className,
    classes,
    children,
    onClick = () => {},
  } = props;

  const rootClasses = getClassName([
    classes.optionsWrapper,
    className,
  ]);

  return (
    <div className={rootClasses}>
      <ul className={classes.options} onClick={onClick}>
        {children}
      </ul>
    </div>
  );
};

Options.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  options: PropTypes.array,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default withStyles(OptionsStyle)(Options);
