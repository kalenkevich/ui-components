"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ApplicationHeader = _interopRequireDefault(require("./ApplicationHeader"));

var _SettingsContext = require("../context/SettingsContext");

var _AuthorizationContext = require("../context/AuthorizationContext");

var _MobileContext = require("../context/MobileContext");

var _NotificationContext = require("../context/NotificationContext");

var _ThemeContext = require("../context/ThemeContext");

var _settings = _interopRequireDefault(require("../../config/settings"));

var _ApplicationStyle = _interopRequireDefault(require("./ApplicationStyle"));

var _ApplicationRoutes = _interopRequireDefault(require("./ApplicationRoutes"));

var ApplicationComponent = function ApplicationComponent(_ref) {
  var classes = _ref.classes;
  return _react["default"].createElement(_SettingsContext.SettingsProvider, {
    value: _settings["default"]
  }, _react["default"].createElement(_ThemeContext.ThemedApp, null, _react["default"].createElement(_AuthorizationContext.Authorization, null, _react["default"].createElement(_MobileContext.MobileApp, null, _react["default"].createElement(_NotificationContext.NotificationApp, null, _react["default"].createElement(_ApplicationHeader["default"], null), _react["default"].createElement("div", {
    className: classes.applicationWrapper
  }, _react["default"].createElement("div", {
    className: classes.application
  }, _react["default"].createElement(_ApplicationRoutes["default"], null))))))));
};

ApplicationComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  settings: _propTypes["default"].object
};

var _default = (0, _reactJss["default"])(_ApplicationStyle["default"])(ApplicationComponent);

exports["default"] = _default;