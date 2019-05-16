"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EdgeStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _Utils = require("../../../services/Utils");

var EdgeStyle = function EdgeStyle(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    chevron: {
      width: '15px',
      height: '15px',
      margin: '0 0'
    },
    chevron1: {
      '&.success.current': {
        color: theme.brandSuccessLightColor,
        animation: 'chevron1Success 1s linear infinite'
      },
      '&.error.current': {
        color: theme.brandErrorLightColor
      },
      '&.success.past': {
        color: theme.brandDarkGrayColor
      },
      '&.error.past': {
        color: theme.brandDarkGrayColor
      },
      '&.success.future': {
        color: theme.brandLightGrayColor
      },
      '&.error.future': {
        color: theme.brandLightGrayColor
      }
    },
    chevron2: {
      '&.success.current': {
        color: theme.brandSuccessLightColor,
        animation: 'chevron2Success 1s linear infinite'
      },
      '&.error.current': {
        color: theme.brandErrorLightColor
      },
      '&.success.past': {
        color: theme.brandDarkGrayColor
      },
      '&.error.past': {
        color: theme.brandDarkGrayColor
      },
      '&.success.future': {
        color: theme.brandLightGrayColor
      },
      '&.error.future': {
        color: theme.brandLightGrayColor
      }
    },
    chevron3: {
      '&.success.current': {
        color: theme.brandSuccessLightColor,
        animation: 'chevron3Success 1s linear infinite'
      },
      '&.error.current': {
        color: theme.brandErrorLightColor
      },
      '&.success.past': {
        color: theme.brandDarkGrayColor
      },
      '&.error.past': {
        color: theme.brandDarkGrayColor
      },
      '&.success.future': {
        color: theme.brandLightGrayColor
      },
      '&.error.future': {
        color: theme.brandLightGrayColor
      }
    },
    chevron4: {
      '&.success.current': {
        color: theme.brandSuccessLightColor,
        animation: 'chevron4Success 1s linear infinite'
      },
      '&.error.current': {
        color: theme.brandErrorLightColor
      },
      '&.success.past': {
        color: theme.brandDarkGrayColor
      },
      '&.error.past': {
        color: theme.brandDarkGrayColor
      },
      '&.success.future': {
        color: theme.brandLightGrayColor
      },
      '&.error.future': {
        color: theme.brandLightGrayColor
      }
    },
    chevron5: {
      '&.success.current': {
        color: theme.brandSuccessLightColor,
        animation: 'chevron5Success 1s linear infinite'
      },
      '&.error.current': {
        color: theme.brandErrorLightColor
      },
      '&.success.past': {
        color: theme.brandDarkGrayColor
      },
      '&.error.past': {
        color: theme.brandDarkGrayColor
      },
      '&.success.future': {
        color: theme.brandLightGrayColor
      },
      '&.error.future': {
        color: theme.brandLightGrayColor
      }
    },
    '@global': {
      '@keyframes chevron1Success': {
        '0%': {
          color: theme.brandSuccessLightColor
        },
        '25%': {
          color: theme.brandSuccessDarkColor
        },
        '50%': {
          color: 'rgba(255, 255, 255, 0)'
        }
      },
      '@keyframes chevron2Success': {
        '10%': {
          color: theme.brandSuccessLightColor
        },
        '35%': {
          color: theme.brandSuccessDarkColor
        },
        '60%': {
          color: 'rgba(255, 255, 255, 0)'
        }
      },
      '@keyframes chevron3Success': {
        '20%': {
          color: theme.brandSuccessLightColor
        },
        '45%': {
          color: theme.brandSuccessDarkColor
        },
        '70%': {
          color: 'rgba(255, 255, 255, 0)'
        }
      },
      '@keyframes chevron4Success': {
        '30%': {
          color: theme.brandSuccessLightColor
        },
        '55%': {
          color: theme.brandSuccessDarkColor
        },
        '80%': {
          color: 'rgba(255, 255, 255, 0)'
        }
      },
      '@keyframes chevron5Success': {
        '40%': {
          color: theme.brandSuccessLightColor
        },
        '75%': {
          color: theme.brandSuccessDarkColor
        },
        '100%': {
          color: 'rgba(255, 255, 255, 0)'
        }
      }
    }
  };
};

exports.EdgeStyle = EdgeStyle;

var Edge = function Edge(props) {
  var _props$classes = props.classes,
      classes = _props$classes === void 0 ? {} : _props$classes,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$type = props.type,
      type = _props$type === void 0 ? '' : _props$type,
      _props$action = props.action,
      action = _props$action === void 0 ? '' : _props$action;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className, type, action]);
  var chevron1Classes = (0, _Utils.getClassName)([classes.chevron, classes.chevron1, type, action]);
  var chevron2Classes = (0, _Utils.getClassName)([classes.chevron, classes.chevron2, type, action]);
  var chevron3Classes = (0, _Utils.getClassName)([classes.chevron, classes.chevron3, type, action]);
  var chevron4Classes = (0, _Utils.getClassName)([classes.chevron, classes.chevron4, type, action]);
  var chevron5Classes = (0, _Utils.getClassName)([classes.chevron, classes.chevron5, type, action]);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: chevron1Classes,
    icon: 'chevron-right'
  }), _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: chevron2Classes,
    icon: 'chevron-right'
  }), _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: chevron3Classes,
    icon: 'chevron-right'
  }), _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: chevron4Classes,
    icon: 'chevron-right'
  }), _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: chevron5Classes,
    icon: 'chevron-right'
  }));
};

Edge.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  action: _propTypes["default"].oneOf(['active', 'past', 'future']),
  type: _propTypes["default"].oneOf(['success', 'error'])
};

var _default = (0, _reactJss["default"])(EdgeStyle)(Edge);

exports["default"] = _default;