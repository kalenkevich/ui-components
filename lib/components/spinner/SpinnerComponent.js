"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../../services/Utils");

var _SpinnerStyle = _interopRequireDefault(require("./SpinnerStyle"));

var Spinner = function Spinner(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$size = props.size,
      size = _props$size === void 0 ? 'md' : _props$size,
      _props$type = props.type,
      type = _props$type === void 0 ? 'primary' : _props$type;
  var rootClasses = (0, _Utils.getClassName)([classes.root, size, type, className]);
  return _react["default"].createElement("div", {
    className: rootClasses
  });
};

Spinner.propTypes = {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(['sm', 'md', 'lg']),
  type: _propTypes["default"].oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger'])
};

var _default = (0, _reactJss["default"])(_SpinnerStyle["default"])(Spinner);

exports["default"] = _default;