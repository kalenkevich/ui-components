"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _label = _interopRequireDefault(require("../label"));

var _LabeledTextStyle = _interopRequireDefault(require("./LabeledTextStyle"));

var _Utils = require("../../services/Utils");

var LabeledText = function LabeledText(props) {
  var classes = props.classes,
      label = props.label,
      content = props.content,
      className = props.className;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  return _react["default"].createElement("div", {
    className: rootClasses,
    tabIndex: "0"
  }, _react["default"].createElement(_label["default"], {
    value: label,
    className: classes.label
  }), _react["default"].createElement("div", {
    className: classes.content
  }, content));
};

LabeledText.propTypes = {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  label: _propTypes["default"].string,
  content: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_LabeledTextStyle["default"])(LabeledText);

exports["default"] = _default;