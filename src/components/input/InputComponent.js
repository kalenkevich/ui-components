import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import Label from '../label';
import InputComponentStyle from './InputComponentStyle';
import { getClassName } from '../../services/Utils';

const InputComponent = (props) => {
  const {
    classes,
    value,
    onChange,
    className = '',
    type = 'text',
    placeholder = '',
    onBlur = () => {},
    onEnter = () => {},
    autoFocus = false,
    label = '',
    disabled = false,
    error = false,
    success = false,
  } = props;

  const classNames = getClassName([
    classes.root,
    error ? 'error' : '',
    success ? 'success' : '',
    className,
  ]);

  return (
    <div className={classes.rootWrapper}>
      {label
        ? <Label
          className={classes.label}
          value={label}
          error={error}
          success={success}
        />
        : null}
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className={classNames}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={autoFocus}
        onKeyPress={e => e.key === 'Enter' && onEnter()}
      />
    </div>
  );
};

InputComponent.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
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
};

export default withStyle(InputComponentStyle)(InputComponent);
