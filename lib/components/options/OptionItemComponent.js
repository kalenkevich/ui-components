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

var _OptionItemStyle = _interopRequireDefault(require("./OptionItemStyle"));

var OptionItem = function OptionItem(props) {
  var classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      _props$onClick = props.onClick,
      _onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      label = props.label,
      description = props.description,
      _props$type = props.type,
      type = _props$type === void 0 ? 'secondary' : _props$type;

  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var labelClasses = (0, _Utils.getClassName)([classes.label, disabled ? 'disabled' : '', type]);
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

OptionItem.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  label: _propTypes["default"].string,
  description: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  type: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_OptionItemStyle["default"])(OptionItem);

exports["default"] = _default;