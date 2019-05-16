"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _card = _interopRequireDefault(require("../card"));

var _Utils = require("../../services/Utils");

var _FormStyles = _interopRequireDefault(require("./FormStyles"));

var Form = function Form(props) {
  var classes = props.classes,
      className = props.className,
      children = props.children,
      title = props.title,
      transparent = props.transparent;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className, transparent ? 'transparent' : '']);
  return _react["default"].createElement(_card["default"], {
    className: rootClasses
  }, title ? _react["default"].createElement("div", {
    className: classes.title
  }, title) : null, _react["default"].createElement("div", {
    className: classes.children
  }, children));
};

Form.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  title: _propTypes["default"].string,
  children: _propTypes["default"].node,
  transparent: _propTypes["default"].bool
};

var _default = (0, _reactJss["default"])(_FormStyles["default"])(Form);

exports["default"] = _default;