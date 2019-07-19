"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      boxSizing: 'border-box',
      border: theme.border,
      borderRadius: theme.borderRadius,
      '&.transparent': {
        border: 'none',
        boxShadow: 'none',
        padding: '0'
      }
    },
    title: {
      margin: '10px 0',
      fontSize: '24px'
    },
    children: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  };
};

exports["default"] = _default;