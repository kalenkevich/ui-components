"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _header = _interopRequireDefault(require("../components/header"));

var _SettingsContext = require("../context/SettingsContext");

var _AuthorizationContext = require("../context/AuthorizationContext");

var _MobileContext = require("../context/MobileContext");

var _settings = _interopRequireDefault(require("../../config/settings"));

var _ApplicationStyle = _interopRequireDefault(require("./ApplicationStyle"));

var _ButtonSection = _interopRequireDefault(require("../preview-sections/ButtonSection"));

var _InputSection = _interopRequireDefault(require("../preview-sections/InputSection"));

var _SelectSection = _interopRequireDefault(require("../preview-sections/SelectSection"));

var ApplicationComponent = function ApplicationComponent(_ref) {
  var classes = _ref.classes;
  return _react["default"].createElement(_SettingsContext.SettingsProvider, {
    value: _settings["default"]
  }, _react["default"].createElement(_AuthorizationContext.Authorization, null, _react["default"].createElement(_MobileContext.MobileApp, null, _react["default"].createElement(_header["default"], {
    appName: _settings["default"].AppName
  }), _react["default"].createElement("div", {
    className: classes.applicationWrapper
  }, _react["default"].createElement("div", {
    className: classes.application
  }, _react["default"].createElement(_ButtonSection["default"], null), _react["default"].createElement(_InputSection["default"], null), _react["default"].createElement(_SelectSection["default"], null))))));
};

ApplicationComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  settings: _propTypes["default"].object
};

var _default = (0, _reactJss["default"])(_ApplicationStyle["default"])(ApplicationComponent);

exports["default"] = _default;