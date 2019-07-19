"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _Section = require("./Section");

var _button = _interopRequireDefault(require("../components/button"));

var ButtonSection = function ButtonSection() {
  return _react["default"].createElement(_Section.Section, {
    title: 'Buttons'
  }, _react["default"].createElement(_Section.SectionRow, null, _react["default"].createElement(_button["default"], {
    type: 'primary'
  }, "Primary button"), _react["default"].createElement(_button["default"], {
    type: 'secondary'
  }, "Secondary button"), _react["default"].createElement(_button["default"], {
    type: 'secondary'
  }, "With Icon", _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    style: {
      marginLeft: '5px'
    },
    icon: "user"
  })), _react["default"].createElement(_button["default"], {
    type: 'success'
  }, "Success button"), _react["default"].createElement(_button["default"], {
    type: 'info'
  }, "Info button"), _react["default"].createElement(_button["default"], {
    type: 'warning'
  }, "Warning button"), _react["default"].createElement(_button["default"], {
    type: 'danger'
  }, "Danger button"), _react["default"].createElement(_button["default"], {
    type: 'link'
  }, "Link button"), _react["default"].createElement(_button["default"], {
    type: 'transparent'
  }, "Transparent button"), _react["default"].createElement(_button["default"], {
    disabled: true
  }, "Disabled button"), _react["default"].createElement(_button["default"], {
    tooltip: "Tooltip text here"
  }, "With tooltip"), _react["default"].createElement(_button["default"], {
    spin: true
  }, "Spin button")));
};

var _default = ButtonSection;
exports["default"] = _default;