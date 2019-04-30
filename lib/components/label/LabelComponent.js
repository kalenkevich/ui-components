"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _LabelComponentStyle = _interopRequireDefault(require("./LabelComponentStyle"));

var _Utils = require("../../services/Utils");

var LabelComponent = function LabelComponent(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      _props$success = props.success,
      success = _props$success === void 0 ? false : _props$success,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick;
  var classNames = (0, _Utils.getClassName)([classes.root, error ? 'error' : '', success ? 'success' : '', disabled ? 'disabled' : '', className]);
  return _react["default"].createElement("div", {
    className: classNames,
    onClick: onClick
  }, value);
};

LabelComponent.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  value: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  success: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_LabelComponentStyle["default"])(LabelComponent);

exports["default"] = _default;