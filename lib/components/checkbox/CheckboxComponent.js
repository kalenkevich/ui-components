"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _label = _interopRequireDefault(require("../label"));

var _Utils = require("../../services/Utils");

var _CheckboxStyle = _interopRequireDefault(require("./CheckboxStyle"));

var Checkbox = function Checkbox(props) {
  var className = props.className,
      classes = props.classes,
      label = props.label,
      checked = props.checked,
      _onChange = props.onChange,
      disabled = props.disabled;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isFocus = _useState2[0],
      setFocusState = _useState2[1];

  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var classNames = (0, _Utils.getClassName)([classes.checkbox, checked ? 'checked' : '', isFocus ? 'focus' : '']);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement("input", {
    disabled: disabled,
    className: classNames,
    type: "checkbox",
    value: checked,
    onChange: function onChange() {
      if (!disabled) {
        _onChange(!checked);
      }
    },
    onFocus: function onFocus() {
      if (disabled) {
        return;
      }

      setFocusState(true);
    },
    onBlur: function onBlur() {
      if (disabled) {
        return;
      }

      setFocusState(false);
    },
    onKeyPress: function onKeyPress(e) {
      e.preventDefault();

      if (disabled) {
        return;
      }

      if (e.key === 'Enter') {
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
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  label: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_CheckboxStyle["default"])(Checkbox);

exports["default"] = _default;