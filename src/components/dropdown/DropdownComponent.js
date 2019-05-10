import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownStyles from './DropdownComponentStyle';
import { getClassName } from '../../services/Utils';

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
  } = props;

  const [isOpen, setOpenState] = useState(false);
  const [isFocus, setFocusState] = useState(false);
  const behaviourClasses = [
    error ? ' error' : '',
    success ? 'success' : '',
    disabled ? 'disabled' : '',
    separate ? 'separate' : 'non-separate',
    isFocus ? 'focus' : '',
  ];
  const rootClasses = getClassName([classes.root, className, type, ...behaviourClasses]);
  const iconWrapperClasses = getClassName([classes.iconWrapper, separate ? 'separate' : 'non-separate']);
  const iconClasses = getClassName([classes.icon, disabled ? 'disabled' : '', isOpen ? 'down' : 'up']);

  return (
    <div className={classes.rootWrapper}>
      <div className={rootClasses} tabIndex='1'>
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
          onClick={() => {
            if (disabled) {
              return;
            }

            if (!separate) {
              setOpenState(true);
            }

            onClick();
          }}
          onKeyPress={(e) => {
            if (e.code === '13') {
              setOpenState(true);
              onClick();
            }
          }}
        >
          {label}
        </button>
        <div className={iconWrapperClasses} onClick={() => {
          if (!disabled) {
            setOpenState(true);
          }
        }}>
          <FontAwesomeIcon
            className={iconClasses}
            icon={'chevron-up'}
          />
        </div>
      </div>
      <div className={classes.optionsWrapper}>
        { !disabled && isOpen
          ? <>
            <div className={classes.backdrop} onClick={() => setOpenState(false)}/>
            <ul className={classes.options} onClick={() => setOpenState(false)}>
              {children}
            </ul>
          </>
          : null }
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
};

export default withStyles(DropdownStyles)(Dropdown);
