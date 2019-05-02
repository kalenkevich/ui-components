"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../../services/Utils");

var _TabsHeaderStyle = _interopRequireDefault(require("./TabsHeaderStyle"));

var TabsHeaderComponent = function TabsHeaderComponent(props) {
  var classes = props.classes,
      children = props.children,
      className = props.className;
  var classNames = (0, _Utils.getClassName)([classes.root, className]);
  return _react["default"].createElement("div", {
    className: classNames
  }, children);
};

TabsHeaderComponent.propTypes = {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  children: _propTypes["default"].node
};

var _default = (0, _reactJss["default"])(_TabsHeaderStyle["default"])(TabsHeaderComponent);

exports["default"] = _default;