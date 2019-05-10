"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BackdropStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../services/Utils");

var BackdropStyle = function BackdropStyle() {
  return {
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: '1'
    }
  };
};

exports.BackdropStyle = BackdropStyle;

var Backdrop = function Backdrop(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      onClick = _ref.onClick;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  return _react["default"].createElement("div", {
    onClick: onClick,
    className: rootClasses
  });
};

Backdrop.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(BackdropStyle)(Backdrop);

exports["default"] = _default;