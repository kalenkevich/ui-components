"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      width: '100%',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    item: {
      width: '30px',
      height: '7px',
      cursor: 'pointer',
      border: theme.border,
      borderRadius: theme.borderRadius,
      backgroundColor: theme.brandLightGrayColor,
      transition: theme.backgroundColorTransition,
      outline: 'none',
      '&.selected, &:hover, &:focus': {
        borderColor: theme.brandDarkGrayColor,
        backgroundColor: theme.brandDarkGrayColor
      },
      marginLeft: '5px',
      '&:first-of-type': {
        marginLeft: '0'
      }
    }
  };
};

exports["default"] = _default;