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

  const [isOpen, setOpenState] = useState(false);
  const valueOption = (options || []).find(option => option.value === value);
  const classNames = getClassName([
    classes.valueOption,
    error ? ' error' : '',
    success ? 'success' : '',
    disabled ? 'disabled' : '',
    !valueOption && placeholder ? 'placeholder' : '',
  ]);

  return (
    <div className={classes.rootWrapper}>
      {label
        ? <Label
          className={`${classes.label}${error ? ' error' : ''}${success ? ' success' : ''}`}
          value={label}
        />
        : null}
      <div className={`${classes.root} ${className}`}>
        <div className={classNames}
          onClick={() => {
            if (!disabled) {
              setOpenState(true);
            }
          }}
        >
          {valueOption ? valueOption.label : placeholder}
        </div>
        <FontAwesomeIcon className={classes.icon} icon={isOpen ? 'chevron-up' : 'chevron-down'}/>
        { !disabled && isOpen && options.length
          ? <>
            <div className={classes.backdrop} onClick={() => setOpenState(false)}/>
            <div className={classes.options}>
              {(options || []).map(option => (
                <div
                  onClick={() => {
                    onSelect(option);
                    setOpenState(false);
                  }}
                  className={classes.option}
                  key={option.value}
                >
                  {option.label}
                </div>
              ))}
            </div>
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
