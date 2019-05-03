"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '8px 10px',
      cursor: 'pointer',
      transition: theme.backgroundColorTransition,
      '&:hover': {
        backgroundColor: theme.brandPrimaryColor
      },
      '&.disabled': {
        cursor: 'initial',
        backgroundColor: theme.brandLightGrayColor,
        '&:hover': {
          backgroundColor: theme.brandLightGrayColor
        }
      }
    }
  };
};

exports["default"] = _default;