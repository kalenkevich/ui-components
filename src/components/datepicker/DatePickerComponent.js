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
  const [internalDate, setDate] = useState(date);
  const formattedDate = getFormattedDate(date);
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
          <Card className={classes.popup}>
            <DatePickerPopup
              date={internalDate}
              classes={classes}
              options={options}
              onChange={newDate => setDate(newDate)}
            />
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
