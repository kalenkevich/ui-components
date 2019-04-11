"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      fontSize: '14px',
      '&.error': {
        color: theme.brandErrorColor
      }
    }
  };
};

exports["default"] = _default;