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

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _RadioStyle = _interopRequireDefault(require("./RadioStyle"));

var _Utils = require("../../services/Utils");

var Radio = function Radio(props) {
  var classes = props.classes,
      label = props.label,
      group = props.group,
      value = props.value,
      selectedValue = props.selectedValue,
      _onChange = props.onChange,
      disabled = props.disabled,
      className = props.className,
      tooltip = props.tooltip;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isFocus = _useState2[0],
      setFocusState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isHovered = _useState4[0],
      setHoveredState = _useState4[1];

  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var checked = value === selectedValue;
  var classNames = (0, _Utils.getClassName)([classes.radio, checked ? 'checked' : '', isFocus ? 'focus' : '']);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_tooltip["default"], {
    label: tooltip,
    show: isHovered
  }), _react["default"].createElement("div", {
    className: rootClasses,
    onMouseEnter: function onMouseEnter() {
      return setHoveredState(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHoveredState(false);
    }
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
        _onChange(value);
      }
    }
  })));
};

Radio.propTypes = {
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  label: _propTypes["default"].string,
  group: _propTypes["default"].string,
  value: _propTypes["default"].any,
  selectedValue: _propTypes["default"].any,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  tooltip: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_RadioStyle["default"])(Radio);

exports["default"] = _default;