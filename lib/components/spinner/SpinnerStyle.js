"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      display: 'inline-block',
      '&:after': {
        content: '" "',
        display: 'block',
        margin: '1px',
        borderRadius: '50%',
        border: "5px solid ".concat(theme.brandPrimaryColor),
        borderColor: "".concat(theme.brandPrimaryColor, " transparent ").concat(theme.brandPrimaryColor, " transparent"),
        animation: 'lds-dual-ring 1.2s linear infinite'
      },
      '&.sm': {
        width: '22px',
        height: '22px',
        '&:after': {
          width: '16px',
          height: '16px',
          borderWidth: '3px'
        }
      },
      '&.md': {
        width: '75px',
        height: '75px',
        '&:after': {
          width: '64px',
          height: '64px',
          borderWidth: '5px'
        }
      },
      '&.lg': {
        width: '150px',
        height: '150px',
        '&:after': {
          width: '128px',
          height: '128px',
          borderWidth: '10px'
        }
      },
      '&.primary': {
        '&:after': {
          borderColor: "".concat(theme.brandPrimaryColor, " transparent ").concat(theme.brandPrimaryColor, " transparent")
        }
      },
      '&.secondary': {
        '&:after': {
          borderColor: "".concat(theme.brandDarkGrayColor, " transparent ").concat(theme.brandDarkGrayColor, " transparent")
        }
      },
      '&.success': {
        '&:after': {
          borderColor: "".concat(theme.brandSuccessDarkColor, " transparent ").concat(theme.brandSuccessDarkColor, " transparent")
        }
      },
      '&.info': {
        '&:after': {
          borderColor: "".concat(theme.brandInfoDarkColor, " transparent ").concat(theme.brandInfoDarkColor, " transparent")
        }
      },
      '&.warning': {
        '&:after': {
          borderColor: "".concat(theme.brandWarningDarkColor, " transparent ").concat(theme.brandWarningDarkColor, " transparent")
        }
      },
      '&.danger': {
        '&:after': {
          borderColor: "".concat(theme.brandErrorDarkColor, " transparent ").concat(theme.brandErrorDarkColor, " transparent")
        }
      }
    },
    '@global': {
      '@keyframes lds-dual-ring': {
        '0%': {
          transform: 'rotate(0deg)'
        },
        '100%': {
          transform: 'rotate(360deg)'
        }
      }
    }
  };
};

exports["default"] = _default;