import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../input';
import Button from '../button';
import DatePickerStyles from './DatePickerComponentStyle';
import { getClassName } from '../../services/Utils';

export const YEARS_MONTH_MAP = {
  0: 'JAN',
  1: 'FEB',
  2: 'MAR',
  3: 'APR',
  4: 'MAY',
  5: 'JUN',
  6: 'JUL',
  7: 'AUG',
  8: 'SEP',
  9: 'OKT',
  10: 'NOV',
  11: 'DEC',
};

export const MONTH_DAYS_MAP = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31,
};

export const WEEK_DAY_MAP = {
  0: 'SUN',
  1: 'MON',
  2: 'TUE',
  3: 'WEN',
  4: 'THU',
  5: 'FRI',
  6: 'SAT',
};

export const YEAR_STEP = 2;

export const MONTH_STEP = 2;

export const getSafeDate = (date) => {
  if (date) {
    return new Date(date);
  }

  return new Date();
};

export const getFormattedDate = (date) => {
  if (!date) {
    return '';
  }

  const formatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return formatter.format(date);
};

export const getFormattedDay = (year, month, day) => {
  const date = new Date(year, month, day);

  const formatter = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
  });

  return formatter.format(date);
};

const getYears = (selectedYear, step) => {
  const years = [];

  for (let i = 1; i <= step; i++) {
    const value = selectedYear - step + i - 1;

    years.push({
      label: value,
      value,
    });
  }

  years.push({
    label: selectedYear,
    value: selectedYear,
  });

  for (let i = 1; i <= step; i++) {
    const value = selectedYear + i;

    years.push({
      label: value,
      value,
    });
  }

  return years;
};

export const getMonths = (selectedMonth, step) => {
  const months = [];

  for (let i = 1; i <= step; i++) {
    if (selectedMonth - i < 0) {
      break;
    }

    const monthIndex = selectedMonth - step + i - 1;
    const label = YEARS_MONTH_MAP[monthIndex];

    months.push({
      value: monthIndex,
      label,
    });
  }

  months.push({
    value: selectedMonth,
    label: YEARS_MONTH_MAP[selectedMonth],
  });

  for (let i = 1; i <= step; i++) {
    if (selectedMonth + i < 0) {
      break;
    }

    const monthIndex = selectedMonth + i;
    const label = YEARS_MONTH_MAP[selectedMonth + i];

    months.push({
      value: monthIndex,
      label,
    });
  }

  return months;
};

export const getWeekLegend = () => {
  const weeks = [];

  for (let i = 0; i < 7; i++) {
    weeks.push({
      value: i,
      label: WEEK_DAY_MAP[i],
    });
  }

  return weeks;
};

export const getWeeks = (selectedMonth) => {
  const weeks = [];
  let days = getDays(selectedMonth);
  let currentWeek = 0;

  while (days.length > 0) {
    const weekDays = days.slice(0, 7);
    days = days.slice(weekDays.length, days.length);

    weeks.push({
      value: currentWeek,
      days: weekDays,
    });

    currentWeek++;
  }

  return weeks;
};

export const getDays = (selectedMonth) => {
  const days = [];
  const daysCount = MONTH_DAYS_MAP[selectedMonth];

  for (let i = 0; i < daysCount; i++) {
    const label = WEEK_DAY_MAP[i % 7];

    days.push({
      value: i,
      label,
    });
  }

  return days;
};

const DateSelectPopup = (props) => {
  const {
    date,
    classes,
    onApply,
    onClose,
    options,
  } = props;
  const safeDate = getSafeDate(date);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const currentWeekDay = currentDate.getDay();
  const [selectedYear, selectYear] = useState(safeDate.getFullYear());
  const [selectedMonth, selectMonth] = useState(safeDate.getMonth());
  const [selectedDay, selectDay] = useState(safeDate.getDate());
  const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
  const selectedWeekDay = selectedDate.getDay();
  const years = getYears(selectedYear, YEAR_STEP);
  const months = getMonths(selectedMonth, MONTH_STEP);
  const weekLegend = getWeekLegend();
  const weeks = getWeeks(selectedMonth);
  const onPrevYearsClick = () => {
    selectYear(selectedYear - 1);
  };
  const onNextYearsClick = () => {
    selectYear(selectedYear + 1);
  };
  const onPrevMonthsClick = () => {
    selectMonth(selectedMonth - 1);
  };
  const onNextMonthsClick = () => {
    selectMonth(selectedMonth + 1);
  };
  const onYearClick = (year) => {
    selectYear(year.value);
  };
  const onMonthClick = (month) => {
    selectMonth(month.value);
  };
  const onDayClick = (day) => {
    selectDay(day.value);
  };

  return (
    <div className={classes.popup}>
      <div className={classes.years}>
        <div className={classes.year} onClick={onPrevYearsClick}>
          <FontAwesomeIcon icon='chevron-left'/>
        </div>
        {(years || []).map((year) => {
          const yearClass = getClassName([
            classes.year,
            year.value === selectedYear ? 'selected' : '',
            year.value === currentYear ? 'current' : '',
          ]);

          return (
            <div
              key={year.value}
              className={yearClass}
              onClick={(e) => {
                e.stopPropagation();

                onYearClick(year);
              }}
            >
              {year.label}
            </div>
          );
        })}
        <div className={classes.year} onClick={onNextYearsClick}>
          <FontAwesomeIcon icon='chevron-right'/>
        </div>
      </div>
      <div className={classes.months}>
        <div className={classes.month} onClick={onPrevMonthsClick}>
          <FontAwesomeIcon icon='chevron-left'/>
        </div>
        {(months || []).map((month) => {
          const monthClass = getClassName([
            classes.month,
            month.value === selectedMonth ? 'selected' : '',
            month.value === currentMonth ? 'current' : '',
          ]);

          return (
            <div
              key={month.label}
              className={monthClass}
              onClick={(e) => {
                e.stopPropagation();

                onMonthClick(month);
              }}
            >
              {month.label}
            </div>
          );
        })}
        <div className={classes.month} onClick={onNextMonthsClick}>
          <FontAwesomeIcon icon='chevron-right'/>
        </div>
      </div>
      <div className={classes.weeks}>
        {(weekLegend || []).map((weekDay) => {
          const weekDayClass = getClassName([
            classes.weekDay,
            weekDay.value === selectedWeekDay ? 'selected' : '',
            weekDay.value === currentWeekDay ? 'current' : '',
          ]);

          return (
            <div
              key={weekDay.label}
              className={weekDayClass}
            >
              {weekDay.label}
            </div>
          );
        })}
      </div>
      {(weeks || []).map(week => (
        <div
          key={week.value}
          className={classes.week}
        >
          {(week.days || []).map((day) => {
            const dayClass = getClassName([
              classes.day,
              day.value === selectedDay ? 'selected' : '',
              day.value === currentDay ? 'current' : '',
            ]);

            return (
              <div
                key={day.label}
                className={dayClass}
                onClick={(e) => {
                  e.stopPropagation();

                  onDayClick(day);
                }}
              >
                {getFormattedDay(selectedYear, selectedMonth, day.value)}
              </div>
            );
          })}
        </div>
      ))}
      <div className={classes.actionPanel}>
        <Button
          className={classes.actionPanelButton}
          type='secondary'
          onClick={(e) => {
            e.stopPropagation();

            onClose();
          }}
        >
          Cancel
        </Button>
        <Button
          className={classes.actionPanelButton}
          onClick={(e) => {
            e.stopPropagation();

            onApply(selectedDate);
          }}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

DateSelectPopup.propTypes = {
  date: PropTypes.object,
  classes: PropTypes.object,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onApply: PropTypes.func,
  options: PropTypes.object,
};

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
          <DateSelectPopup
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
