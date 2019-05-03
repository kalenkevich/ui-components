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

var _DropdownItemStyle = _interopRequireDefault(require("./DropdownItemStyle"));

var DropdownItem = function DropdownItem(props) {
  var classes = props.classes,
      className = props.className,
      children = props.children,
      disabled = props.disabled,
      onClick = props.onClick;
  var rootClasses = (0, _Utils.getClassName)([classes.root, disabled ? 'disabled' : '', className]);
  return _react["default"].createElement("div", {
    className: rootClasses,
    onClick: onClick
  }, children);
};

DropdownItem.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_DropdownItemStyle["default"])(DropdownItem);

exports["default"] = _default;