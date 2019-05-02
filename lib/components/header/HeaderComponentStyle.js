"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    headerContainer: {
      fontWeight: theme.controlFontWeight,
      height: '40px',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      border: theme.border,
      borderRadius: theme.borderRadius
    },
    brandTitle: {
      fontSize: '24px',
      textDecoration: 'none',
      color: theme.brandDarkGrayColor
    },
    userPanel: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer'
    },
    userAvatar: {},
    userName: {
      width: '100px',
      marginLeft: '10px'
    },
    actionPanel: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    actionPanelButton: {
      marginRight: '10px',
      '&:last-of-type': {
        marginRight: '0'
      }
    }
  };
};

exports["default"] = _default;