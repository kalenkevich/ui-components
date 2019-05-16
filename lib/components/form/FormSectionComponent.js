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

var _FormSectionStyles = _interopRequireDefault(require("./FormSectionStyles"));

var FormSection = function FormSection(props) {
  var classes = props.classes,
      className = props.className,
      children = props.children,
      title = props.title,
      _props$size = props.size,
      size = _props$size === void 0 ? 'full' : _props$size;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className, "size-".concat(size)]);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, title ? _react["default"].createElement("div", {
    className: classes.title
  }, title) : null, _react["default"].createElement("div", {
    className: classes.children
  }, children));
};

FormSection.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  title: _propTypes["default"].string,
  children: _propTypes["default"].node,
  size: _propTypes["default"].oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'full', 'half'])
};

var _default = (0, _reactJss["default"])(_FormSectionStyles["default"])(FormSection);

exports["default"] = _default;