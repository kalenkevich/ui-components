"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Section = require("./Section");

var _button = _interopRequireDefault(require("../components/button"));

var ButtonSection = function ButtonSection() {
  return _react["default"].createElement(_Section.Section, {
    title: 'Buttons'
  }, _react["default"].createElement(_Section.SectionRow, null, _react["default"].createElement(_button["default"], null, "Primary button"), _react["default"].createElement(_button["default"], {
    type: 'secondary'
  }, "Secondary button"), _react["default"].createElement(_button["default"], {
    type: 'success'
  }, "Success button"), _react["default"].createElement(_button["default"], {
    type: 'danger'
  }, "Danger button"), _react["default"].createElement(_button["default"], {
    disabled: true
  }, "Disabled button")));
};

var _default = ButtonSection;
exports["default"] = _default;