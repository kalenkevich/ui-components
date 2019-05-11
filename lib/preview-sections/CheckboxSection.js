"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Section = require("./Section");

var _checkbox = _interopRequireDefault(require("../components/checkbox"));

var CheckboxSection = function CheckboxSection() {
  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      checked1 = _useState2[0],
      setCheckedState1 = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      checked2 = _useState4[0],
      setCheckedState2 = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      checked3 = _useState6[0],
      setCheckedState3 = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      checked4 = _useState8[0],
      setCheckedState4 = _useState8[1];

  return _react["default"].createElement(_Section.Section, {
    title: 'Checkboxes'
  }, _react["default"].createElement(_Section.SectionRow, null, _react["default"].createElement("div", null, _react["default"].createElement(_checkbox["default"], {
    checked: checked1,
    onChange: setCheckedState1,
    label: "Checked"
  }), _react["default"].createElement(_checkbox["default"], {
    checked: checked2,
    onChange: setCheckedState2,
    label: "Unchecked"
  }), _react["default"].createElement(_checkbox["default"], {
    checked: checked3,
    onChange: setCheckedState3,
    label: "Disabled",
    disabled: true
  }), _react["default"].createElement(_checkbox["default"], {
    checked: true,
    onChange: setCheckedState3,
    label: "Checked and disabled",
    disabled: true
  }), _react["default"].createElement(_checkbox["default"], {
    checked: checked4,
    onChange: setCheckedState4,
    label: "With tooltip",
    tooltip: "Tooltip text here"
  }))));
};

var _default = CheckboxSection;
exports["default"] = _default;