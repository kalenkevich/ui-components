import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import DropdownItemStyles from './DropdownItemStyle';

const DropdownItem = (props) => {
  const {
    classes,
    className,
    children,
    disabled,
    onClick,
  } = props;

  const rootClasses = getClassName([
    classes.root,
    disabled ? 'disabled' : '',
    className,
  ]);

  return (
    <div className={rootClasses} onClick={onClick}>
      {children}
    </div>
  );
};

DropdownItem.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default withStyles(DropdownItemStyles)(DropdownItem);
