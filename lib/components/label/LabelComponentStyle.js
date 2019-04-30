"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      fontSize: theme.controlFontSize,
      fontWeight: theme.controlFontWeight,
      '&.success': {
        color: theme.brandSuccessDarkColor
      },
      '&.error': {
        color: theme.brandErrorDarkColor
      },
      '&.disabled': {
        cursor: 'default',
        color: theme.brandDarkGrayColor
      }
    }
  };
};

exports["default"] = _default;