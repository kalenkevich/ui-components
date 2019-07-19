"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _ExpandableSectionStyle = _interopRequireDefault(require("./ExpandableSectionStyle"));

var _Utils = require("../../services/Utils");

var _UpDownChevron = _interopRequireDefault(require("../UpDownChevron"));

var ExpandableSection = function ExpandableSection(props) {
  var classes = props.classes,
      className = props.className,
      children = props.children,
      childrenClassName = props.childrenClassName,
      expandedContent = props.expandedContent;
  var rootWrapperClasses = (0, _Utils.getClassName)([classes.rootWrapper, className]);
  var childrenClasses = (0, _Utils.getClassName)([classes.children, childrenClassName]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpenState = _useState2[1];

  return _react["default"].createElement("div", {
    className: rootWrapperClasses
  }, _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement("div", {
    className: childrenClasses
  }, children), _react["default"].createElement("div", {
    className: classes.iconWrapper
  }, _react["default"].createElement(_UpDownChevron["default"], {
    up: !isOpen,
    onClick: function onClick() {
      return setOpenState(!isOpen);
    }
  }))), isOpen ? _react["default"].createElement("div", {
    className: classes.expandedContent
  }, typeof expandedContent === 'function' ? expandedContent() : expandedContent) : null);
};

ExpandableSection.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  childrenClassName: _propTypes["default"].string,
  children: _propTypes["default"].node,
  expandedContent: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func])
};

var _default = (0, _reactJss["default"])(_ExpandableSectionStyle["default"])(ExpandableSection);

exports["default"] = _default;