"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Section = require("./Section");

var _dropdown = _interopRequireWildcard(require("../components/dropdown"));

var DropdownSection = function DropdownSection() {
  return _react["default"].createElement(_Section.Section, {
    title: 'Dropdowns'
  }, _react["default"].createElement(_Section.SectionRow, null, _react["default"].createElement(_dropdown["default"], {
    type: 'primary',
    label: 'Primary Dropdown'
  }, _react["default"].createElement(_dropdown.DropdownItem, null, "First action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Second action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Third action")), _react["default"].createElement(_dropdown["default"], {
    type: 'secondary',
    label: 'Secondary Dropdown'
  }, _react["default"].createElement(_dropdown.DropdownItem, null, "First action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Second action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Third action")), _react["default"].createElement(_dropdown["default"], {
    type: 'success',
    label: 'Success Dropdown'
  }, _react["default"].createElement(_dropdown.DropdownItem, null, "First action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Second action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Third action")), _react["default"].createElement(_dropdown["default"], {
    type: 'info',
    label: 'Info Dropdown'
  }, _react["default"].createElement(_dropdown.DropdownItem, null, "First action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Second action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Third action")), _react["default"].createElement(_dropdown["default"], {
    type: 'warning',
    label: 'Warning Dropdown'
  }, _react["default"].createElement(_dropdown.DropdownItem, null, "First action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Second action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Third action")), _react["default"].createElement(_dropdown["default"], {
    type: 'danger',
    label: 'Danger Dropdown'
  }, _react["default"].createElement(_dropdown.DropdownItem, null, "First action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Second action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Third action")), _react["default"].createElement(_dropdown["default"], {
    type: 'secondary',
    label: 'Disabled Dropdown',
    disabled: true
  }, _react["default"].createElement(_dropdown.DropdownItem, null, "First action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Second action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Third action")), _react["default"].createElement(_dropdown["default"], {
    type: 'secondary',
    label: 'Dropdown With Disabled options'
  }, _react["default"].createElement(_dropdown.DropdownItem, {
    disabled: true
  }, "First action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Second action"), _react["default"].createElement(_dropdown.DropdownItem, {
    disabled: true
  }, "Third action")), _react["default"].createElement(_dropdown["default"], {
    type: 'secondary',
    label: 'Separate Dropdown',
    separate: true
  }, _react["default"].createElement(_dropdown.DropdownItem, null, "First action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Second action"), _react["default"].createElement(_dropdown.DropdownItem, null, "Third action"))));
};

var _default = DropdownSection;
exports["default"] = _default;