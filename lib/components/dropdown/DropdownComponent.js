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

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _DropdownComponentStyle = _interopRequireDefault(require("./DropdownComponentStyle"));

var _Utils = require("../../services/Utils");

var _Backdrop = _interopRequireDefault(require("../Backdrop"));

var Dropdown = function Dropdown(props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      children = props.children,
      _props$type = props.type,
      type = _props$type === void 0 ? 'secondary' : _props$type,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$success = props.success,
      success = _props$success === void 0 ? false : _props$success,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      _props$separate = props.separate,
      separate = _props$separate === void 0 ? false : _props$separate,
      _props$onClick = props.onClick,
      _onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? '' : _props$tooltip;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpenState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isFocus = _useState4[0],
      setFocusState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isHovered = _useState6[0],
      setHoveredState = _useState6[1];

  var behaviourClasses = [error ? ' error' : '', success ? 'success' : '', disabled ? 'disabled' : '', separate ? 'separate' : 'non-separate', isFocus ? 'focus' : ''];
  var rootClasses = (0, _Utils.getClassName)([classes.root, type].concat(behaviourClasses));
  var iconWrapperClasses = (0, _Utils.getClassName)([classes.iconWrapper, separate ? 'separate' : 'non-separate']);
  var iconClasses = (0, _Utils.getClassName)([classes.icon, disabled ? 'disabled' : '', isOpen ? 'down' : 'up']);
  var rootWrapperClasses = (0, _Utils.getClassName)([classes.rootWrapper, className]);

  var openOptions = function openOptions() {
    if (!disabled) {
      setOpenState(true);
    }
  };

  var closeOptions = function closeOptions() {
    setOpenState(false);
    setHoveredState(false);
  };

  return _react["default"].createElement("div", {
    className: rootWrapperClasses
  }, _react["default"].createElement(_tooltip["default"], {
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
  }, _react["default"].createElement("button", {
    type: type,
    disabled: disabled,
    className: classes.button,
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
    onClick: function onClick(e) {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      if (!separate) {
        setOpenState(!isOpen);
      }

      _onClick();
    }
  }, label), _react["default"].createElement("div", {
    className: iconWrapperClasses,
    onClick: openOptions
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: iconClasses,
    icon: 'chevron-up'
  }))), _react["default"].createElement("div", {
    className: classes.optionsWrapper
  }, !disabled && isOpen ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Backdrop["default"], {
    onClick: closeOptions
  }), _react["default"].createElement("ul", {
    className: classes.options,
    onClick: closeOptions
  }, children)) : null));
};

Dropdown.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].node,
  type: _propTypes["default"].string,
  label: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  success: _propTypes["default"].bool,
  separate: _propTypes["default"].bool,
  tooltip: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_DropdownComponentStyle["default"])(Dropdown);

exports["default"] = _default;