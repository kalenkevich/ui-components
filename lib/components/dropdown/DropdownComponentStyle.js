"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _theme = require("../../theme");

var _ButtonStyle = require("../button/ButtonStyle");

var _default = function _default(theme) {
  return {
    rootWrapper: {
      display: 'flex',
      flexDirection: 'column'
    },
    root: (0, _objectSpread2["default"])({
      display: 'flex',
      width: '100%',
      border: theme.border,
      borderRadius: theme.borderRadius
    }, (0, _ButtonStyle.getBehaviourClasses)(theme)),
    button: (0, _objectSpread2["default"])({}, (0, _ButtonStyle.getButtonStyles)(theme), {
      width: '100%',
      justifyContent: 'flex-start',
      textAlign: 'left',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      borderRadius: '0'
    }),
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
      padding: '10px 0',
      boxShadow: theme.boxShadow,
      '&::-webkit-scrollbar ': {
        width: '6px'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: _theme.brandPrimaryColor
      },
      margin: 0
    },
    iconWrapper: {
      width: '30px',
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      '&.separate': {
        borderLeft: theme.border
      },
      '&.disabled': {
        cursor: 'default'
      }
    },
    icon: {
      cursor: 'pointer',
      transition: 'transform linear 100ms',
      color: theme.brandDarkGrayColor,
      '&.up': {
        transform: 'rotateX(180deg)'
      },
      '&.disabled': {
        cursor: 'default'
      }
    }
  };
};

exports["default"] = _default;