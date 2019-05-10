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
      disabled = props.disabled,
      _props$onClick = props.onClick,
      _onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      label = props.label,
      description = props.description;

  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var labelClasses = (0, _Utils.getClassName)([classes.label, disabled ? 'disabled' : '']);
  return _react["default"].createElement("li", {
    className: rootClasses,
    tabIndex: "-1"
  }, _react["default"].createElement("a", {
    href: "#",
    className: labelClasses,
    tabIndex: disabled ? '-1' : '0',
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick();
    }
  }, label, description ? _react["default"].createElement("div", {
    className: classes.description
  }, description) : null));
};

DropdownItem.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  label: _propTypes["default"].string,
  description: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_DropdownItemStyle["default"])(DropdownItem);

exports["default"] = _default;