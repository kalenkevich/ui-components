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

var _FormSectionActionStyle = _interopRequireDefault(require("./FormSectionActionStyle"));

var FormActionSection = function FormActionSection(props) {
  var classes = props.classes,
      className = props.className,
      children = props.children;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement("div", {
    className: classes.children
  }, children));
};

FormActionSection.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};

var _default = (0, _reactJss["default"])(_FormSectionActionStyle["default"])(FormActionSection);

exports["default"] = _default;