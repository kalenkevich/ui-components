"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _reactRouterDom = require("react-router-dom");

var _avatar = _interopRequireDefault(require("../components/avatar"));

var _button = _interopRequireDefault(require("../components/button"));

var _select = _interopRequireDefault(require("../components/select"));

var _header = _interopRequireDefault(require("../components/header"));

var _menu = require("../components/menu");

var _HeaderComponentStyle = _interopRequireDefault(require("../components/header/HeaderComponentStyle"));

var _AuthorizationContext = _interopRequireDefault(require("../context/AuthorizationContext"));

var _MobileContext = _interopRequireDefault(require("../context/MobileContext"));

var _SettingsContext = _interopRequireDefault(require("../context/SettingsContext"));

var HeaderComponent = function HeaderComponent(props) {
  var classes = props.classes,
      history = props.history;
  var settings = (0, _react.useContext)(_SettingsContext["default"]);

  var _useContext = (0, _react.useContext)(_MobileContext["default"]),
      isMobile = _useContext.isMobile;

  var _useContext2 = (0, _react.useContext)(_AuthorizationContext["default"]),
      authorizedUser = _useContext2.user;

  var goToSignUp = function goToSignUp() {
    var safeUrl = encodeURIComponent(window.location.href);
    window.location.href = "".concat(settings.AuthFrontendUrl, "/sign-up?returnUrl=").concat(safeUrl);
  };

  var goToProfilePage = function goToProfilePage() {
    window.location.href = "".concat(settings.AuthFrontendUrl, "/user/me");
  };

  var goToSignIn = function goToSignIn() {
    var safeUrl = encodeURIComponent(window.location.href);
    window.location.href = "".concat(settings.AuthFrontendUrl, "/sign-in?returnUrl=").concat(safeUrl);
  };

  var goToSignOut = function goToSignOut() {
    var safeUrl = encodeURIComponent(window.location.href);
    window.location.href = "".concat(settings.AuthFrontendUrl, "/sign-out?returnUrl=").concat(safeUrl);
  };

  var ResultPanel = null;

  if (authorizedUser) {
    ResultPanel = _react["default"].createElement("div", {
      className: classes.actionPanel
    }, _react["default"].createElement(_select["default"], {
      value: '',
      onSelect: function onSelect(_ref) {
        var value = _ref.value;

        if (value === 'signOut') {
          return goToSignOut();
        }

        if (value === 'profile') {
          return goToProfilePage();
        }

        return null;
      },
      options: [{
        label: 'My Profile',
        value: 'profile'
      }, {
        label: 'Sign Out',
        value: 'signOut'
      }],
      preview: function preview() {
        return _react["default"].createElement("div", {
          className: classes.userPanel
        }, _react["default"].createElement(_avatar["default"], {
          className: classes.userAvatar,
          url: authorizedUser.avatarUrl,
          size: "sm"
        }), !isMobile ? _react["default"].createElement("div", {
          className: classes.userName
        }, authorizedUser.name) : null);
      }
    }));
  } else {
    ResultPanel = _react["default"].createElement("div", {
      className: classes.actionPanel
    }, _react["default"].createElement(_button["default"], {
      className: classes.actionPanelButton,
      onClick: goToSignIn
    }, "Sign In"), _react["default"].createElement(_button["default"], {
      className: classes.actionPanelButton,
      onClick: goToSignUp
    }, "Sign Up"));
  }

  return _react["default"].createElement(_header["default"], {
    appName: settings.AppName,
    menu: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_menu.MenuItem, {
      label: "Components"
    }, _react["default"].createElement(_menu.MenuItem, {
      label: 'Basic',
      onClick: function onClick() {
        return history.push('/components/basic');
      }
    }), _react["default"].createElement(_menu.MenuItem, {
      label: 'Custom',
      onClick: function onClick() {
        return history.push('/components/custom');
      }
    })), _react["default"].createElement(_menu.MenuItem, {
      label: "Widgets",
      onClick: function onClick() {
        return history.push('/widgets');
      }
    }), _react["default"].createElement(_menu.MenuItem, {
      label: "Pages"
    }, _react["default"].createElement(_menu.MenuItem, {
      label: "Main Page",
      onClick: function onClick() {
        return history.push('/pages/main');
      }
    }), _react["default"].createElement(_menu.MenuItem, {
      label: "Order Page",
      onClick: function onClick() {
        return history.push('/pages/order');
      }
    }), _react["default"].createElement(_menu.MenuItem, {
      label: "Orders Page",
      onClick: function onClick() {
        return history.push('/pages/orders');
      }
    }), _react["default"].createElement(_menu.MenuItem, {
      label: "Tenders Page",
      onClick: function onClick() {
        return history.push('/pages/tenders');
      }
    }), _react["default"].createElement(_menu.MenuItem, {
      label: "Contractor Portfolio Page",
      onClick: function onClick() {
        return history.push('/pages/contractor-portfolio');
      }
    })))
  }, ResultPanel);
};

HeaderComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  history: _propTypes["default"].object,
  signOut: _propTypes["default"].func
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactJss["default"])(_HeaderComponentStyle["default"])(HeaderComponent));

exports["default"] = _default;