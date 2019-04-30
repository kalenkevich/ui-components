"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _InputComponentStyle = _interopRequireDefault(require("../input/InputComponentStyle"));

var _default = function _default(theme) {
  var inputStyles = (0, _InputComponentStyle["default"])(theme);
  return (0, _objectSpread2["default"])({}, inputStyles, {
    root: (0, _objectSpread2["default"])({}, inputStyles.root, {
      minHeight: '100px'
    })
  });
};

exports["default"] = _default;