"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _NotificationStyle = _interopRequireDefault(require("./NotificationStyle"));

var _Utils = require("../../services/Utils");

var _MobileContext = _interopRequireDefault(require("../../context/MobileContext"));

var Notification = function Notification(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$type = props.type,
      type = _props$type === void 0 ? 'info' : _props$type,
      _props$message = props.message,
      message = _props$message === void 0 ? '' : _props$message,
      _props$hide = props.hide,
      hide = _props$hide === void 0 ? false : _props$hide,
      _props$position = props.position,
      position = _props$position === void 0 ? 'tc' : _props$position,
      _props$onClose = props.onClose,
      onClose = _props$onClose === void 0 ? function () {} : _props$onClose;

  var _useContext = (0, _react.useContext)(_MobileContext["default"]),
      isMobile = _useContext.isMobile;

  var classNames = (0, _Utils.getClassName)([classes.root, type, position, isMobile ? 'mobile' : '', hide ? 'hide' : '']);
  return _react["default"].createElement("div", {
    className: classNames
  }, message, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    onClick: onClose,
    className: classes.closeIcon,
    icon: "times"
  }));
};

Notification.propTypes = {
  classes: _propTypes["default"].object,
  type: _propTypes["default"].oneOf(['success', 'info', 'warning', 'error']),
  position: _propTypes["default"].oneOf(['tl', 'tc', 'tr', 'cl', 'cc', 'cr', 'bl', 'bc', 'br']),
  message: _propTypes["default"].string,
  hide: _propTypes["default"].bool,
  onClose: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_NotificationStyle["default"])(Notification);

exports["default"] = _default;