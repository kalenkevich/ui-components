"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirstSunday = exports.getDays = exports.getWeeks = exports.getWeekLegend = exports.getMonths = exports.getMonthIndex = exports.getYears = exports.getFormattedDay = exports.getFormattedDate = exports.getSafeDate = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _DateConstants = require("./DateConstants");

/* eslint-disable no-plusplus */
var getSafeDate = function getSafeDate(date) {
  if (date) {
    return new Date(date);
  }

  return new Date();
};

exports.getSafeDate = getSafeDate;

var getFormattedDate = function getFormattedDate(date) {
  if (!date) {
    return '';
  }

  var formatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
  return formatter.format(date);
};

exports.getFormattedDate = getFormattedDate;

var getFormattedDay = function getFormattedDay(year, month, day) {
  var date = new Date(year, month, day);
  var formatter = new Intl.DateTimeFormat('en', {
    day: 'numeric'
  });
  return formatter.format(date);
};

exports.getFormattedDay = getFormattedDay;

var getYears = function getYears(selectedYear, step) {
  var years = [];

  for (var i = 1; i <= step; i++) {
    var value = selectedYear - step + i - 1;
    years.push({
      label: value,
      value: value,
      date: new Date(value + 1, 0, 0)
    });
  }

  years.push({
    label: selectedYear,
    value: selectedYear,
    date: new Date(selectedYear, 0, 0)
  });

  for (var _i = 1; _i <= step; _i++) {
    var _value = selectedYear + _i;

    years.push({
      label: _value,
      value: _value,
      date: new Date(_value + 1, 0, 0)
    });
  }

  return years;
};

exports.getYears = getYears;

var getMonthIndex = function getMonthIndex(index) {
  if (index < 0) {
    return 12 + index;
  }

  if (index > 11) {
    return index - 12;
  }

  return index;
};

exports.getMonthIndex = getMonthIndex;

var getMonths = function getMonths(selectedYear, selectedMonth, step) {
  var months = [];

  for (var i = 1; i <= step; i++) {
    var monthIndex = selectedMonth - step + i - 1;

    var _safeMonthIndex = getMonthIndex(monthIndex);

    var label = _DateConstants.YEARS_MONTH_MAP[_safeMonthIndex];
    months.push({
      value: _safeMonthIndex,
      index: monthIndex,
      label: label,
      date: new Date(selectedYear, monthIndex + 1, 0)
    });
  }

  var safeMonthIndex = getMonthIndex(selectedMonth);
  months.push({
    value: safeMonthIndex,
    index: selectedMonth,
    label: _DateConstants.YEARS_MONTH_MAP[safeMonthIndex],
    date: new Date(selectedYear, selectedMonth + 1, 0)
  });

  for (var _i2 = 1; _i2 <= step; _i2++) {
    var _monthIndex = selectedMonth + _i2;

    var _safeMonthIndex2 = getMonthIndex(_monthIndex);

    var _label = _DateConstants.YEARS_MONTH_MAP[_safeMonthIndex2];
    months.push({
      value: _safeMonthIndex2,
      index: _monthIndex,
      label: _label,
      date: new Date(selectedYear, _monthIndex + 1, 0)
    });
  }

  return months;
};

exports.getMonths = getMonths;

var getWeekLegend = function getWeekLegend() {
  var weeks = [];

  for (var i = 0; i < 7; i++) {
    weeks.push({
      value: i,
      label: _DateConstants.WEEK_DAY_MAP[i]
    });
  }

  return weeks;
};

exports.getWeekLegend = getWeekLegend;

var getWeeks = function getWeeks(selectedYear, selectedMonth) {
  var weeks = [];
  var days = getDays(selectedYear, selectedMonth);
  var currentWeek = 0;

  while (days.length > 0) {
    var weekDays = days.slice(0, 7);
    days = days.slice(weekDays.length, days.length);
    weeks.push({
      value: currentWeek,
      days: weekDays
    });
    currentWeek++;
  }

  return weeks;
};

exports.getWeeks = getWeeks;

var getDays = function getDays(selectedYear, selectedMonth) {
  var days = [];
  var sundayIndex = getFirstSunday(selectedYear, selectedMonth);

  for (var i = 0, currentIndex = sundayIndex; i < 7; i++, currentIndex--) {
    var label = _DateConstants.WEEK_DAY_MAP[currentIndex];
    days = [{
      value: currentIndex,
      label: label,
      date: new Date(selectedYear, selectedMonth, currentIndex)
    }].concat((0, _toConsumableArray2["default"])(days));
  }

  for (var _i3 = sundayIndex + 1; _i3 < 35 + sundayIndex + 1; _i3++) {
    var _label2 = _DateConstants.WEEK_DAY_MAP[_i3 % 7];
    days.push({
      value: _i3,
      label: _label2,
      date: new Date(selectedYear, selectedMonth, _i3)
    });
  }

  return days;
};

exports.getDays = getDays;

var getFirstSunday = function getFirstSunday(selectedYear, selectedMonth) {
  var dayIndex = 0;
  var day = new Date(selectedYear, selectedMonth, dayIndex);

  while (day.getDay() !== 6) {
    day = new Date(selectedYear, selectedMonth, ++dayIndex);
  }

  return dayIndex;
};

exports.getFirstSunday = getFirstSunday;