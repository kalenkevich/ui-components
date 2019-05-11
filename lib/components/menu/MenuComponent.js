"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _button = _interopRequireDefault(require("../button"));

var _MenuStyle = _interopRequireDefault(require("./MenuStyle"));

var _Backdrop = _interopRequireDefault(require("../Backdrop"));

var _Utils = require("../../services/Utils");

var MenuComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(MenuComponent, _Component);

  function MenuComponent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuComponent);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MenuComponent).call(this, props));
    _this.state = {
      isOpen: false,
      isOpening: false
    };
    _this.setOpenState = _this.setOpenState.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MenuComponent, [{
    key: "setOpenState",
    value: function setOpenState(isOpen) {
      var _this2 = this;

      this.setState({
        isOpen: isOpen ? true : this.state.isOpen,
        isOpening: true,
        isClosing: false
      });
      setTimeout(function () {
        _this2.setState({
          isOpen: !isOpen ? false : _this2.state.isOpen,
          isOpening: false,
          isClosing: false
        });
      }, 100);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          children = _this$props.children,
          label = _this$props.label;
      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          isOpening = _this$state.isOpening,
          isClosing = _this$state.isClosing;
      var rootClasses = (0, _Utils.getClassName)([classes.root, isOpening ? 'opening' : '', isClosing ? 'closing' : '']);
      var MenuButton = label ? _react["default"].createElement("div", {
        tabIndex: "0",
        className: classes.brandTitle,
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') {
            _this3.setOpenState(!isOpen);
          }
        },
        onClick: function onClick() {
          return _this3.setOpenState(true);
        }
      }, label) : _react["default"].createElement(_button["default"], {
        onClick: function onClick() {
          return _this3.setOpenState(true);
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: 'bars'
      }));

      if (!isOpen) {
        return MenuButton;
      }

      return _react["default"].createElement(_react["default"].Fragment, null, MenuButton, _react["default"].createElement(_Backdrop["default"], {
        className: classes.backdrop,
        isOpening: isOpening,
        isClosing: isClosing,
        onClick: function onClick() {
          return _this3.setOpenState(false);
        }
      }), _react["default"].createElement("ul", {
        className: rootClasses,
        onClick: function onClick(e) {
          e.stopPropagation();

          _this3.setOpenState(false);
        }
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        tabIndex: "0",
        className: classes.closeIcon,
        icon: 'times',
        onClick: function onClick() {
          return _this3.setOpenState(false);
        },
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') {
            _this3.setOpenState(false);
          }
        }
      }), children));
    }
  }]);
  return MenuComponent;
}(_react.Component);

MenuComponent.propTypes = {
  classes: _propTypes["default"].object,
  children: _propTypes["default"].node,
  label: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(_MenuStyle["default"])(MenuComponent);

exports["default"] = _default;