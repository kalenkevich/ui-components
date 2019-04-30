"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.row = exports.cell = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var cell = function cell(theme) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 55;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 55;
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    cursor: 'pointer',
    flexShrink: '0',
    borderRadius: theme.borderRadius,
    boxSizing: 'border-box',
    border: "1px solid ".concat(theme.brandLightGrayColor),
    margin: '3px',
    transition: theme.backgroundColorTransition,
    '&.current': {
      border: theme.border,
      borderStyle: 'dashed',
      borderColor: theme.brandPrimaryColor
    },
    '&.selected': {
      border: theme.border,
      backgroundColor: theme.brandPrimaryColor
    },
    '&:hover': {
      border: theme.border,
      backgroundColor: theme.brandPrimaryColor
    }
  };
};

exports.cell = cell;

var row = function row(theme) {
  return {
    display: 'flex',
    width: '100%',
    flexShrink: '0',
    '&:first-of-type': {
      borderTop: 'none'
    }
  };
};

exports.row = row;

var _default = function _default(theme) {
  return {
    root: {
      position: 'relative',
      cursor: 'pointer',
      fontWeight: theme.controlFontWeight,
      '& > input': {
        cursor: 'pointer'
      }
    },
    popup: {
      position: 'absolute',
      top: '65px',
      left: '0',
      display: 'flex',
      flexDirection: 'column',
      border: theme.border,
      borderRadius: theme.borderRadius,
      backgroundColor: 'white',
      zIndex: '1',
      marginBottom: '100px',
      boxShadow: theme.boxShadow
    },
    years: (0, _objectSpread2["default"])({}, row(theme), {
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: theme.border
    }),
    year: cell(theme, 55, 35),
    months: (0, _objectSpread2["default"])({}, row(theme), {
      justifyContent: 'center',
      alignItems: 'center'
    }),
    month: cell(theme, 55, 35),
    weeks: (0, _objectSpread2["default"])({}, row(theme), {
      borderTop: theme.border,
      borderBottom: theme.border,
      color: theme.brandDarkGrayColor
    }),
    weekDay: (0, _objectSpread2["default"])({}, cell(theme, 55, 35), {
      cursor: 'default',
      border: 'none',
      '&:hover': {
        backgroundColor: 'transparent'
      },
      '&.selected': {
        backgroundColor: theme.brandPrimaryColor
      }
    }),
    week: row(theme),
    day: cell(theme),
    actionPanel: (0, _objectSpread2["default"])({}, row(theme), {
      borderTop: theme.border,
      boxSizing: 'border-box',
      justifyContent: 'flex-end',
      padding: '10px'
    }),
    actionPanelButton: {
      marginLeft: '10px',
      '&:first-of-type': {
        marginLeft: '0'
      }
    },
    backdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: '1'
    }
  };
};

exports["default"] = _default;