"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DropdownItemSeparatorStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var DropdownItemSeparatorStyle = function DropdownItemSeparatorStyle(theme) {
  return {
    root: {
      margin: '10px 0',
      borderTop: theme.border
    }
  };
};

exports.DropdownItemSeparatorStyle = DropdownItemSeparatorStyle;

var OptionItemSeparator = function OptionItemSeparator(_ref) {
  var classes = _ref.classes;
  return _react["default"].createElement("div", {
    className: classes.root
  });
};

OptionItemSeparator.propTypes = {
  classes: _propTypes["default"].object
};

var _default = (0, _reactJss["default"])(DropdownItemSeparatorStyle)(OptionItemSeparator);

exports["default"] = _default;