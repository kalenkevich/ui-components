"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _InputComponentStyle = require("../input/InputComponentStyle");

var _theme = require("../../theme");

var _default = function _default(theme) {
  return {
    root: {
      display: 'flex',
      position: 'relative'
    },
    rootWrapper: {
      display: 'flex',
      flexDirection: 'column'
    },
    valueOption: {
      display: 'flex',
      alignItems: 'center',
      border: theme.border,
      borderRadius: theme.borderRadius,
      fontSize: theme.controlFontSize,
      fontWeight: theme.controlFontWeight,
      height: theme.controlHeight,
      boxSizing: 'border-box',
      paddingLeft: '8px',
      width: '300px',
      cursor: 'pointer',
      '&.disabled': {
        cursor: 'default',
        color: theme.brandDarkGrayColor,
        backgroundColor: theme.brandLightGrayColor
      },
      '&.success': {
        color: theme.brandSuccessLightColor,
        borderColor: theme.brandSuccessLightColor
      },
      '&.error': {
        color: theme.brandErrorLightColor,
        borderColor: theme.brandErrorLightColor
      },
      '&.placeholder': {
        color: theme.brandDarkGrayColor
      }
    },
    options: {
      position: 'absolute',
      top: "calc(".concat(theme.controlHeight, " + 3px)"),
      left: '0',
      width: 'calc(100% - 2px)',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '240px',
      border: theme.border,
      borderRadius: theme.borderRadius,
      backgroundColor: '#FFFFFF',
      overflow: 'auto',
      zIndex: '1',
      boxShadow: theme.boxShadow,
      '&::-webkit-scrollbar ': {
        width: '6px'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: _theme.brandPrimaryColor
      }
    },
    option: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '8px 10px',
      cursor: 'pointer',
      transition: theme.backgroundColorTransition,
      '&:hover': {
        backgroundColor: theme.brandPrimaryColor
      }
    },
    icon: {
      position: 'absolute',
      right: '10px',
      top: '8px',
      cursor: 'pointer',
      transition: 'transform linear 100ms',
      color: theme.brandDarkGrayColor,
      '&.up': {
        transform: 'rotateX(180deg)'
      }
    },
    backdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: '1'
    },
    label: (0, _InputComponentStyle.controlLabel)(theme)
  };
};

exports["default"] = _default;