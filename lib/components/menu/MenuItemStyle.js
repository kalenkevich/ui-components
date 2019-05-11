"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      listStyle: 'none',
      height: '40px',
      width: '100%'
    },
    label: {
      textDecoration: 'none',
      cursor: 'pointer',
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '20px',
      boxSizing: 'border-box',
      color: theme.fontColor,
      transition: theme.backgroundColorTransition,
      outline: 'none',
      '&:hover, &:focus': {
        backgroundColor: theme.brandPrimaryColor
      }
    }
  };
};

exports["default"] = _default;