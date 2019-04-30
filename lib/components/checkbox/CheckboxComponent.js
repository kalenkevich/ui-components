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

var _Utils = require("../../services/Utils");

var _CheckboxStyle = _interopRequireDefault(require("./CheckboxStyle"));

var Checkbox = function Checkbox(props) {
  var classes = props.classes,
      label = props.label,
      checked = props.checked,
      _onChange = props.onChange,
      disabled = props.disabled;
  var classNames = (0, _Utils.getClassName)([classes.checkbox, checked ? 'checked' : '']);
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement("input", {
    disabled: disabled,
    className: classNames,
    type: "checkbox",
    value: checked,
    onChange: function onChange() {
      if (!disabled) {
        _onChange(!checked);
      }
    }
  }), _react["default"].createElement(_label["default"], {
    disabled: disabled,
    className: classes.label,
    value: label,
    onClick: function onClick() {
      if (!disabled) {
        _onChange(!checked);
      }
    }
  }));
};

Checkbox.propTypes = {
  classes: _propTypes["default"].object,
  label: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_CheckboxStyle["default"])(Checkbox);

exports["default"] = _default;