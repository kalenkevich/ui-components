import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import CurrencyInputStyle from './CurrencyInputStyle';
import Label from '../label';
import Select from '../select';
import Tooltip from '../tooltip';
import NumberInput from '../number-input';
import { getClassName } from '../../services/Utils';

const CurrencyInput = (props) => {
  const {
    classes = {},
    className = '',
    price,
    currencies,
    onChange,
    onBlur = () => {},
    onEnter = () => {},
    autoFocus = false,
    label = '',
    disabled = false,
    error = false,
    success = false,
    tooltip = '',
  } = props;
  const [isHovered, setHoveredState] = useState(false);
  const rootNames = getClassName([
    classes.rootWrapper,
    error ? 'error' : '',
    success ? 'success' : '',
    className,
  ]);
  const onCurrencyChange = (option) => {
    onChange({
      ...price,
      currency: option.value,
    });
  };
  const onValueChange = (value) => {
    onChange({
      ...price,
      value,
    });
  };

  return (
    <div
      className={rootNames}
      onMouseEnter={() => setHoveredState(true)}
      onMouseLeave={() => setHoveredState(false)}
    >
      <Tooltip label={tooltip} show={isHovered}/>
      { label ? <Label
        className={classes.label}
        value={label}
        error={error}
        success={success}
      /> : null }
      <div className={classes.root}>
        <Select
          className={classes.select}
          value={price.currency}
          onSelect={onCurrencyChange}
          options={currencies}
          disabled={disabled}
          error={error}
          success={success}
        />
        <NumberInput
          className={classes.input}
          value={price.value}
          onChange={onValueChange}
          autoFocus={autoFocus}
          disabled={disabled}
          onBlur={onBlur}
          onEnter={onEnter}
          error={error}
          success={success}
        />
      </div>
    </div>
  );
};

CurrencyInput.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  price: PropTypes.object,
  onChange: PropTypes.func,
  currencies: PropTypes.array,
  onBlur: PropTypes.func,
  onEnter: PropTypes.func,
  autoFocus: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  tooltip: PropTypes.string,
};

export default withStyles(CurrencyInputStyle)(CurrencyInput);
