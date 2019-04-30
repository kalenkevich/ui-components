import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Label from '../label';
import { getClassName } from '../../services/Utils';
import CheckboxStyles from './CheckboxStyle';

const Checkbox = (props) => {
  const {
    classes,
    label,
    checked,
    onChange,
    disabled,
  } = props;

  const classNames = getClassName([
    classes.checkbox,
    checked ? 'checked' : '',
  ]);

  return (
    <div className={classes.root}>
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
