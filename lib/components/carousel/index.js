"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Legend", {
  enumerable: true,
  get: function get() {
    return _LegendComponent["default"];
  }
});
Object.defineProperty(exports, "Slide", {
  enumerable: true,
  get: function get() {
    return _SlideComponent["default"];
  }
});
exports["default"] = void 0;

var _CarouselComponent = _interopRequireDefault(require("./CarouselComponent"));

var _LegendComponent = _interopRequireDefault(require("./LegendComponent"));

var _SlideComponent = _interopRequireDefault(require("./SlideComponent"));

var _default = _CarouselComponent["default"];
exports["default"] = _default;