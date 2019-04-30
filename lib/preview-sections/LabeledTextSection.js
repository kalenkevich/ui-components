"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.longText = exports.shortText = void 0;

var _react = _interopRequireDefault(require("react"));

var _Section = require("./Section");

var _labledText = _interopRequireDefault(require("../components/labled-text"));

var shortText = {
  label: 'Short text',
  content: 'Some content'
};
exports.shortText = shortText;
var longText = {
  label: 'Long text',
  // eslint-disable-next-line max-len
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nisl in metus eleifend malesuada vel ac nulla. Aliquam nec elit ut purus ullamcorper dignissim a eu metus. Phasellus eu urna iaculis, sagittis augue at, vulputate ipsum. Fusce convallis laoreet diam, vel placerat sapien sagittis ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque semper arcu eu scelerisque fermentum. Sed ut dictum odio. Donec tincidunt arcu quis ex luctus, elementum accumsan eros imperdiet. Integer elementum consectetur magna. Sed facilisis lorem vel blandit efficitur. Nunc pellentesque leo tortor, id porttitor massa tincidunt at. Mauris purus augue, porttitor in porta et, volutpat at elit. Etiam pharetra, magna laoreet lobortis mattis, odio lectus cursus risus, et semper nisi purus at elit. Mauris pretium congue tellus, ut fringilla felis.'
};
exports.longText = longText;

var LabeledTextSection = function LabeledTextSection() {
  return _react["default"].createElement(_Section.Section, {
    title: 'Labeled Text'
  }, _react["default"].createElement(_Section.SectionRow, null, _react["default"].createElement(_labledText["default"], {
    label: shortText.label,
    content: shortText.content
  })), _react["default"].createElement(_Section.SectionRow, null, _react["default"].createElement(_labledText["default"], {
    label: longText.label,
    content: longText.content
  })));
};

var _default = LabeledTextSection;
exports["default"] = _default;