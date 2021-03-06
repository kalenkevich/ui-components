import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getClassName } from '../../services/Utils';
import { MONTH_STEP, YEAR_STEP } from './DateConstants';
import {
  getFormattedDay,
  getMonthIndex,
  getMonths,
  getSafeDate,
  getWeekLegend,
  getWeeks,
  getYears,
} from './DateUtils';

let lastSelectedDateValue = '';

const DateSelectPopup = (props) => {
  const {
    date = null,
    classes = {},
    className = '',
    onChange = () => {},
    options = {},
  } = props;
  const safeDate = getSafeDate(date);
  const [selectedYear, selectYear] = useState(safeDate.getFullYear());
  const [selectedMonth, selectMonth] = useState(safeDate.getMonth());
  const [selectedDay, selectDay] = useState(safeDate.getDate());
  const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
  const selectedWeekDay = selectedDate.getDay();
  const currentDate = new Date(selectedYear, selectedMonth, selectedDate);
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const currentWeekDay = currentDate.getDay();
  const weekLegend = getWeekLegend();
  const years = getYears(selectedYear, YEAR_STEP, options);
  const months = getMonths(selectedYear, selectedMonth, MONTH_STEP, options);
  const weeks = getWeeks(selectedYear, selectedMonth, options);
  const onPrevYearsClick = () => {
    selectYear(selectedYear - 1);
  };
  const onNextYearsClick = () => {
    selectYear(selectedYear + 1);
  };
  const onPrevMonthsClick = () => {
    const safeIndex = getMonthIndex(selectedMonth - 1);

    selectMonth(safeIndex);
  };
  const onNextMonthsClick = () => {
    const safeIndex = getMonthIndex(selectedMonth + 1);

    selectMonth(safeIndex);
  };
  const onYearClick = (year) => {
    selectYear(year.date.getFullYear());
  };
  const onMonthClick = (month) => {
    selectMonth(month.date.getMonth());
    selectYear(month.date.getFullYear());
  };
  const onDayClick = (day) => {
    selectDay(day.date.getDate());
    selectMonth(day.date.getMonth());
    selectYear(day.date.getFullYear());
  };

  useEffect(() => {
    const newSelectedDateValue = selectedDate.toISOString();

    if (lastSelectedDateValue !== newSelectedDateValue) {
      lastSelectedDateValue = newSelectedDateValue;

      onChange(selectedDate);
    }
  }, [selectedDate]);

  return (
    <div className={className}>
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
              key={month.index}
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
      <div className={classes.weekLegend}>
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
      <div className={classes.weeks}>
        {(weeks || []).map(week => (
          <div
            key={week.value}
            className={classes.week}
          >
            {(week.days || []).map((day) => {
              const dayClass = getClassName([
                classes.day,
                day.value === selectedDay || day.selected ? 'selected' : '',
                day.value === currentDay ? 'current' : '',
                day.date.getMonth() !== selectedMonth ? 'another-month' : '',
                day.disabled ? 'disabled' : '',
              ]);

              if (day.date.getMonth() !== selectedMonth) {
                return (
                  <div
                    key={day.value}
                    className={dayClass}
                  >
                    {getFormattedDay(selectedYear, selectedMonth, day.value)}
                  </div>
                );
              }

              return (
                <div
                  key={day.value}
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
      </div>
    </div>
  );
};

DateSelectPopup.propTypes = {
  date: PropTypes.object,
  classes: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object,
};

export default DateSelectPopup;
