"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _TextAreaComponentStyle = _interopRequireDefault(require("./TextAreaComponentStyle"));

var TextAreaComponent = function TextAreaComponent(props) {
  var classes = props.classes,
      value = props.value,
      onChange = props.onChange,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      _props$onBlur = props.onBlur,
      onBlur = _props$onBlur === void 0 ? function () {} : _props$onBlur,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus;
  return _react["default"].createElement("textarea", {
    placeholder: placeholder,
    className: "".concat(classes.root, " ").concat(className),
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    autoFocus: autoFocus
  });
};

TextAreaComponent.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  value: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onBlur: _propTypes["default"].func,
  type: _propTypes["default"].string,
  autoFocus: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_TextAreaComponentStyle["default"])(TextAreaComponent);

exports["default"] = _default;