"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireWildcard(require("react-jss"));

var _header = require("../components/header");

var _SettingsContext = require("../context/SettingsContext");

var _AuthorizationContext = require("../context/AuthorizationContext");

var _MobileContext = require("../context/MobileContext");

var _NotificationContext = require("../context/NotificationContext");

var _settings = _interopRequireDefault(require("../../config/settings"));

var _ApplicationStyle = _interopRequireDefault(require("./ApplicationStyle"));

var _ButtonSection = _interopRequireDefault(require("../preview-sections/ButtonSection"));

var _InputSection = _interopRequireDefault(require("../preview-sections/InputSection"));

var _TextAreaSection = _interopRequireDefault(require("../preview-sections/TextAreaSection"));

var _SelectSection = _interopRequireDefault(require("../preview-sections/SelectSection"));

var _CheckboxSection = _interopRequireDefault(require("../preview-sections/CheckboxSection"));

var _RadioSection = _interopRequireDefault(require("../preview-sections/RadioSection"));

var _AvatarSection = _interopRequireDefault(require("../preview-sections/AvatarSection"));

var _TabsSection = _interopRequireDefault(require("../preview-sections/TabsSection"));

var _LabeledTextSection = _interopRequireDefault(require("../preview-sections/LabeledTextSection"));

var _NotificationSection = _interopRequireDefault(require("../preview-sections/NotificationSection"));

var _DatePickerSection = _interopRequireDefault(require("../preview-sections/DatePickerSection"));

var _ThemeSection = _interopRequireDefault(require("../preview-sections/ThemeSection"));

var _theme = _interopRequireDefault(require("../theme"));

var ApplicationComponent = function ApplicationComponent(_ref) {
  var classes = _ref.classes;

  var _useState = (0, _react.useState)(_theme["default"]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  var changeTheme = function changeTheme(newTheme) {
    setTheme((0, _objectSpread2["default"])({}, theme, newTheme));
  };

  return _react["default"].createElement(_SettingsContext.SettingsProvider, {
    value: _settings["default"]
  }, _react["default"].createElement(_reactJss.ThemeProvider, {
    theme: theme
  }, _react["default"].createElement(_AuthorizationContext.Authorization, null, _react["default"].createElement(_MobileContext.MobileApp, null, _react["default"].createElement(_NotificationContext.NotificationApp, null, _react["default"].createElement(_header.HeaderWithAuthorization, null), _react["default"].createElement("div", {
    className: classes.applicationWrapper
  }, _react["default"].createElement("div", {
    className: classes.application
  }, _react["default"].createElement(_ThemeSection["default"], {
    theme: theme,
    onChange: changeTheme
  }), _react["default"].createElement(_ButtonSection["default"], null), _react["default"].createElement(_CheckboxSection["default"], null), _react["default"].createElement(_RadioSection["default"], null), _react["default"].createElement(_LabeledTextSection["default"], null), _react["default"].createElement(_InputSection["default"], null), _react["default"].createElement(_TextAreaSection["default"], null), _react["default"].createElement(_SelectSection["default"], null), _react["default"].createElement(_AvatarSection["default"], null), _react["default"].createElement(_TabsSection["default"], null), _react["default"].createElement(_NotificationSection["default"], null), _react["default"].createElement(_DatePickerSection["default"], null))))))));
};

ApplicationComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  settings: _propTypes["default"].object
};

var _default = (0, _reactJss["default"])(_ApplicationStyle["default"])(ApplicationComponent);

exports["default"] = _default;