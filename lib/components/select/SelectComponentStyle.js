"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _InputComponentStyle = require("../input/InputComponentStyle");

var _default = function _default(theme) {
  return {
    rootWrapper: {
      display: 'flex',
      flexDirection: 'column'
    },
    root: (0, _objectSpread2["default"])({
      display: 'flex',
      border: theme.border,
      borderRadius: theme.borderRadius,
      height: theme.controlHeight,
      boxSizing: 'border-box'
    }, (0, _InputComponentStyle.getBehaviourClasses)(theme)),
    input: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      fontSize: theme.controlFontSize,
      fontWeight: theme.controlFontWeight,
      height: theme.controlHeight,
      boxSizing: 'border-box',
      padding: '4px 8px 6px 8px',
      width: '270px',
      cursor: 'pointer',
      outline: 'none',
      border: 'none',
      '&:placeholder': {
        color: theme.brandDarkGrayColor
      },
      '&.success': {
        color: theme.brandSuccessLightColor,
        '&:placeholder': {
          color: theme.brandSuccessLightColor
        }
      },
      '&.error': {
        color: theme.brandErrorLightColor,
        '&:placeholder': {
          color: theme.brandErrorLightColor
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
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '240px',
      border: theme.border,
      borderRadius: theme.borderRadius,
      backgroundColor: '#FFFFFF',
      overflow: 'auto',
      zIndex: '1',
      padding: '10px 0',
      boxShadow: theme.boxShadow,
      '&::-webkit-scrollbar ': {
        width: '6px'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.brandPrimaryColor
      },
      margin: '0'
    },
    option: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '8px 10px',
      cursor: 'pointer',
      transition: theme.backgroundColorTransition,
      outline: 'none',
      color: theme.fontColor,
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: theme.brandPrimaryColor
      },
      '&.disabled': {
        cursor: 'initial',
        backgroundColor: theme.brandLightGrayColor,
        '&:hover': {
          backgroundColor: theme.brandLightGrayColor
        }
      },
      '&:focus': {
        border: "1px solid ".concat(theme.brandPrimaryColor),
        borderRadius: theme.borderRadius,
        padding: '7px 9px'
      }
    },
    iconWrapper: {
      width: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      '&.disabled': {
        cursor: 'default',
        backgroundColor: theme.brandLightGrayColor
      }
    },
    label: (0, _InputComponentStyle.controlLabel)(theme)
  };
};

exports["default"] = _default;