"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Section = require("./Section");

var _datepicker = _interopRequireDefault(require("../components/datepicker"));

var DatePickerSection = function DatePickerSection() {
  var _useState = (0, _react.useState)(new Date()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var options = {
    dates: [{
      value: new Date(),
      label: '',
      tooltip: '',
      className: '',
      selected: true,
      disabled: true,
      onClick: function onClick(day) {},
      render: function render(day, classes) {}
    }]
  };
  return _react["default"].createElement(_Section.Section, {
    title: 'Date pickers'
  }, _react["default"].createElement(_Section.SectionRow, null, _react["default"].createElement(_datepicker["default"], {
    label: "Simple date picker",
    date: date,
    onChange: setDate
  }), _react["default"].createElement(_datepicker["default"], {
    label: "With options",
    date: date,
    onChange: setDate,
    options: options
  }), _react["default"].createElement(_datepicker["default"], {
    label: "With placeholder",
    placeholder: "With placeholder",
    date: null,
    onChange: setDate
  }), _react["default"].createElement(_datepicker["default"], {
    label: "Success",
    success: true,
    date: date,
    onChange: setDate
  }), _react["default"].createElement(_datepicker["default"], {
    label: "Error",
    error: true,
    date: date,
    onChange: setDate
  }), _react["default"].createElement(_datepicker["default"], {
    label: "Disabled",
    disabled: true,
    date: date,
    onChange: setDate
  }), _react["default"].createElement(_datepicker["default"], {
    label: "With tooltip",
    date: date,
    onChange: setDate,
    tooltip: "Tooltip text here"
  })));
};

var _default = DatePickerSection;
exports["default"] = _default;