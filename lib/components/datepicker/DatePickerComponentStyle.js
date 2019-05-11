"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.row = exports.cell = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var cell = function cell(theme) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 37;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 37;
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
    margin: '3px',
    transition: theme.backgroundColorTransition,
    '&.current': {
      border: theme.border,
      borderColor: theme.brandPrimaryDarkColor,
      borderStyle: 'dashed'
    },
    '&.selected': {
      border: theme.border,
      borderColor: theme.brandPrimaryDarkColor,
      backgroundColor: theme.brandPrimaryColor
    },
    '&:hover': {
      border: theme.border,
      borderColor: theme.brandPrimaryDarkColor,
      backgroundColor: theme.brandPrimaryColor
    },
    '&.current.selected': {
      border: 'none'
    }
  };
};

exports.cell = cell;

var row = function row() {
  return {
    display: 'flex',
    width: '100%',
    flexShrink: '0',
    cursor: 'default',
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
      boxShadow: theme.boxShadow,
      minWidth: '300px'
    },
    years: (0, _objectSpread2["default"])({}, row(theme), {
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: theme.border
    }),
    year: cell(theme),
    months: (0, _objectSpread2["default"])({}, row(theme), {
      justifyContent: 'center',
      alignItems: 'center',
      padding: '3px 0'
    }),
    month: (0, _objectSpread2["default"])({}, cell(theme)),
    weekLegend: (0, _objectSpread2["default"])({}, row(theme), {
      cursor: 'default',
      justifyContent: 'center',
      borderTop: theme.border,
      borderBottom: theme.border,
      color: theme.brandDarkGrayColor
    }),
    weekDay: (0, _objectSpread2["default"])({}, cell(theme), {
      justifyContent: 'center',
      cursor: 'default',
      border: 'none',
      '&:hover': {
        backgroundColor: 'transparent'
      },
      '&.selected': {
        '&:hover': {
          backgroundColor: theme.brandPrimaryColor
        },
        backgroundColor: theme.brandPrimaryColor
      }
    }),
    weeks: {
      padding: '3px 0'
    },
    week: (0, _objectSpread2["default"])({}, row(theme), {
      justifyContent: 'center'
    }),
    day: (0, _objectSpread2["default"])({}, cell(theme), {
      '&.another-month': {
        backgroundColor: theme.brandLightGrayColor,
        cursor: 'default',
        '&:hover': {
          borderColor: theme.brandLightGrayColor,
          backgroundColor: theme.brandLightGrayColor
        }
      }
    }),
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
    }
  };
};

exports["default"] = _default;