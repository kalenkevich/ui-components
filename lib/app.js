"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _ApplicationComponent = _interopRequireDefault(require("./application/ApplicationComponent"));

_reactDom["default"].hydrate(_react["default"].createElement(_reactRouterDom.BrowserRouter, null, _react["default"].createElement(_ApplicationComponent["default"], null)), document.getElementById('root'));