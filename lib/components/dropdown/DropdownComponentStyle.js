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
      padding: '6px 0 6px 10px',
      width: '100%',
      justifyContent: 'flex-start',
      textAlign: 'left',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      borderRadius: '0',
      color: 'inherit'
    }),
    iconWrapper: {
      width: '30px',
      paddingRight: '5px',
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      '& path': {
        fill: theme.defaultIconColor
      },
      '&.separate': {
        borderLeft: theme.border
      },
      '&.disabled': {
        cursor: 'default'
      }
    }
  };
};

exports["default"] = _default;