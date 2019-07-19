"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Section = require("./Section");

var _dropdown = _interopRequireDefault(require("../components/dropdown"));

var _options = require("../components/options");

var DropdownSection = function DropdownSection() {
  return _react["default"].createElement(_Section.Section, {
    title: 'Dropdowns'
  }, _react["default"].createElement(_Section.SectionRow, null, _react["default"].createElement(_dropdown["default"], {
    type: 'primary',
    label: 'Primary Dropdown'
  }, _react["default"].createElement(_options.OptionItem, {
    label: "First action",
    type: 'primary'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action",
    type: 'primary'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Third action",
    type: 'primary'
  })), _react["default"].createElement(_dropdown["default"], {
    type: 'secondary',
    label: 'Secondary Dropdown'
  }, _react["default"].createElement(_options.OptionItem, {
    label: "First action",
    type: 'secondary'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action",
    type: 'secondary'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Third action",
    type: 'secondary'
  })), _react["default"].createElement(_dropdown["default"], {
    type: 'success',
    label: 'Success Dropdown'
  }, _react["default"].createElement(_options.OptionItem, {
    label: "First action",
    type: 'success'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action",
    type: 'success'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Third action",
    type: 'success'
  })), _react["default"].createElement(_dropdown["default"], {
    type: 'info',
    label: 'Info Dropdown'
  }, _react["default"].createElement(_options.OptionItem, {
    label: "First action",
    type: 'info'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action",
    type: 'info'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Third action",
    type: 'info'
  })), _react["default"].createElement(_dropdown["default"], {
    type: 'warning',
    label: 'Warning Dropdown'
  }, _react["default"].createElement(_options.OptionItem, {
    label: "First action",
    type: 'warning'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action",
    type: 'warning'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Third action",
    type: 'warning'
  })), _react["default"].createElement(_dropdown["default"], {
    type: 'danger',
    label: 'Danger Dropdown'
  }, _react["default"].createElement(_options.OptionItem, {
    label: "First action",
    type: 'danger'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action",
    type: 'danger'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Third action",
    type: 'danger'
  })), _react["default"].createElement(_dropdown["default"], {
    type: 'secondary',
    label: 'Disabled Dropdown',
    disabled: true
  }, _react["default"].createElement(_options.OptionItem, {
    label: "First action",
    type: 'secondary'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action",
    type: 'secondary'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Third action",
    type: 'secondary'
  })), _react["default"].createElement(_dropdown["default"], {
    type: 'secondary',
    label: 'Dropdown With Disabled options'
  }, _react["default"].createElement(_options.OptionItem, {
    disabled: true,
    label: "First action",
    type: 'secondary'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action",
    type: 'secondary'
  }), _react["default"].createElement(_options.OptionItem, {
    disabled: true,
    label: "Third action",
    type: 'secondary'
  })), _react["default"].createElement(_dropdown["default"], {
    type: 'secondary',
    label: 'Separate Dropdown',
    separate: true
  }, _react["default"].createElement(_options.OptionItem, {
    label: "First action",
    type: 'secondary'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action",
    type: 'secondary'
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Third action",
    type: 'secondary'
  })), _react["default"].createElement(_dropdown["default"], {
    type: 'secondary',
    label: 'Dropdown with option description'
  }, _react["default"].createElement(_options.OptionItem, {
    label: "First action",
    description: "First action description"
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action",
    description: "Second action description"
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Third action",
    description: "Third action description"
  })), _react["default"].createElement(_dropdown["default"], {
    type: 'secondary',
    label: 'Dropdown with separator'
  }, _react["default"].createElement(_options.OptionItem, {
    label: "First action",
    description: "First action description"
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action",
    description: "Second action description"
  }), _react["default"].createElement(_options.OptionItemSeparator, null), _react["default"].createElement(_options.OptionItem, {
    label: "Third action",
    description: "Third action description"
  })), _react["default"].createElement(_dropdown["default"], {
    type: 'secondary',
    label: 'Dropdown with tooltip',
    tooltip: "Tooltip text here"
  }, _react["default"].createElement(_options.OptionItem, {
    label: "First action"
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Second action"
  }), _react["default"].createElement(_options.OptionItem, {
    label: "Third action"
  }))));
};

var _default = DropdownSection;
exports["default"] = _default;