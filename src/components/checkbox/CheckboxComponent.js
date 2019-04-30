import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Label from '../label';
import CheckboxStyles from './CheckboxStyle';

const Checkbox = (props) => {
  const {
    classes,
    label,
    checked,
    onChange,
    disabled,
  } = props;

  return (
    <div className={classes.root}>
      <input
        disabled={disabled}
        className={`${classes.checkbox} ${checked ? 'checked' : ''}`}
        type='checkbox'
        value={checked}
        onChange={() => {
          if (!disabled) {
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
  classes: PropTypes.object,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default withStyles(CheckboxStyles)(Checkbox);
