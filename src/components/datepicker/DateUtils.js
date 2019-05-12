/* eslint-disable no-plusplus */
import {
  WEEK_DAY_MAP,
  YEARS_MONTH_MAP,
} from './DateConstants';

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

  const formatter = new Intl.DateTimeFormat('en', { day: 'numeric' });

  return formatter.format(date);
};

export const getYears = (selectedYear, step) => {
  const years = [];

  for (let i = 1; i <= step; i++) {
    const value = selectedYear - step + i - 1;

    years.push({
      label: value,
      value,
      date: new Date(value + 1, 0, 0),
    });
  }

  years.push({
    label: selectedYear,
    value: selectedYear,
    date: new Date(selectedYear, 0, 0),
  });

  for (let i = 1; i <= step; i++) {
    const value = selectedYear + i;

    years.push({
      label: value,
      value,
      date: new Date(value + 1, 0, 0),
    });
  }

  return years;
};

export const getMonthIndex = (index) => {
  if (index < 0) {
    return 12 + index;
  }

  if (index > 11) {
    return index - 12;
  }

  return index;
};

export const getMonths = (selectedYear, selectedMonth, step) => {
  const months = [];

  for (let i = 1; i <= step; i++) {
    const monthIndex = selectedMonth - step + i - 1;
    const safeMonthIndex = getMonthIndex(monthIndex);
    const label = YEARS_MONTH_MAP[safeMonthIndex];

    months.push({
      value: safeMonthIndex,
      index: monthIndex,
      label,
      date: new Date(selectedYear, monthIndex + 1, 0),
    });
  }

  const safeSelectedMonthIndex = getMonthIndex(selectedMonth);

  months.push({
    value: safeSelectedMonthIndex,
    index: selectedMonth,
    label: YEARS_MONTH_MAP[safeSelectedMonthIndex],
    date: new Date(selectedYear, selectedMonth + 1, 0),
  });

  for (let i = 1; i <= step; i++) {
    const monthIndex = selectedMonth + i;
    const safeMonthIndex = getMonthIndex(monthIndex);
    const label = YEARS_MONTH_MAP[safeMonthIndex];

    months.push({
      value: safeMonthIndex,
      index: monthIndex,
      label,
      date: new Date(selectedYear, monthIndex + 1, 0),
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

export const getWeeks = (selectedYear, selectedMonth) => {
  const weeks = [];
  let days = getDays(selectedYear, selectedMonth);
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

export const getDays = (selectedYear, selectedMonth) => {
  let days = [];
  const sundayIndex = getFirstSunday(selectedYear, selectedMonth);

  for (let i = 0, currentIndex = sundayIndex; i < 7; i++, currentIndex--) {
    const label = WEEK_DAY_MAP[currentIndex];

    days = [{
      value: currentIndex,
      label,
      date: new Date(selectedYear, selectedMonth, currentIndex),
    }, ...days];
  }

  for (let i = sundayIndex + 1; i < 35 + sundayIndex + 1; i++) {
    const label = WEEK_DAY_MAP[i % 7];

    days.push({
      value: i,
      label,
      date: new Date(selectedYear, selectedMonth, i),
    });
  }

  return days;
};

export const getFirstSunday = (selectedYear, selectedMonth) => {
  let dayIndex = 0;
  let day = new Date(selectedYear, selectedMonth, dayIndex);

  while (day.getDay() !== 6) {
    day = new Date(selectedYear, selectedMonth, ++dayIndex);
  }

  return dayIndex;
};
