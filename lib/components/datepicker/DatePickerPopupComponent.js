"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _Utils = require("../../services/Utils");

var _DateConstants = require("./DateConstants");

var _DateUtils = require("./DateUtils");

var lastSelectedDateValue = '';

var DateSelectPopup = function DateSelectPopup(props) {
  var _props$date = props.date,
      date = _props$date === void 0 ? null : _props$date,
      _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$options = props.options,
      options = _props$options === void 0 ? {} : _props$options;
  var safeDate = (0, _DateUtils.getSafeDate)(date);

  var _useState = (0, _react.useState)(safeDate.getFullYear()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedYear = _useState2[0],
      selectYear = _useState2[1];

  var _useState3 = (0, _react.useState)(safeDate.getMonth()),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      selectedMonth = _useState4[0],
      selectMonth = _useState4[1];

  var _useState5 = (0, _react.useState)(safeDate.getDate()),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      selectedDay = _useState6[0],
      selectDay = _useState6[1];

  var selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
  var selectedWeekDay = selectedDate.getDay();
  var currentDate = new Date(selectedYear, selectedMonth, selectedDate);
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDate();
  var currentWeekDay = currentDate.getDay();
  var weekLegend = (0, _DateUtils.getWeekLegend)();
  var years = (0, _DateUtils.getYears)(selectedYear, _DateConstants.YEAR_STEP, options);
  var months = (0, _DateUtils.getMonths)(selectedYear, selectedMonth, _DateConstants.MONTH_STEP, options);
  var weeks = (0, _DateUtils.getWeeks)(selectedYear, selectedMonth, options);

  var onPrevYearsClick = function onPrevYearsClick() {
    selectYear(selectedYear - 1);
  };

  var onNextYearsClick = function onNextYearsClick() {
    selectYear(selectedYear + 1);
  };

  var onPrevMonthsClick = function onPrevMonthsClick() {
    var safeIndex = (0, _DateUtils.getMonthIndex)(selectedMonth - 1);
    selectMonth(safeIndex);
  };

  var onNextMonthsClick = function onNextMonthsClick() {
    var safeIndex = (0, _DateUtils.getMonthIndex)(selectedMonth + 1);
    selectMonth(safeIndex);
  };

  var onYearClick = function onYearClick(year) {
    selectYear(year.date.getFullYear());
  };

  var onMonthClick = function onMonthClick(month) {
    selectMonth(month.date.getMonth());
    selectYear(month.date.getFullYear());
  };

  var onDayClick = function onDayClick(day) {
    selectDay(day.date.getDate());
    selectMonth(day.date.getMonth());
    selectYear(day.date.getFullYear());
  };

  (0, _react.useEffect)(function () {
    var newSelectedDateValue = selectedDate.toISOString();

    if (lastSelectedDateValue !== newSelectedDateValue) {
      lastSelectedDateValue = newSelectedDateValue;
      onChange(selectedDate);
    }
  }, [selectedDate]);
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("div", {
    className: classes.years
  }, _react["default"].createElement("div", {
    className: classes.year,
    onClick: onPrevYearsClick
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "chevron-left"
  })), (years || []).map(function (year) {
    var yearClass = (0, _Utils.getClassName)([classes.year, year.value === selectedYear ? 'selected' : '', year.value === currentYear ? 'current' : '']);
    return _react["default"].createElement("div", {
      key: year.value,
      className: yearClass,
      onClick: function onClick(e) {
        e.stopPropagation();
        onYearClick(year);
      }
    }, year.label);
  }), _react["default"].createElement("div", {
    className: classes.year,
    onClick: onNextYearsClick
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "chevron-right"
  }))), _react["default"].createElement("div", {
    className: classes.months
  }, _react["default"].createElement("div", {
    className: classes.month,
    onClick: onPrevMonthsClick
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "chevron-left"
  })), (months || []).map(function (month) {
    var monthClass = (0, _Utils.getClassName)([classes.month, month.value === selectedMonth ? 'selected' : '', month.value === currentMonth ? 'current' : '']);
    return _react["default"].createElement("div", {
      key: month.index,
      className: monthClass,
      onClick: function onClick(e) {
        e.stopPropagation();
        onMonthClick(month);
      }
    }, month.label);
  }), _react["default"].createElement("div", {
    className: classes.month,
    onClick: onNextMonthsClick
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "chevron-right"
  }))), _react["default"].createElement("div", {
    className: classes.weekLegend
  }, (weekLegend || []).map(function (weekDay) {
    var weekDayClass = (0, _Utils.getClassName)([classes.weekDay, weekDay.value === selectedWeekDay ? 'selected' : '', weekDay.value === currentWeekDay ? 'current' : '']);
    return _react["default"].createElement("div", {
      key: weekDay.label,
      className: weekDayClass
    }, weekDay.label);
  })), _react["default"].createElement("div", {
    className: classes.weeks
  }, (weeks || []).map(function (week) {
    return _react["default"].createElement("div", {
      key: week.value,
      className: classes.week
    }, (week.days || []).map(function (day) {
      var dayClass = (0, _Utils.getClassName)([classes.day, day.value === selectedDay || day.selected ? 'selected' : '', day.value === currentDay ? 'current' : '', day.date.getMonth() !== selectedMonth ? 'another-month' : '', day.disabled ? 'disabled' : '']);

      if (day.date.getMonth() !== selectedMonth) {
        return _react["default"].createElement("div", {
          key: day.value,
          className: dayClass
        }, (0, _DateUtils.getFormattedDay)(selectedYear, selectedMonth, day.value));
      }

      return _react["default"].createElement("div", {
        key: day.value,
        className: dayClass,
        onClick: function onClick(e) {
          e.stopPropagation();
          onDayClick(day);
        }
      }, (0, _DateUtils.getFormattedDay)(selectedYear, selectedMonth, day.value));
    }));
  })));
};

DateSelectPopup.propTypes = {
  date: _propTypes["default"].object,
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  options: _propTypes["default"].object
};
var _default = DateSelectPopup;
exports["default"] = _default;