"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  fragment UserFragment on User {\n    id\n    name\n    email\n    phone\n    roles\n    applications\n    avatarUrl\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = (0, _graphqlTag["default"])(_templateObject());

exports["default"] = _default;