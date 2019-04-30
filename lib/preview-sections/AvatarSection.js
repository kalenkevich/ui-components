"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Section = require("./Section");

var _avatar = _interopRequireDefault(require("../components/avatar"));

var user = {
  // eslint-disable-next-line max-len
  avatarUrl: 'https://s3-alpha-sig.figma.com/img/2f67/52b9/b33bbe8dc24a4792f0df1eece848af90?Expires=1557705600&Signature=bwMcuCqf65J4LqQeGpVAw~8ZeKvoFYD0ijLTFf7tgPWNKYPnz~WXnW~hwDtAmwgUWOXXntF1YNpj8705Tkefd71CG7E6IBPsdEAlFNLT05lu6f3heH5e6Zi8quZISzJqSiQEOwnuMCnE5RkIKrJoXDdStyZ9WVNYaoUj8I9cvsIk2I5ZIY-u87soslZ1FoGRyQKHfFmi0zxmlD9VXLrnMY0rY0sKW2LdptJAyw19S~jtjQ7vpat9OmZFKZMcqcFGi~h8eeTMMZEherjCn6U7Pe-gBRfUwfK-CavQwYvBeqHB9nqaVxZYS9lYE67ZWLnQzjdH~iv5C3weAdsB23np4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  rate: 4.3
};

var AvatarSection = function AvatarSection() {
  return _react["default"].createElement(_Section.Section, {
    title: 'Avatars'
  }, _react["default"].createElement(_Section.SectionRow, {
    title: "Small"
  }, _react["default"].createElement(_avatar["default"], {
    url: user.avatarUrl,
    size: "sm"
  }), _react["default"].createElement(_avatar["default"], {
    url: user.avatarUrl,
    rate: user.rate,
    size: "sm"
  })), _react["default"].createElement(_Section.SectionRow, {
    title: "Middle"
  }, _react["default"].createElement(_avatar["default"], {
    url: user.avatarUrl,
    size: "md"
  }), _react["default"].createElement(_avatar["default"], {
    url: user.avatarUrl,
    rate: user.rate,
    size: "md"
  })), _react["default"].createElement(_Section.SectionRow, {
    title: "Large"
  }, _react["default"].createElement(_avatar["default"], {
    url: user.avatarUrl,
    size: "lg"
  }), _react["default"].createElement(_avatar["default"], {
    url: user.avatarUrl,
    rate: user.rate,
    size: "lg"
  })));
};

var _default = AvatarSection;
exports["default"] = _default;