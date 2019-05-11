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
      zIndex: '1',
      transition: 'opacity 100ms linear',
      '&.opening': {
        opacity: '1'
      },
      '&.closing': {
        opacity: '0'
      }
    }
  };
};

exports.BackdropStyle = BackdropStyle;

var Backdrop = function Backdrop(props) {
  var classes = props.classes,
      className = props.className,
      isOpening = props.isOpening,
      isClosing = props.isClosing,
      onClick = props.onClick;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className, isOpening ? 'opening' : '', isClosing ? 'closing' : '']);
  return _react["default"].createElement("div", {
    onClick: onClick,
    className: rootClasses
  });
};

Backdrop.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  isOpening: _propTypes["default"].bool,
  isClosing: _propTypes["default"].bool
};

var _default = (0, _reactJss["default"])(BackdropStyle)(Backdrop);

exports["default"] = _default;