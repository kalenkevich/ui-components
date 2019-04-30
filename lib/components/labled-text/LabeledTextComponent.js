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

var LabeledText = function LabeledText(props) {
  var classes = props.classes,
      label = props.label,
      content = props.content;
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(_label["default"], {
    value: label,
    className: classes.label
  }), _react["default"].createElement("div", {
    className: classes.content
  }, content));
};

LabeledText.propTypes = {
  classes: _propTypes["default"].object,
  label: _propTypes["default"].string,
  content: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_LabeledTextStyle["default"])(LabeledText);

exports["default"] = _default;