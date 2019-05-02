"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _NotificationBellStyle = _interopRequireDefault(require("./NotificationBellStyle"));

var NotificationBell = function NotificationBell(props) {
  var classes = props.classes,
      notificationCount = props.notificationCount;
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: classes.icon,
    size: "lg",
    icon: "bell"
  }), notificationCount > 0 ? _react["default"].createElement("div", {
    className: classes.marked
  }, notificationCount) : null);
};

NotificationBell.propTypes = {
  classes: _propTypes["default"].object,
  notificationCount: _propTypes["default"].number
};

var _default = (0, _reactJss["default"])(_NotificationBellStyle["default"])(NotificationBell);

exports["default"] = _default;