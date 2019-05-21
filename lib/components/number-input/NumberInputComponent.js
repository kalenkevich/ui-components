"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNumber = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _input = _interopRequireDefault(require("../input"));

var isNumber = function isNumber(num) {
  if (typeof num === 'number') {
    return num - num === 0;
  }

  if (typeof num === 'string' && num.trim() !== '') {
    // eslint-disable-next-line no-restricted-properties
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }

  return false;
};

exports.isNumber = isNumber;

var NumberInputComponent = function NumberInputComponent(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      value = props.value,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
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

  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      innerValue = _useState2[0],
      setValue = _useState2[1];

  var onInnerValueChange = function onInnerValueChange(e) {
    var val = e.target.value;

    if (val.length === 0 || isNumber(val)) {
      setValue(val);
      onChange(value);
    }
  };

  return _react["default"].createElement(_input["default"], {
    className: className,
    value: innerValue.toString(),
    onChange: onInnerValueChange,
    type: 'number',
    disabled: disabled,
    error: error,
    success: success,
    tooltip: tooltip,
    label: label,
    placeholder: placeholder,
    onBlur: onBlur,
    onEnter: onEnter,
    autoFocus: autoFocus
  });
};

NumberInputComponent.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  onChange: _propTypes["default"].func.isRequired,
  onBlur: _propTypes["default"].func,
  onEnter: _propTypes["default"].func,
  type: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  success: _propTypes["default"].bool,
  tooltip: _propTypes["default"].string
};
var _default = NumberInputComponent;
exports["default"] = _default;