"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    form: {
      maxWidth: '600px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      boxSizing: 'border-box',
      border: theme.border,
      borderRadius: theme.borderRadius
    },
    formLabel: {
      width: '100%',
      display: 'flex',
      marginBottom: '10px',
      'last-of-type': {
        marginBottom: 'none'
      }
    },
    formField: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '10px',
      'last-of-type': {
        marginBottom: 'none'
      }
    }
  };
};

exports["default"] = _default;