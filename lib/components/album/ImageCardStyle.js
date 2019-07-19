"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      width: '200px',
      height: '200px',
      objectFit: 'cover',
      borderRadius: theme.borderRadius,
      cursor: 'pointer',
      border: theme.border,
      borderColor: 'transparent',
      transition: '100ms border-color linear',
      '&:hover': {
        border: theme.border,
        borderColor: theme.brandPrimaryColor
      }
    }
  };
};

exports["default"] = _default;