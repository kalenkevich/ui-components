import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../button';
import { getClassName } from '../../services/Utils';
import { YEAR_STEP, MONTH_STEP } from './DateConstants';
import {
  getSafeDate,
  getYears,
  getMonths,
  getWeekLegend,
  getWeeks,
  getFormattedDay,
} from './DateUtils';

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
  const onPrevYearsClick = () => selectYear(selectedYear - 1);
  const onNextYearsClick = () => selectYear(selectedYear + 1);
  const onPrevMonthsClick = () => selectMonth(selectedMonth - 1);
  const onNextMonthsClick = () => selectMonth(selectedMonth + 1);
  const onYearClick = year => selectYear(year.value);
  const onMonthClick = month => selectMonth(month.value);
  const onDayClick = day => selectDay(day.value);

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

export default DateSelectPopup;
