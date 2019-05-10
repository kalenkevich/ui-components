"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      listStyle: 'none'
    },
    label: {
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
      }
    },
    description: {
      fontSize: '14px'
    }
  };
};

exports["default"] = _default;