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

var _OptionsStyle = _interopRequireDefault(require("./OptionsStyle"));

var Options = function Options(props) {
  var className = props.className,
      classes = props.classes,
      children = props.children,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      _props$type = props.type,
      type = _props$type === void 0 ? '' : _props$type;
  var rootClasses = (0, _Utils.getClassName)([classes.optionsWrapper, className]);
  var optionsClasses = (0, _Utils.getClassName)([classes.options, type]);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement("ul", {
    className: optionsClasses,
    onClick: onClick
  }, children));
};

Options.propTypes = {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  options: _propTypes["default"].array,
  children: _propTypes["default"].node,
  onClick: _propTypes["default"].func,
  type: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_OptionsStyle["default"])(Options);

exports["default"] = _default;