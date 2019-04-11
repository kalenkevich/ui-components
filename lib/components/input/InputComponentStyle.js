"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      height: '32px',
      border: "1px solid ".concat(theme.brandPrimaryColor),
      borderRadius: theme.borderRadius,
      backgroundColor: 'transparent',
      outline: 'none',
      width: '300px',
      padding: '5px',
      paddingTop: '4px',
      fontSize: '14px',
      boxSizing: 'border-box'
    }
  };
};

exports["default"] = _default;