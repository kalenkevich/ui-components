"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getForDateRangePicker = exports.getForDatePicker = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Section = require("./Section");

var _datepicker = _interopRequireWildcard(require("../components/datepicker"));

var _form = _interopRequireWildcard(require("../components/form"));

var DatePickerSection = function DatePickerSection() {
  var options = {
    dates: [{
      value: new Date(),
      label: '',
      tooltip: '',
      className: '',
      selected: true,
      disabled: true
    }]
  };
  var forDatePicker1 = getForDatePicker('Simple date picker');
  var forDatePicker2 = getForDatePicker('With options');
  var forDatePicker3 = getForDatePicker('With placeholder');
  var forDatePicker4 = getForDatePicker('Success');
  var forDatePicker5 = getForDatePicker('Error');
  var forDatePicker6 = getForDatePicker('Disabled');
  var forDatePicker7 = getForDatePicker('With tooltip');
  var forDateRangePicker1 = getForDateRangePicker('Simple date range picker');
  return _react["default"].createElement(_Section.Section, {
    title: 'Date pickers'
  }, _react["default"].createElement(_Section.SectionRow, {
    title: 'Date picker'
  }, _react["default"].createElement(_form["default"], {
    transparent: true
  }, _react["default"].createElement(_form.FormSection, {
    size: "3"
  }, _react["default"].createElement(_datepicker["default"], forDatePicker1)), _react["default"].createElement(_form.FormSection, {
    size: "3"
  }, _react["default"].createElement(_datepicker["default"], (0, _extends2["default"])({}, forDatePicker2, {
    options: options
  }))), _react["default"].createElement(_form.FormSection, {
    size: "3"
  }, _react["default"].createElement(_datepicker["default"], (0, _extends2["default"])({}, forDatePicker3, {
    date: null,
    placeholder: 'With placeholder'
  }))), _react["default"].createElement(_form.FormSection, {
    size: "3"
  }, _react["default"].createElement(_datepicker["default"], (0, _extends2["default"])({}, forDatePicker4, {
    success: true
  }))), _react["default"].createElement(_form.FormSection, {
    size: "3"
  }, _react["default"].createElement(_datepicker["default"], (0, _extends2["default"])({}, forDatePicker5, {
    error: true
  }))), _react["default"].createElement(_form.FormSection, {
    size: "3"
  }, _react["default"].createElement(_datepicker["default"], (0, _extends2["default"])({}, forDatePicker6, {
    disabled: true
  }))), _react["default"].createElement(_form.FormSection, {
    size: "3"
  }, _react["default"].createElement(_datepicker["default"], (0, _extends2["default"])({}, forDatePicker7, {
    tooltip: "Tooltip text here"
  }))))), _react["default"].createElement(_Section.SectionRow, {
    title: 'Date range picker'
  }, _react["default"].createElement(_datepicker.DateRangePicker, forDateRangePicker1)));
};

var getForDatePicker = function getForDatePicker(label) {
  var _useState = (0, _react.useState)(new Date()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  return {
    date: date,
    onChange: setDate,
    label: label
  };
};

exports.getForDatePicker = getForDatePicker;

var getForDateRangePicker = function getForDateRangePicker(label) {
  var _useState3 = (0, _react.useState)(new Date()),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      startDate = _useState4[0],
      setStartDate = _useState4[1];

  var _useState5 = (0, _react.useState)(new Date()),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      endDate = _useState6[0],
      setEndDate = _useState6[1];

  return {
    startDate: startDate,
    endDate: endDate,
    onChange: function onChange(newDate) {
      setStartDate(newDate.startDate);
      setEndDate(newDate.endDate);
    },
    label: label
  };
};

exports.getForDateRangePicker = getForDateRangePicker;
var _default = DatePickerSection;
exports["default"] = _default;