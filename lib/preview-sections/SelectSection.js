"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getForSelect = exports.options2 = exports.options1 = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Section = require("./Section");

var _select = _interopRequireDefault(require("../components/select"));

var options1 = [{
  label: 'Option 1',
  value: 'option1'
}, {
  label: 'Option 2',
  value: 'option2'
}, {
  label: 'Option 3',
  value: 'option3'
}, {
  label: 'Option 4',
  value: 'option4'
}, {
  label: 'Option 5',
  value: 'option5'
}, {
  label: 'Option 6',
  value: 'option6'
}, {
  label: 'Option 7',
  value: 'option7'
}, {
  label: 'Option 8',
  value: 'option8'
}];
exports.options1 = options1;
var options2 = [{
  label: 'Option 1',
  value: 'option1'
}, {
  label: 'Option 2',
  value: 'option2'
}, {
  label: 'Option 3',
  value: 'option3'
}, {
  label: 'Option 4',
  value: 'option4'
}];
exports.options2 = options2;

var InputSection = function InputSection() {
  var forSelect1 = getForSelect(options1);
  var forSelect2 = getForSelect(options2);
  var forSelect3 = getForSelect(options1);
  var forSelect4 = getForSelect(options1);
  var forSelect5 = getForSelect(options1);
  var forSelect6 = getForSelect(options1, null);
  return _react["default"].createElement(_Section.Section, {
    title: 'Selects'
  }, _react["default"].createElement(_Section.SectionRow, null, _react["default"].createElement(_select["default"], (0, _extends2["default"])({
    label: "Select with a bit of options"
  }, forSelect2)), _react["default"].createElement(_select["default"], (0, _extends2["default"])({
    label: "Select with a lot of options"
  }, forSelect1)), _react["default"].createElement(_select["default"], (0, _extends2["default"])({
    label: "Select with placeholder"
  }, forSelect6, {
    placeholder: "With placeholder"
  })), _react["default"].createElement(_select["default"], (0, _extends2["default"])({
    label: "Error select"
  }, forSelect3, {
    error: true
  })), _react["default"].createElement(_select["default"], (0, _extends2["default"])({
    label: "Success select"
  }, forSelect4, {
    success: true
  })), _react["default"].createElement(_select["default"], (0, _extends2["default"])({
    label: "Disabled select"
  }, forSelect5, {
    disabled: true
  }))));
};

var getForSelect = function getForSelect(options, initialValue) {
  var _useState = (0, _react.useState)(initialValue !== undefined ? initialValue : options[0] && options[0].value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return {
    value: value,
    onSelect: function onSelect(option) {
      return setValue(option.value);
    },
    options: options
  };
};

exports.getForSelect = getForSelect;
var _default = InputSection;
exports["default"] = _default;