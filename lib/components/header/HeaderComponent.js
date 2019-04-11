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

var _reactRouterDom = require("react-router-dom");

var _HeaderComponentStyle = _interopRequireDefault(require("./HeaderComponentStyle"));

var _SettingsContext = _interopRequireDefault(require("../../context/SettingsContext"));

var HeaderComponent = function HeaderComponent(props) {
  var classes = props.classes,
      children = props.children;

  var _useContext = (0, _react.useContext)(_SettingsContext["default"]),
      appName = _useContext.appName;

  return _react["default"].createElement("div", {
    className: classes.headerContainer
  }, _react["default"].createElement(_reactRouterDom.Link, {
    className: classes.brandTitle,
    to: "/"
  }, appName), children);
};

HeaderComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].node
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactJss["default"])(_HeaderComponentStyle["default"])(HeaderComponent));

exports["default"] = _default;