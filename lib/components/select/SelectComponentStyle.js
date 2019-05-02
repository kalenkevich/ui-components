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
      display: 'flex'
    },
    rootWrapper: {
      display: 'flex',
      flexDirection: 'column'
    },
    valueOption: {
      '&.defaultPreview': {
        display: 'flex',
        alignItems: 'center',
        border: theme.border,
        borderRadius: theme.borderRadius,
        borderRight: 'none',
        borderBottomRightRadius: '0',
        borderTopRightRadius: '0',
        fontSize: theme.controlFontSize,
        fontWeight: theme.controlFontWeight,
        height: theme.controlHeight,
        boxSizing: 'border-box',
        paddingLeft: '8px',
        width: '270px',
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
      }
    },
    optionsWrapper: {
      position: 'relative'
    },
    options: {
      position: 'absolute',
      top: '3px',
      left: '0',
      width: 'calc(100% - 2px)',
      minWidth: '90px',
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
    iconWrapper: {
      width: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderLeft: 'none',
      border: theme.border,
      borderRadius: theme.borderRadius,
      borderBottomLeftRadius: '0',
      borderTopLeftRadius: '0',
      '&.disabled': {
        cursor: 'default',
        backgroundColor: theme.brandLightGrayColor
      },
      '&.success': {
        borderColor: theme.brandSuccessLightColor
      },
      '&.error': {
        borderColor: theme.brandErrorLightColor
      },
      '&.customPreview': {
        border: 'none'
      }
    },
    icon: {
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