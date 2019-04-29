/* eslint-disable no-plusplus */
import {
  MONTH_DAYS_MAP,
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

  const formatter = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
  });

  return formatter.format(date);
};

export const getYears = (selectedYear, step) => {
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
