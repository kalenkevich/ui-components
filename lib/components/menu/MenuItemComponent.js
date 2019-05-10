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

var _MenuItemStyle = _interopRequireDefault(require("./MenuItemStyle"));

var MenuItemComponent = function MenuItemComponent(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      _props$onClick = props.onClick,
      _onClick = _props$onClick === void 0 ? function () {} : _props$onClick;

  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var labelClasses = (0, _Utils.getClassName)([classes.label]);
  return _react["default"].createElement("li", {
    className: rootClasses
  }, _react["default"].createElement("a", {
    className: labelClasses,
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick();
    }
  }, label));
};

MenuItemComponent.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  label: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_MenuItemStyle["default"])(MenuItemComponent);

exports["default"] = _default;