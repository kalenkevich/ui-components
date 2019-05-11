"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      position: 'relative',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      transition: 'backgroundImage 100ms linear'
    },
    prevButton: {
      position: 'absolute',
      left: '0',
      display: 'flex',
      padding: '0 25px',
      height: '100%',
      cursor: 'pointer',
      outline: 'none',
      transition: theme.backgroundColorTransition,
      '&:hover, &:focus': {
        backgroundColor: theme.brandLightGrayColor
      }
    },
    nextButton: {
      position: 'absolute',
      right: '0',
      padding: '0 25px',
      height: '100%',
      cursor: 'pointer',
      transition: theme.backgroundColorTransition,
      outline: 'none',
      '&:hover, &:focus': {
        backgroundColor: theme.brandLightGrayColor
      }
    },
    titleWrapper: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      bottom: '0',
      width: '100%',
      padding: '10px'
    },
    title: {
      fontSize: '28px',
      color: '#FFFFFF'
    },
    description: {
      margin: '10px 0 20px 0',
      fontSize: '18px',
      color: '#FFFFFF'
    }
  };
};

exports["default"] = _default;