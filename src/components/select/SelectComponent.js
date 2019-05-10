import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Label from '../label';
import SelectStyles from './SelectComponentStyle';
import { getClassName } from '../../services/Utils';

const Select = (props) => {
  const {
    className = '',
    classes = {},
    options = [],
    value = '',
    onSelect = () => {},
    disabled = false,
    error = false,
    success = false,
    label = '',
    placeholder = '',
  } = props;

  const [isFocus, setFocusState] = useState(false);
  const [isOpen, setOpenState] = useState(false);
  const valueOption = (options || []).find(option => option.value === value);
  const behaviourClasses = [
    error ? ' error' : '',
    success ? 'success' : '',
    disabled ? 'disabled' : '',
    isFocus ? 'focus' : '',
  ];
  const rootClasses = getClassName([
    classes.root,
    className,
    ...behaviourClasses,
  ]);
  const iconClasses = getClassName([
    classes.icon,
    disabled ? 'disabled' : '',
    isOpen ? 'down' : 'up',
  ]);

  return (
    <div className={classes.rootWrapper}>
      {label
        ? <Label
          className={`${classes.label}${error ? ' error' : ''}${success ? ' success' : ''}`}
          value={label}
        />
        : null}
      <div className={rootClasses}>
        <input
          className={classes.input}
          onChange={() => {}}
          value={valueOption ? valueOption.label : ''}
          placeholder={placeholder}
          onClick={() => {
            if (disabled) {
              return;
            }

            setOpenState(!isOpen);
          }}
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
          onKeyPress={(e) => {
            e.preventDefault();

            if (e.key === 'Enter') {
              setOpenState(!isOpen);
            }
          }}
        />
        <div className={classes.iconWrapper} onClick={() => {
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
        { !disabled && isOpen && options.length
          ? <>
            <div className={classes.backdrop} onClick={() => setOpenState(false)}/>
            <ul className={classes.options}>
              {(options || []).map(option => (
                <li key={option.value}>
                  <a href='#' tabIndex={option.disabled ? '-1' : '0'}
                    onClick={(e) => {
                      e.preventDefault();

                      if (option.disabled) {
                        return;
                      }

                      onSelect(option);
                      setOpenState(false);
                    }}
                    className={`${classes.option} ${option.disabled ? 'disabled' : ''}`}
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
          : null }
      </div>
    </div>
  );
};

Select.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  onSelect: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default withStyles(SelectStyles)(Select);
