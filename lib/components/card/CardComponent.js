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

var _CardStyle = _interopRequireDefault(require("./CardStyle"));

var Card = function Card(props) {
  var classes = props.classes,
      className = props.className,
      children = props.children,
      _props$onKeyPress = props.onKeyPress,
      onKeyPress = _props$onKeyPress === void 0 ? function () {} : _props$onKeyPress;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  return _react["default"].createElement("div", {
    className: rootClasses,
    onKeyPress: onKeyPress
  }, children);
};

Card.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  onKeyPress: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_CardStyle["default"])(Card);

exports["default"] = _default;