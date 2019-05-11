import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import Input from '../input';
import { getFormattedDate } from './DateUtils';
import DatePickerPopup from './DatePickerPopupComponent';
import DatePickerStyles from './DatePickerComponentStyle';
import { getClassName } from '../../services/Utils';
import Backrdop from '../Backdrop';

const DatePicker = (props) => {
  const {
    className,
    date,
    onChange,
    classes,
    error,
    success,
    label,
    disabled,
    placeholder,
    options,
    tooltip,
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const [isOpened, setOpenState] = useState(false);
  const formattedDate = getFormattedDate(date);
  const onApplyClick = (newDate) => {
    onChange(newDate);
    setOpenState(false);
  };
  const onCloseClick = () => {
    setOpenState(false);
  };
  const onBackdropClick = (e) => {
    e.stopPropagation();

    setOpenState(false);
  };

  return (
    <div className={rootClasses} onClick={() => {
      if (disabled) {
        return;
      }
      setOpenState(true);
    }}>
      <Input
        label={label}
        success={success}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        value={formattedDate}
        tooltip={tooltip}
        onChange={() => {}}
      />
      {isOpened ? (
        <>
          <Backrdop onClick={onBackdropClick}/>
          <DatePickerPopup
            date={date}
            classes={classes}
            options={options}
            onApply={onApplyClick}
            onClose={onCloseClick}
          />
        </>
      ) : null}
    </div>
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
  date: PropTypes.object,
  classes: PropTypes.object,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.object,
  tooltip: PropTypes.string,
};

export default withStyle(DatePickerStyles)(DatePicker);
