"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      height: theme.controlHeight,
      paddingBottom: '10px',
      transition: 'border linear 100ms',
      borderColor: 'white',
      '&.selected, &:hover': {
        borderBottom: "2px solid ".concat(theme.brandPrimaryColor)
      },
      '&.disabled': {
        cursor: 'default',
        color: theme.brandDarkGrayColor,
        borderColor: theme.brandDarkGrayColor,
        '&:hover': {
          borderBottom: 'none'
        },
        '&.selected': {
          borderBottom: "2px solid ".concat(theme.brandDarkGrayColor)
        }
      }
    },
    mark: {
      position: 'absolute',
      top: '1px',
      right: '0',
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      backgroundColor: theme.brandPrimaryColor
    }
  };
};

exports["default"] = _default;