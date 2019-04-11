"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _LabelComponentStyle = _interopRequireDefault(require("./LabelComponentStyle"));

var LabelComponent = function LabelComponent(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      value = _ref.value,
      type = _ref.type;
  return _react["default"].createElement("div", {
    className: "".concat(classes.root, " ").concat(type, " ").concat(className)
  }, value);
};

LabelComponent.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  value: _propTypes["default"].string,
  type: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_LabelComponentStyle["default"])(LabelComponent);

exports["default"] = _default;