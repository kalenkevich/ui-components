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

var _DropdownComponentStyle = _interopRequireDefault(require("./DropdownComponentStyle"));

var _button = _interopRequireDefault(require("../button"));

var _Utils = require("../../services/Utils");

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
      _onClick = _props$onClick === void 0 ? function () {} : _props$onClick;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpenState = _useState2[1];

  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var buttonClassNames = (0, _Utils.getClassName)([classes.button, error ? ' error' : '', success ? 'success' : '', disabled ? 'disabled' : '', separate ? 'separate' : 'non-separate']);
  var iconWrapperClasses = (0, _Utils.getClassName)([classes.iconWrapper, type, error ? ' error' : '', success ? 'success' : '', disabled ? 'disabled' : '', separate ? 'separate' : 'non-separate']);
  var iconClasses = (0, _Utils.getClassName)([classes.icon, disabled ? 'disabled' : '', isOpen ? 'down' : 'up']);
  return _react["default"].createElement("div", {
    className: classes.rootWrapper
  }, _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement(_button["default"], {
    className: buttonClassNames,
    type: type,
    disabled: disabled,
    onClick: function onClick() {
      if (!disabled && !separate) {
        setOpenState(true);
      }

      _onClick();
    }
  }, label), _react["default"].createElement("div", {
    className: iconWrapperClasses,
    onClick: function onClick() {
      if (!disabled) {
        setOpenState(true);
      }
    }
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: iconClasses,
    icon: 'chevron-up'
  }))), _react["default"].createElement("div", {
    className: classes.optionsWrapper
  }, !disabled && isOpen ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: classes.backdrop,
    onClick: function onClick() {
      return setOpenState(false);
    }
  }), _react["default"].createElement("div", {
    className: classes.options,
    onClick: function onClick() {
      return setOpenState(false);
    }
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
  separate: _propTypes["default"].bool
};

var _default = (0, _reactJss["default"])(_DropdownComponentStyle["default"])(Dropdown);

exports["default"] = _default;