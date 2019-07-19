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