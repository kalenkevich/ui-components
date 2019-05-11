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
      width: '15px',
      height: '15px',
      cursor: 'pointer',
      border: theme.border,
      borderRadius: '50%',
      backgroundColor: theme.brandLightGrayColor,
      transition: theme.backgroundColorTransition,
      outline: 'none',
      '&.selected, &:hover, &:focus': {
        borderColor: theme.brandPrimaryDarkColor,
        backgroundColor: theme.brandPrimaryDarkColor
      },
      marginLeft: '5px',
      '&:first-of-type': {
        marginLeft: '0'
      }
    }
  };
};

exports["default"] = _default;