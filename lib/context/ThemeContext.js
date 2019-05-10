"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThemedApp = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = require("react-jss");

var _theme = _interopRequireDefault(require("../theme"));

var ThemeContext = _react["default"].createContext({
  theme: _theme["default"],
  changeTheme: function changeTheme() {}
});

var ThemedApp = function ThemedApp(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(_theme["default"]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  var changeTheme = function changeTheme(newTheme) {
    setTheme((0, _objectSpread2["default"])({}, theme, newTheme));
  };

  return _react["default"].createElement(ThemeContext.Provider, {
    value: {
      theme: theme,
      changeTheme: changeTheme
    }
  }, _react["default"].createElement(_reactJss.ThemeProvider, {
    theme: theme
  }, children));
};

exports.ThemedApp = ThemedApp;
ThemedApp.propTypes = {
  children: _propTypes["default"].node
};
var _default = ThemeContext;
exports["default"] = _default;