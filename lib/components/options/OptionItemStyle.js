"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _ButtonStyle = require("../button/ButtonStyle");

var _default = function _default(theme) {
  return {
    root: {
      listStyle: 'none'
    },
    label: (0, _objectSpread2["default"])({
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'baseline',
      padding: '8px 10px',
      cursor: 'pointer',
      transition: theme.backgroundColorTransition,
      outline: 'none',
      color: theme.fontColor,
      textDecoration: 'none',
      fontWeight: theme.fontWeight
    }, (0, _ButtonStyle.getBehaviourClasses)(theme), {
      '&:focus': {
        border: "1px solid ".concat(theme.brandPrimaryColor),
        borderRadius: theme.borderRadius,
        padding: '7px 9px'
      },
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
      '&.primary': {
        backgroundColor: 'transparent'
      },
      '&.primary:hover': {
        color: theme.buttonTextColor,
        backgroundColor: theme.brandPrimaryColor
      },
      '&.secondary': {
        backgroundColor: 'transparent'
      },
      '&.secondary:hover': {
        color: theme.buttonTextColor
      },
      '&.success': {
        backgroundColor: '#FFFFFF'
      },
      '&.success:hover': {
        color: theme.buttonTextColor,
        backgroundColor: theme.brandSuccessLightColor
      },
      '&.warning': {
        backgroundColor: '#FFFFFF'
      },
      '&.warning:hover': {
        color: theme.buttonTextColor,
        backgroundColor: theme.brandWarningLightColor
      },
      '&.info': {
        backgroundColor: '#FFFFFF'
      },
      '&.info:hover': {
        color: theme.buttonTextColor,
        backgroundColor: theme.brandInfoLightColor
      },
      '&.danger': {
        backgroundColor: '#FFFFFF'
      },
      '&.danger:hover': {
        color: theme.buttonTextColor,
        backgroundColor: theme.brandErrorLightColor
      }
    }),
    description: {
      fontSize: '14px',
      fontWeight: theme.fontWeight
    }
  };
};

exports["default"] = _default;