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
    root: {
      display: 'flex'
    },
    rootWrapper: {
      display: 'flex',
      flexDirection: 'column'
    },
    button: {
      borderRight: 'none',
      borderBottomRightRadius: '0',
      borderTopRightRadius: '0'
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
      padding: '10px 0',
      boxShadow: theme.boxShadow,
      '&::-webkit-scrollbar ': {
        width: '6px'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: _theme.brandPrimaryColor
      }
    },
    iconWrapper: (0, _objectSpread2["default"])({
      width: '30px',
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      border: theme.border,
      borderRadius: theme.borderRadius,
      borderBottomLeftRadius: '0',
      borderTopLeftRadius: '0',
      '&.non-separate': {
        borderLeft: 'none'
      },
      '&.disabled': {
        cursor: 'default'
      }
    }, (0, _ButtonStyle.getBehaviourClasses)(theme)),
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
    },
    backdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: '1'
    }
  };
};

exports["default"] = _default;