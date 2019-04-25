"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassName = void 0;

/* eslint-disable import/prefer-default-export */
var getClassName = function getClassName(classNames) {
  return (classNames || []).reduce(function (result, className) {
    if (!className) {
      return result;
    }

    return "".concat(result, " ").concat(className);
  }, '');
};

exports.getClassName = getClassName;