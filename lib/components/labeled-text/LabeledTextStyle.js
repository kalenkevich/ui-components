"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      outline: 'none',
      padding: '5px',
      boxSizing: 'border-box',
      border: '1px solid transparent',
      '&:focus': {
        border: theme.focusBorder,
        boxShadow: theme.focusBoxShadow
      }
    },
    label: {
      color: theme.brandDarkGrayColor
    },
    context: {
      paddingTop: '4px'
    }
  };
};

exports["default"] = _default;