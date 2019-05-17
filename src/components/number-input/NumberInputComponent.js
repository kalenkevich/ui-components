import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../input';

export const isNumber = (num) => {
  if (typeof num === 'number') {
    return num - num === 0;
  }
  if (typeof num === 'string' && num.trim() !== '') {
    // eslint-disable-next-line no-restricted-properties
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
};

const NumberInputComponent = (props) => {
  const {
    className = '',
    value,
    onChange = () => {},
    placeholder = '',
    onBlur = () => {},
    onEnter = () => {},
    autoFocus = false,
    label = '',
    disabled = false,
    error = false,
    success = false,
    tooltip = '',
  } = props;
  const [innerValue, setValue] = useState(value);
  const onInnerValueChange = (e) => {
    const val = e.target.value;

    if (val.length === 0 || isNumber(val)) {
      setValue(val);
      onChange(value);
    }
  };

  return (
    <Input
      className={className}
      value={innerValue.toString()}
      onChange={onInnerValueChange}
      type={'number'}
      disabled={disabled}
      error={error}
      success={success}
      tooltip={tooltip}
      label={label}
      placeholder={placeholder}
      onBlur={onBlur}
      onEnter={onEnter}
      autoFocus={autoFocus}
    />
  );
};

NumberInputComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onEnter: PropTypes.func,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  tooltip: PropTypes.string,
};

export default NumberInputComponent;
