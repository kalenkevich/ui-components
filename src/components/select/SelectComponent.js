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
    preview,
  } = props;

  const [isOpen, setOpenState] = useState(false);
  const valueOption = (options || []).find(option => option.value === value);
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const classNames = getClassName([
    classes.valueOption,
    preview ? 'customPreview' : 'defaultPreview',
    error ? ' error' : '',
    success ? 'success' : '',
    disabled ? 'disabled' : '',
    !valueOption && placeholder ? 'placeholder' : '',
  ]);
  const iconWrapperClasses = getClassName([
    classes.iconWrapper,
    preview ? 'customPreview' : 'defaultPreview',
    error ? ' error' : '',
    success ? 'success' : '',
    disabled ? 'disabled' : '',
  ]);
  const iconClasses = getClassName([
    classes.icon,
    disabled ? 'disabled' : '',
    isOpen ? 'down' : 'up',
  ]);
  const getPreview = () => {
    if (preview) {
      if (typeof preview === 'function') {
        return preview({ isOpen, setOpenState });
      }

      return <preview/>;
    }

    return valueOption ? valueOption.label : placeholder;
  };

  return (
    <div className={classes.rootWrapper}>
      {label
        ? <Label
          className={`${classes.label}${error ? ' error' : ''}${success ? ' success' : ''}`}
          value={label}
        />
        : null}
      <div className={rootClasses}>
        <div className={classNames}
          onClick={() => {
            if (!disabled) {
              setOpenState(true);
            }
          }}
        >
          {getPreview()}
        </div>
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
        { !disabled && isOpen && options.length
          ? <>
            <div className={classes.backdrop} onClick={() => setOpenState(false)}/>
            <div className={classes.options}>
              {(options || []).map(option => (
                <div
                  onClick={() => {
                    if (!option.disabled) {
                      onSelect(option);
                      setOpenState(false);
                    }
                  }}
                  className={`${classes.option} ${option.disabled ? 'disabled' : ''}`}
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
  preview: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
  value: PropTypes.string,
  onSelect: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default withStyles(SelectStyles)(Select);
