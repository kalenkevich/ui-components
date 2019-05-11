"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    rootWrapper: {
      position: 'relative',
      width: '0',
      height: '0',
      visibility: 'hidden',
      margin: '0 !important',
      padding: '0 !important'
    },
    root: {
      visibility: 'visible',
      position: 'absolute',
      bottom: '5px',
      left: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '100px',
      minHeight: '30px',
      padding: '5px',
      fontSize: theme.tooltipFontSize,
      borderRadius: theme.borderRadius,
      backgroundColor: theme.brandLightGrayColor,
      boxShadow: theme.boxShadow,
      '&:before': {
        position: 'absolute',
        content: '""',
        bottom: '-10px',
        width: '0',
        height: '0',
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderTop: "10px solid ".concat(theme.brandLightGrayColor)
      }
    }
  };
};

exports["default"] = _default;