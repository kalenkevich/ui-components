import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import Input from '../input';
import { getFormattedDate } from './DateUtils';
import DatePickerPopup from './DatePickerPopupComponent';
import DatePickerStyles from './DatePickerComponentStyle';

const DatePicker = (props) => {
  const {
    date,
    onChange,
    classes,
    error,
    success,
    label,
    disabled,
    placeholder,
    options,
  } = props;
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
    <div className={classes.root} onClick={() => setOpenState(true)}>
      <Input
        label={label}
        success={success}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        value={formattedDate}
        onChange={() => {}}
      />
      {isOpened ? (
        <>
          <div
            className={classes.backdrop}
            onClick={onBackdropClick}
          />
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
  date: PropTypes.object,
  classes: PropTypes.object,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.object,
};

export default withStyle(DatePickerStyles)(DatePicker);
