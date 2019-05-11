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

var _TooltipStyle = _interopRequireDefault(require("./TooltipStyle"));

var TooltipComponent = function TooltipComponent(props) {
  if (!props.show || !props.label) {
    return null;
  }

  var classes = props.classes,
      label = props.label,
      className = props.className;
  var rootWrapperClasses = (0, _Utils.getClassName)([classes.rootWrapper, className]);
  return _react["default"].createElement("div", {
    className: rootWrapperClasses
  }, _react["default"].createElement("div", {
    className: classes.root
  }, label));
};

TooltipComponent.propTypes = {
  classes: _propTypes["default"].object,
  label: _propTypes["default"].string,
  className: _propTypes["default"].string,
  show: _propTypes["default"].bool
};

var _default = (0, _reactJss["default"])(_TooltipStyle["default"])(TooltipComponent);

exports["default"] = _default;