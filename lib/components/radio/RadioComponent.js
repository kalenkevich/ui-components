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

var _RadioStyle = _interopRequireDefault(require("./RadioStyle"));

var _Utils = require("../../services/Utils");

var Radio = function Radio(props) {
  var classes = props.classes,
      label = props.label,
      group = props.group,
      value = props.value,
      selectedValue = props.selectedValue,
      _onChange = props.onChange,
      disabled = props.disabled;
  var checked = value === selectedValue;
  var classNames = (0, _Utils.getClassName)([classes.radio, checked ? 'checked' : '']);
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement("input", {
    disabled: disabled,
    className: classNames,
    type: "radio",
    value: value,
    name: group,
    onChange: function onChange() {
      if (!disabled) {
        _onChange(value);
      }
    }
  }), _react["default"].createElement(_label["default"], {
    disabled: disabled,
    className: classes.label,
    value: label,
    onClick: function onClick() {
      if (!disabled) {
        _onChange(value);
      }
    }
  }));
};

Radio.propTypes = {
  classes: _propTypes["default"].object,
  label: _propTypes["default"].string,
  group: _propTypes["default"].string,
  value: _propTypes["default"].any,
  selectedValue: _propTypes["default"].any,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_RadioStyle["default"])(Radio);

exports["default"] = _default;