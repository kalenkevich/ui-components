"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _CurrencyInputStyle = _interopRequireDefault(require("./CurrencyInputStyle"));

var _label = _interopRequireDefault(require("../label"));

var _select = _interopRequireDefault(require("../select"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _numberInput = _interopRequireDefault(require("../number-input"));

var _Utils = require("../../services/Utils");

var CurrencyInput = function CurrencyInput(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      price = props.price,
      currencies = props.currencies,
      onChange = props.onChange,
      _props$onBlur = props.onBlur,
      onBlur = _props$onBlur === void 0 ? function () {} : _props$onBlur,
      _props$onEnter = props.onEnter,
      onEnter = _props$onEnter === void 0 ? function () {} : _props$onEnter,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$success = props.success,
      success = _props$success === void 0 ? false : _props$success,
      _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? '' : _props$tooltip;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isHovered = _useState2[0],
      setHoveredState = _useState2[1];

  var rootNames = (0, _Utils.getClassName)([classes.rootWrapper, error ? 'error' : '', success ? 'success' : '', className]);

  var onCurrencyChange = function onCurrencyChange(option) {
    onChange((0, _objectSpread2["default"])({}, price, {
      currency: option.value
    }));
  };

  var onValueChange = function onValueChange(value) {
    onChange((0, _objectSpread2["default"])({}, price, {
      value: value
    }));
  };

  return _react["default"].createElement("div", {
    className: rootNames,
    onMouseEnter: function onMouseEnter() {
      return setHoveredState(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHoveredState(false);
    }
  }, _react["default"].createElement(_tooltip["default"], {
    label: tooltip,
    show: isHovered
  }), label ? _react["default"].createElement(_label["default"], {
    className: classes.label,
    value: label,
    error: error,
    success: success
  }) : null, _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(_select["default"], {
    className: classes.select,
    value: price.currency,
    onSelect: onCurrencyChange,
    options: currencies,
    disabled: disabled,
    error: error,
    success: success
  }), _react["default"].createElement(_numberInput["default"], {
    className: classes.input,
    value: price.value,
    onChange: onValueChange,
    autoFocus: autoFocus,
    disabled: disabled,
    onBlur: onBlur,
    onEnter: onEnter,
    error: error,
    success: success
  })));
};

CurrencyInput.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  price: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  currencies: _propTypes["default"].array,
  onBlur: _propTypes["default"].func,
  onEnter: _propTypes["default"].func,
  autoFocus: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  success: _propTypes["default"].bool,
  tooltip: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_CurrencyInputStyle["default"])(CurrencyInput);

exports["default"] = _default;