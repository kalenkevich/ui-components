"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

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
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus;
  return _react["default"].createElement("input", {
    type: type,
    placeholder: placeholder,
    className: "".concat(classes.root, " ").concat(className),
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    autoFocus: autoFocus,
    onKeyPress: function onKeyPress(e) {
      return e.key === 'Enter' && onEnter();
    }
  });
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
  placeholder: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_InputComponentStyle["default"])(InputComponent);

exports["default"] = _default;