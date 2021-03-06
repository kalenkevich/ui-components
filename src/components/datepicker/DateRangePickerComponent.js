import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import Input from '../input';
import Button from '../button';
import Backrdop from '../Backdrop';
import Card from '../card';
import DatePickerPopup from './DatePickerPopupComponent';
import DatePickerStyles from './DatePickerStyle';
import { getClassName, getFormattedDate } from '../../services/Utils';

const DatePicker = (props) => {
  const {
    className,
    classes,
    error,
    success,
    label,
    disabled,
    placeholder,
    options,
    tooltip,
    onChange,
    startDate,
    endDate,
  } = props;
  const rootClasses = getClassName([
    classes.root,
    className,
  ]);
  const [isOpened, setOpenState] = useState(false);
  const [internalDate, setDate] = useState({
    startDate,
    endDate,
  });
  const formattedStartDate = getFormattedDate(internalDate.startDate);
  const formattedEndDate = getFormattedDate(internalDate.endDate);
  const onDateChangeClick = (newDate, key) => {
    setDate({
      ...internalDate,
      [key]: newDate,
    });
  };
  const onApplyClick = () => {
    onChange(internalDate);
    setOpenState(false);
  };
  const onCloseClick = () => {
    setOpenState(false);
  };
  const onBackdropClick = (e) => {
    e.stopPropagation();
    setOpenState(false);
  };

  const resultOptions = {
    ...options,
    dates: [
      ...(options || {}).dates || [],
    ],
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
        value={`${formattedStartDate} - ${formattedEndDate}`}
        tooltip={tooltip}
        onChange={() => {}}
      />
      {isOpened ? (
        <>
          <Backrdop onClick={onBackdropClick}/>
          <Card className={classes.popup}>
            <div className={classes.popupWrapper}>
              <DatePickerPopup
                className={classes.leftPopup}
                date={internalDate.startDate}
                classes={classes}
                options={resultOptions}
                onChange={newDate => onDateChangeClick(newDate, 'startDate')}
                onClose={onCloseClick}
              />
              <DatePickerPopup
                className={classes.rightPopup}
                date={internalDate.endDate}
                classes={classes}
                options={resultOptions}
                onChange={newDate => onDateChangeClick(newDate, 'endDate')}
                onClose={onCloseClick}
              />
            </div>
            <div className={classes.actionPanel}>
              <Button
                className={classes.actionPanelButton}
                type='secondary'
                onClick={onCloseClick}
              >
                Cancel
              </Button>
              <Button
                type={'primary'}
                className={classes.actionPanelButton}
                onClick={onApplyClick}
              >
                Apply
              </Button>
            </div>
          </Card>
        </>
      ) : null}
    </div>
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.object,
  tooltip: PropTypes.string,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
};

export default withStyle(DatePickerStyles)(DatePicker);
