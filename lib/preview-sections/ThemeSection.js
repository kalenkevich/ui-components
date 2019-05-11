"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Section = require("./Section");

var _input = _interopRequireDefault(require("../components/input"));

var _ThemeContext = _interopRequireDefault(require("../context/ThemeContext"));

var ThemeSection = function ThemeSection() {
  var _useContext = (0, _react.useContext)(_ThemeContext["default"]),
      theme = _useContext.theme,
      changeTheme = _useContext.changeTheme;

  var onInputChange = function onInputChange(value, themeKey) {
    return changeTheme((0, _defineProperty2["default"])({}, themeKey, value));
  };

  return _react["default"].createElement(_Section.Section, {
    title: 'Theme'
  }, _react["default"].createElement(_Section.SectionRow, null, Object.keys(theme).map(function (key) {
    return _react["default"].createElement(_input["default"], {
      key: key,
      value: theme[key],
      label: key,
      onChange: function onChange(e) {
        return onInputChange(e.target.value, key);
      }
    });
  })));
};

var _default = ThemeSection;
exports["default"] = _default;