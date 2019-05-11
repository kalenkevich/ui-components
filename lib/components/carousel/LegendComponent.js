"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _LegendStyle = _interopRequireDefault(require("./LegendStyle"));

var _Utils = require("../../services/Utils");

var Legend = function Legend(props) {
  var classes = props.classes,
      className = props.className,
      currentSlideIndex = props.currentSlideIndex,
      totalLength = props.totalLength,
      onChange = props.onChange;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  var items = []; // eslint-disable-next-line no-plusplus

  for (var i = 0; i < totalLength; i++) {
    items.push(i);
  }

  return _react["default"].createElement("div", {
    className: rootClasses
  }, items.map(function (index) {
    var itemClasses = (0, _Utils.getClassName)([classes.item, index === currentSlideIndex ? 'selected' : '']);
    return _react["default"].createElement("div", {
      key: index,
      className: itemClasses,
      onClick: function onClick() {
        return onChange(index);
      },
      tabIndex: "0",
      onKeyPress: function onKeyPress(e) {
        if (e.key === 'Enter') {
          onChange(index);
        }
      }
    });
  }));
};

Legend.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  currentSlideIndex: _propTypes["default"].number,
  totalLength: _propTypes["default"].number,
  onChange: _propTypes["default"].func
};

var _default = (0, _reactJss["default"])(_LegendStyle["default"])(Legend);

exports["default"] = _default;