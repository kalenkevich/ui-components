"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactRouterDom = require("react-router-dom");

var _HeaderComponentStyle = _interopRequireDefault(require("./HeaderComponentStyle"));

var _menu = _interopRequireDefault(require("../menu"));

var _Utils = require("../../services/Utils");

var HeaderComponent = function HeaderComponent(props) {
  var classes = props.classes,
      children = props.children,
      appName = props.appName,
      className = props.className,
      menu = props.menu;
  var rootClasses = (0, _Utils.getClassName)([classes.headerContainer, className]);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement(_menu["default"], {
    label: appName
  }, menu), children);
};

HeaderComponent.propTypes = {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].node,
  menu: _propTypes["default"].node,
  appName: _propTypes["default"].string
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactJss["default"])(_HeaderComponentStyle["default"])(HeaderComponent));

exports["default"] = _default;