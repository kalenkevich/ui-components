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

var _ProgressBarStyle = _interopRequireDefault(require("./ProgressBarStyle"));

var ProgressBar = function ProgressBar(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$progress = props.progress,
      progress = _props$progress === void 0 ? '0' : _props$progress,
      _props$infinity = props.infinity,
      infinity = _props$infinity === void 0 ? false : _props$infinity,
      _props$type = props.type,
      type = _props$type === void 0 ? 'primary' : _props$type;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var progressClasses = (0, _Utils.getClassName)([classes.progress, infinity ? 'infinity' : '', type]);
  var progressStyle = infinity ? {
    width: '100%'
  } : {
    width: "".concat(progress, "%")
  };
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement("div", {
    style: progressStyle,
    className: progressClasses
  }));
};

ProgressBar.propTypes = {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  progress: _propTypes["default"].number,
  infinity: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger'])
};

var _default = (0, _reactJss["default"])(_ProgressBarStyle["default"])(ProgressBar);

exports["default"] = _default;