import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getClassName } from '../../services/Utils';
import MenuItemStyle from './MenuItemStyle';

const MenuItemComponent = (props) => {
  const {
    classes = {},
    className = '',
    label = '',
    onClick = () => {},
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const labelClasses = getClassName([
    classes.label,
  ]);

  return (
    <li className={rootClasses}>
      <a className={labelClasses} href='#' onClick={(e) => {
        e.preventDefault();

        onClick();
      }}>
        {label}
      </a>
    </li>
  );
};

MenuItemComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default withStyles(MenuItemStyle)(MenuItemComponent);
