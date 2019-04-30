"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionRow = exports.SectionItemStyle = exports.Section = exports.SectionStyles = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var SectionStyles = function SectionStyles(theme) {
  return {
    root: {
      border: theme.border,
      borderRadius: theme.borderRadius,
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      margin: '10px'
    },
    title: {
      margin: '10px 0',
      fontSize: '24px'
    },
    children: {
      flexDirection: 'column'
    }
  };
};

exports.SectionStyles = SectionStyles;

var SectionComponent = function SectionComponent(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      title = _ref.title;
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement("div", {
    className: classes.title
  }, title), _react["default"].createElement("div", {
    className: classes.children
  }, children));
};

SectionComponent.propTypes = {
  classes: _propTypes["default"].object,
  children: _propTypes["default"].node,
  title: _propTypes["default"].string
};
var Section = (0, _reactJss["default"])(SectionStyles)(SectionComponent);
exports.Section = Section;

var SectionItemStyle = function SectionItemStyle(theme) {
  return {
    root: {
      width: '100%',
      height: '100%',
      padding: '5px 0',
      fontWeight: theme.controlFontWeight,
      borderBottom: theme.border,
      '&:last-of-type': {
        borderBottom: 'none'
      }
    },
    title: {
      marginTop: '5px',
      fontSize: '18px'
    },
    children: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      height: '100%',
      '& > *': {
        margin: '10px 10px 0 0',
        '&:first-of-type': {
          marginLeft: '0'
        }
      }
    }
  };
};

exports.SectionItemStyle = SectionItemStyle;

var SectionRowComponent = function SectionRowComponent(_ref2) {
  var classes = _ref2.classes,
      children = _ref2.children,
      title = _ref2.title;
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement("div", {
    className: classes.title
  }, title), _react["default"].createElement("div", {
    className: classes.children
  }, children));
};

SectionRowComponent.propTypes = {
  classes: _propTypes["default"].object,
  title: _propTypes["default"].string,
  children: _propTypes["default"].node
};
var SectionRow = (0, _reactJss["default"])(SectionItemStyle)(SectionRowComponent);
exports.SectionRow = SectionRow;