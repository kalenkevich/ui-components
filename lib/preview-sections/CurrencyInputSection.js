"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getForInput = exports.currencies = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Section = require("./Section");

var _currencyInput = _interopRequireDefault(require("../components/currency-input"));

var _form = _interopRequireWildcard(require("../components/form"));

var currencies = [{
  label: 'BYN',
  value: 'BYN'
}, {
  label: 'USD',
  value: 'USD'
}, {
  label: 'EUR',
  value: 'EUR'
}];
exports.currencies = currencies;

var InputSection = function InputSection() {
  var forInput1 = getForInput();
  var forInput2 = getForInput();
  var forInput3 = getForInput();
  var forInput4 = getForInput();
  var forInput5 = getForInput();
  var forInput6 = getForInput();
  var forInput7 = getForInput();
  return _react["default"].createElement(_Section.Section, {
    title: 'Currency Inputs'
  }, _react["default"].createElement(_Section.SectionRow, null, _react["default"].createElement(_form["default"], {
    transparent: true
  }, _react["default"].createElement(_form.FormSection, {
    size: '3'
  }, _react["default"].createElement(_currencyInput["default"], (0, _extends2["default"])({
    label: "Simple input"
  }, forInput1))), _react["default"].createElement(_form.FormSection, {
    size: '3'
  }, _react["default"].createElement(_currencyInput["default"], (0, _extends2["default"])({
    label: "Password"
  }, forInput3, {
    placeholder: "Password",
    type: "password"
  }))), _react["default"].createElement(_form.FormSection, {
    size: '3'
  }, _react["default"].createElement(_currencyInput["default"], (0, _extends2["default"])({
    label: "With placeholder"
  }, forInput2, {
    placeholder: 'With Placeholder'
  }))), _react["default"].createElement(_form.FormSection, {
    size: '3'
  }, _react["default"].createElement(_currencyInput["default"], (0, _extends2["default"])({
    label: "Success"
  }, forInput4, {
    success: true
  }))), _react["default"].createElement(_form.FormSection, {
    size: '3'
  }, _react["default"].createElement(_currencyInput["default"], (0, _extends2["default"])({
    label: "Error"
  }, forInput5, {
    error: true
  }))), _react["default"].createElement(_form.FormSection, {
    size: '3'
  }, _react["default"].createElement(_currencyInput["default"], (0, _extends2["default"])({
    label: "Disabled"
  }, forInput6, {
    placeholder: "Disabled",
    disabled: true
  }))), _react["default"].createElement(_form.FormSection, {
    size: '3'
  }, _react["default"].createElement(_currencyInput["default"], (0, _extends2["default"])({
    label: "With tooltip"
  }, forInput7, {
    placeholder: "With tooltip",
    tooltip: "Tooltip text here"
  }))))));
};

var getForInput = function getForInput(options) {
  var initialValue = {
    value: 0,
    currency: 'BYN'
  };

  var _useState = (0, _react.useState)(initialValue),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      price = _useState2[0],
      onChange = _useState2[1];

  return (0, _objectSpread2["default"])({
    price: price,
    onChange: onChange,
    currencies: currencies
  }, options);
};

exports.getForInput = getForInput;
var _default = InputSection;
exports["default"] = _default;