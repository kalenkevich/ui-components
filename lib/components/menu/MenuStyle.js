"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      position: 'fixed',
      width: '320px',
      height: '100%',
      zIndex: '2',
      top: '0',
      left: '0',
      padding: '0',
      paddingTop: '40px',
      margin: '0',
      backgroundColor: '#FFFFFF',
      transition: 'all 100ms ease;',
      opacity: '1',
      '&.opening': {
        width: 0,
        opacity: '0'
      },
      '&.closing': {
        width: 0,
        opacity: '0'
      }
    },
    brandTitle: {
      cursor: 'pointer',
      fontSize: '24px',
      textDecoration: 'none',
      color: theme.brandDarkGrayColor
    },
    closeIcon: {
      position: 'absolute',
      right: '15px',
      top: '10px',
      cursor: 'pointer'
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
  };
};

exports["default"] = _default;