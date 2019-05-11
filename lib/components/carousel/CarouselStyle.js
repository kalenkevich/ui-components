"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      width: '100%',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      border: theme.border,
      borderRadius: theme.borderRadius
    }
  };
};

exports["default"] = _default;