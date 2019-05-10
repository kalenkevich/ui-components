"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _CheckboxStyle = require("../checkbox/CheckboxStyle");

var _default = function _default(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    label: {
      marginLeft: '10px',
      cursor: 'pointer'
    },
    radio: (0, _objectSpread2["default"])({
      position: 'relative',
      width: '20px',
      height: '20px',
      outline: 'none',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        cursor: 'pointer',
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
        border: theme.border,
        borderRadius: '50%'
      },
      '&:after': {
        content: '""',
        top: '3px',
        left: '3px',
        position: 'absolute',
        cursor: 'pointer',
        width: '16px',
        height: '16px',
        transition: theme.backgroundColorTransition,
        backgroundColor: 'white',
        borderRadius: '50%'
      }
    }, (0, _CheckboxStyle.getBehaviourClasses)(theme), {
      '&.focus': (0, _objectSpread2["default"])({}, (0, _CheckboxStyle.getBehaviourClasses)(theme)['&.focus'], {
        borderRadius: '50%'
      })
    })
  };
};

exports["default"] = _default;