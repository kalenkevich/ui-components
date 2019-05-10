import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Label from '../label';
import { getClassName } from '../../services/Utils';
import CheckboxStyles from './CheckboxStyle';

const Checkbox = (props) => {
  const {
    className,
    classes,
    label,
    checked,
    onChange,
    disabled,
  } = props;

  const [isFocus, setFocusState] = useState(false);
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const classNames = getClassName([
    classes.checkbox,
    checked ? 'checked' : '',
    isFocus ? 'focus' : '',
  ]);

  return (
    <div className={rootClasses}>
      <input
        disabled={disabled}
        className={classNames}
        type='checkbox'
        value={checked}
        onChange={() => {
          if (!disabled) {
            onChange(!checked);
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
            onChange(!checked);
          }
        }}
      />
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default withStyles(CheckboxStyles)(Checkbox);
