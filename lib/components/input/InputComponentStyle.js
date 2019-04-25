"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.controlLabel = void 0;

var controlLabel = function controlLabel(theme) {
  return {
    color: theme.brandDarkGrayColor,
    fontSize: theme.controlFontColor,
    marginBottom: '5px',
    '&.success': {
      color: theme.brandSuccessDarkColor
    },
    '&.error': {
      color: theme.brandErrorDarkColor
    }
  };
};

exports.controlLabel = controlLabel;

var _default = function _default(theme) {
  return {
    root: {
      height: theme.controlHeight,
      border: theme.border,
      borderRadius: theme.borderRadius,
      backgroundColor: 'transparent',
      outline: 'none',
      width: '300px',
      padding: '8px',
      paddingTop: '4px',
      fontSize: theme.controlFontColor,
      boxSizing: 'border-box',
      '&:disabled': {
        color: 'initial',
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
      }
    },
    rootWrapper: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: controlLabel(theme)
  };
};

exports["default"] = _default;