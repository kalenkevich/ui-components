"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _label = _interopRequireDefault(require("../label"));

var _InputComponentStyle = _interopRequireDefault(require("./InputComponentStyle"));

var InputComponent = function InputComponent(props) {
  var classes = props.classes,
      value = props.value,
      onChange = props.onChange,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
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
      success = _props$success === void 0 ? false : _props$success;
  return _react["default"].createElement("div", {
    className: classes.rootWrapper
  }, label ? _react["default"].createElement(_label["default"], {
    className: "".concat(classes.label).concat(error ? ' error' : '').concat(success ? ' success' : ''),
    value: label
  }) : null, _react["default"].createElement("input", {
    disabled: disabled,
    type: type,
    placeholder: placeholder,
    className: "".concat(classes.root, " ").concat(className).concat(error ? ' error' : '').concat(success ? ' success' : ''),
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    autoFocus: autoFocus,
    onKeyPress: function onKeyPress(e) {
      return e.key === 'Enter' && onEnter();
    }
  }));
};

InputComponent.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  value: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onBlur: _propTypes["default"].func,
  onEnter: _propTypes["default"].func,
  type: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  success: _propTypes["default"].bool
};

var _default = (0, _reactJss["default"])(_InputComponentStyle["default"])(InputComponent);

exports["default"] = _default;