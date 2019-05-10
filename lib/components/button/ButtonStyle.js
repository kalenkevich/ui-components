"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getButtonStyles = exports.getBehaviourClasses = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var getBehaviourClasses = function getBehaviourClasses(theme) {
  return {
    outline: 'none',
    '&.mobile': {
      minWidth: 'initial'
    },
    '&.primary': {
      borderColor: theme.brandPrimaryDarkColor,
      backgroundColor: theme.brandPrimaryColor
    },
    '&.primary:hover': {
      backgroundColor: theme.brandPrimaryDarkColor
    },
    '&.secondary': {
      backgroundColor: 'transparent'
    },
    '&.secondary:hover': {
      borderColor: theme.brandPrimaryDarkColor,
      backgroundColor: theme.brandPrimaryColor
    },
    '&.success': {
      borderColor: theme.brandSuccessDarkColor,
      backgroundColor: theme.brandSuccessLightColor
    },
    '&.success:hover': {
      backgroundColor: theme.brandSuccessDarkColor
    },
    '&.warning': {
      borderColor: theme.brandWarningDarkColor,
      backgroundColor: theme.brandWarningLightColor
    },
    '&.warning:hover': {
      backgroundColor: theme.brandWarningDarkColor
    },
    '&.info': {
      borderColor: theme.brandInfoDarkColor,
      backgroundColor: theme.brandInfoLightColor
    },
    '&.info:hover': {
      backgroundColor: theme.brandInfoDarkColor
    },
    '&.danger': {
      borderColor: theme.brandErrorDarkColor,
      backgroundColor: theme.brandErrorLightColor
    },
    '&.danger:hover': {
      backgroundColor: theme.brandErrorDarkColor
    },
    '&:disabled, &:disabled:hover, &.disabled, &.disabled:hover': {
      cursor: 'default',
      color: 'initial',
      borderColor: theme.brandGrayColor,
      backgroundColor: theme.brandLightGrayColor
    },
    '&:focus, &.focus': {
      border: theme.focusBorder,
      boxShadow: theme.focusBoxShadow
    }
  };
};

exports.getBehaviourClasses = getBehaviourClasses;

var getButtonStyles = function getButtonStyles(theme) {
  return {
    minHeight: theme.controlHeight,
    border: theme.border,
    borderRadius: theme.borderRadius,
    cursor: 'pointer',
    transition: theme.backgroundColorTransition,
    minWidth: '80px',
    fontSize: theme.controlFontSize,
    fontWeight: theme.controlFontWeight,
    padding: '5px 7px',
    boxSizing: 'border-box',
    textAlign: 'center'
  };
};

exports.getButtonStyles = getButtonStyles;

var _default = function _default(theme) {
  return {
    root: (0, _objectSpread2["default"])({}, getButtonStyles(theme), getBehaviourClasses(theme))
  };
};

exports["default"] = _default;