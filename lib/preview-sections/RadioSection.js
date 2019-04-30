"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.optionGroup2 = exports.optionGroup1 = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Section = require("./Section");

var _radio = _interopRequireDefault(require("../components/radio"));

var optionGroup1 = [{
  label: 'Option 1',
  value: 'value1'
}, {
  label: 'Option 2',
  value: 'value2'
}, {
  label: 'Option 3',
  value: 'value3'
}, {
  label: 'Option 4',
  value: 'value4'
}, {
  label: 'Option 5',
  value: 'value5'
}];
exports.optionGroup1 = optionGroup1;
var optionGroup2 = [{
  label: 'Option 1',
  value: 'value1'
}, {
  label: 'Option 2',
  value: 'value2',
  disabled: true
}, {
  label: 'Option 3',
  value: 'value3'
}, {
  label: 'Option 4',
  value: 'value4',
  disabled: true
}, {
  label: 'Option 5',
  value: 'value5'
}];
exports.optionGroup2 = optionGroup2;

var RadioSection = function RadioSection() {
  var _useState = (0, _react.useState)(optionGroup1[0].value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedValue1 = _useState2[0],
      setValue1 = _useState2[1];

  var _useState3 = (0, _react.useState)(optionGroup2[0].value),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      selectedValue2 = _useState4[0],
      setValue2 = _useState4[1];

  return _react["default"].createElement(_Section.Section, {
    title: 'Radio'
  }, _react["default"].createElement(_Section.SectionRow, {
    title: 'Group 1'
  }, _react["default"].createElement("div", null, (optionGroup1 || []).map(function (option) {
    return _react["default"].createElement(_radio["default"], {
      key: option.value,
      label: option.label,
      value: option.value,
      selectedValue: selectedValue1,
      group: "group1",
      onChange: setValue1
    });
  }))), _react["default"].createElement(_Section.SectionRow, {
    title: 'Group 2 (with disabled options)'
  }, _react["default"].createElement("div", null, (optionGroup2 || []).map(function (option) {
    return _react["default"].createElement(_radio["default"], {
      key: option.value,
      label: option.label,
      value: option.value,
      disabled: option.disabled,
      selectedValue: selectedValue2,
      group: "group2",
      onChange: setValue2
    });
  }))));
};

var _default = RadioSection;
exports["default"] = _default;