import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Label from '../label';
import RadioStyles from './RadioStyle';
import { getClassName } from '../../services/Utils';

const Radio = (props) => {
  const {
    classes,
    label,
    group,
    value,
    selectedValue,
    onChange,
    disabled,
    className,
  } = props;

  const [isFocus, setFocusState] = useState(false);
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const checked = value === selectedValue;
  const classNames = getClassName([
    classes.radio,
    checked ? 'checked' : '',
    isFocus ? 'focus' : '',
  ]);

  return (
    <div className={rootClasses}>
      <input
        disabled={disabled}
        className={classNames}
        type='radio'
        value={value}
        name={group}
        onChange={() => {
          if (!disabled) {
            onChange(value);
          }
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

          if (disabled) {
            return;
          }

          if (e.key === 'Enter') {
            onChange(!checked);
          }
        }}
      />
      <Label
        disabled={disabled}
        className={classes.label}
        value={label}
        onClick={() => {
          if (!disabled) {
            onChange(value);
          }
        }}
      />
    </div>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  label: PropTypes.string,
  group: PropTypes.string,
  value: PropTypes.any,
  selectedValue: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default withStyles(RadioStyles)(Radio);
