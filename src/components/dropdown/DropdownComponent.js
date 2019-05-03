import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownStyles from './DropdownComponentStyle';
import Button from '../button';
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
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const buttonClassNames = getClassName([
    classes.button,
    error ? ' error' : '',
    success ? 'success' : '',
    disabled ? 'disabled' : '',
    separate ? 'separate' : 'non-separate',
  ]);
  const iconWrapperClasses = getClassName([
    classes.iconWrapper,
    type,
    error ? ' error' : '',
    success ? 'success' : '',
    disabled ? 'disabled' : '',
    separate ? 'separate' : 'non-separate',
  ]);
  const iconClasses = getClassName([
    classes.icon,
    disabled ? 'disabled' : '',
    isOpen ? 'down' : 'up',
  ]);

  return (
    <div className={classes.rootWrapper}>
      <div className={rootClasses}>
        <Button
          className={buttonClassNames}
          type={type}
          disabled={disabled}
          onClick={() => {
            if (!disabled && !separate) {
              setOpenState(true);
            }

            onClick();
          }}
        >
          {label}
        </Button>
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
            <div className={classes.options} onClick={() => setOpenState(false)}>{children}</div>
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
