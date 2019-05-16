"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      width: '100%',
      flexBasis: '100%',
      padding: '5px 0',
      backgroundColor: 'white',
      position: 'relative',
      fontWeight: theme.controlFontWeight,
      borderTop: theme.border
    },
    children: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      width: '100%',
      '& > *': {
        margin: '10px 10px 0 0',
        '&:first-of-type': {
          marginLeft: '0'
        }
      }
    }
  };
};

exports["default"] = _default;