import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getClassName } from '../../services/Utils';
import MenuItemStyle from './MenuItemStyle';

const MenuItemComponent = (props) => {
  const {
    classes = {},
    className = '',
    label = '',
    onClick = () => {},
    children,
  } = props;
  const [isHovered, setHoveredState] = useState(false);
  const [isFocus, setFocusState] = useState(false);
  const [isExpanded, setExpandedState] = useState(false);
  const rootClasses = getClassName([
    classes.root,
    className,
    isFocus ? 'focus' : '',
    isHovered ? 'hover' : '',
    children ? 'withChildren' : '',
    isExpanded ? 'expanded' : '',
  ]);
  const labelClasses = getClassName([
    classes.label,
  ]);
  const iconClasses = getClassName([
    classes.icon,
    isExpanded ? 'down' : 'up',
  ]);

  if (children) {
    return (
      <li className={rootClasses}>
        <a className={labelClasses}
          href='#'
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setExpandedState(!isExpanded);
            setFocusState(false);
          }}
          onFocus={() => {
            setFocusState(true);
          }}
          onBlur={() => {
            setFocusState(false);
          }}
          onMouseEnter={() => setHoveredState(true)}
          onMouseLeave={() => setHoveredState(false)}
        >
          {label}
          <FontAwesomeIcon
            className={iconClasses}
            icon={'chevron-up'}
            onClick={() => setExpandedState(!isExpanded)}
          />
        </a>
        { isExpanded ? <ul className={classes.children}>{children}</ul> : null }
      </li>
    );
  }

  return (
    <li className={rootClasses}>
      <a className={labelClasses}
        href='#'
        onClick={(e) => {
          e.preventDefault();

          onClick();
        }}
        onFocus={() => {
          setFocusState(true);
        }}
        onBlur={() => {
          setFocusState(false);
        }}
        onMouseEnter={() => setHoveredState(true)}
        onMouseLeave={() => setHoveredState(false)}
      >
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
