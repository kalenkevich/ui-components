import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from '../tooltip';
import DropdownStyles from './DropdownComponentStyle';
import { getClassName } from '../../services/Utils';
import Backrdop from '../Backdrop';

const Dropdown = (props) => {
  const {
    className = '',
    classes = {},
    children,
    type = 'secondary',
    disabled = false,
    error = false,
    success = false,
    label = '',
    separate = false,
    onClick = () => {},
    tooltip = '',
  } = props;

  const [isOpen, setOpenState] = useState(false);
  const [isFocus, setFocusState] = useState(false);
  const [isHovered, setHoveredState] = useState(false);
  const behaviourClasses = [
    error ? ' error' : '',
    success ? 'success' : '',
    disabled ? 'disabled' : '',
    separate ? 'separate' : 'non-separate',
    isFocus ? 'focus' : '',
  ];
  const rootClasses = getClassName(
    [classes.root, className, type, ...behaviourClasses],
  );
  const iconWrapperClasses = getClassName(
    [classes.iconWrapper, separate ? 'separate' : 'non-separate'],
  );
  const iconClasses = getClassName(
    [classes.icon, disabled ? 'disabled' : '', isOpen ? 'down' : 'up'],
  );
  const openOptions = () => {
    if (!disabled) {
      setOpenState(true);
    }
  };
  const closeOptions = () => {
    setOpenState(false);
    setHoveredState(false);
  };

  return (
    <div className={classes.rootWrapper}>
      <Tooltip label={tooltip} show={isHovered}/>
      <div className={rootClasses}
        onMouseEnter={() => setHoveredState(true)}
        onMouseLeave={() => setHoveredState(false)}
      >
        <button
          type={type}
          disabled={disabled}
          className={classes.button}
          onFocus={() => {
            if (disabled) {
              return;
            }

            setFocusState(true);
          }}
          onBlur={() => {
            if (disabled) {
              return;
            }

            setFocusState(false);
          }}
          onClick={(e) => {
            e.stopPropagation();

            if (disabled) {
              return;
            }

            if (!separate) {
              setOpenState(!isOpen);
            }

            onClick();
          }}
        >
          {label}
        </button>
        <div className={iconWrapperClasses} onClick={openOptions}>
          <FontAwesomeIcon
            className={iconClasses}
            icon={'chevron-up'}
          />
        </div>
      </div>
      <div className={classes.optionsWrapper}>
        {!disabled && isOpen
          ? <>
            <Backrdop onClick={closeOptions}/>
            <ul className={classes.options}
              onClick={closeOptions}>
              {children}
            </ul>
          </>
          : null}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  separate: PropTypes.bool,
  tooltip: PropTypes.string,
};

export default withStyles(DropdownStyles)(Dropdown);
