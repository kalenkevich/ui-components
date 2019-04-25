"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SettingsConsumer = exports.SettingsProvider = void 0;

var _react = _interopRequireDefault(require("react"));

var SettingsContext = _react["default"].createContext(null);

var SettingsProvider = SettingsContext.Provider;
exports.SettingsProvider = SettingsProvider;
var SettingsConsumer = SettingsContext.Consumer;
exports.SettingsConsumer = SettingsConsumer;
var _default = SettingsContext;
exports["default"] = _default;