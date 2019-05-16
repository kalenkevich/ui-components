"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getBehaviourClasses = exports.controlLabel = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var controlLabel = function controlLabel(theme) {
  return {
    color: theme.brandDarkGrayColor,
    fontSize: theme.controlFontSize,
    fontWeight: theme.controlFontWeight,
    marginBottom: '5px'
  };
};

exports.controlLabel = controlLabel;

var getBehaviourClasses = function getBehaviourClasses(theme) {
  return {
    outline: 'none',
    '&:disabled, &.disabled': {
      backgroundColor: theme.brandLightGrayColor
    },
    '&.success': {
      color: theme.brandSuccessLightColor,
      borderColor: theme.brandSuccessLightColor,
      '&:placeholder': {
        color: theme.brandSuccessLightColor
      }
    },
    '&.error': {
      color: theme.brandErrorLightColor,
      borderColor: theme.brandErrorLightColor,
      '&:placeholder': {
        color: theme.brandErrorLightColor
      }
    },
    '&:focus, &.focus': {
      boxShadow: theme.focusBoxShadow
    }
  };
};

exports.getBehaviourClasses = getBehaviourClasses;

var _default = function _default(theme) {
  return {
    rootWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    root: (0, _objectSpread2["default"])({
      height: theme.controlHeight,
      border: theme.border,
      borderRadius: theme.borderRadius,
      backgroundColor: 'transparent',
      outline: 'none',
      width: '100%',
      padding: '6px 8px',
      paddingTop: '4px',
      fontSize: theme.controlFontSize,
      fontWeight: theme.controlFontWeight,
      boxSizing: 'border-box'
    }, getBehaviourClasses(theme)),
    label: controlLabel(theme)
  };
};

exports["default"] = _default;