import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import DropdownItemStyles from './DropdownItemStyle';

const DropdownItem = (props) => {
  const {
    classes,
    className,
    disabled,
    onClick = () => {},
    label,
    description,
  } = props;

  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const labelClasses = getClassName([
    classes.label,
    disabled ? 'disabled' : '',
  ]);

  return (
    <li className={rootClasses} tabIndex="-1">
      <a href='#' className={labelClasses}
        tabIndex={disabled ? '-1' : '0'}
        onClick={(e) => {
          e.preventDefault();

          onClick();
        }}
      >
        {label}
        { description ? <div className={classes.description}>{description}</div> : null }
      </a>
    </li>
  );
};

DropdownItem.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default withStyles(DropdownItemStyles)(DropdownItem);
