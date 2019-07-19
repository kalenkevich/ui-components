"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MainPageStyle = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../services/Utils");

var _input = _interopRequireDefault(require("../components/input"));

var _card = _interopRequireDefault(require("../components/card"));

var _OrderListItem = _interopRequireDefault(require("./components/order/OrderListItem"));

var MainPageStyle = function MainPageStyle() {
  return {
    root: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    },
    searchResult: {
      width: '100%'
    },
    searchForm: {
      width: '100%',
      marginLeft: '10px',
      maxWidth: '750px'
    },
    searchInputCard: {
      padding: '20px'
    },
    searchInput: {},
    orderListItem: {
      margin: '15px 0'
    }
  };
};

exports.MainPageStyle = MainPageStyle;
var customer = {
  avatarUrl: 'https://avatar-cdn.atlassian.com/5ba3e03512b3ea2f78b71046?by=id&sg=iDdadg265ubxOx3V4Ljf5D2%2FTDg%3D&d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-5.svg&nocaching=0.6002600680772352',
  name: 'Alexey Kalenkevich',
  rate: 100
};
var order = {
  customer: customer,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor consectetur nibh quis feugiat. Sed malesuada suscipit lacus in condimentum. Phasellus a finibus nunc. Vivamus ut metus mi. Donec mattis volutpat facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas porttitor turpis ac velit fermentum, eget sollicitudin ex pretium. Ut pellentesque pharetra venenatis.\\n\' +\n' + '  \'\\n\' +\n' + '  \'Pellentesque ut odio eu lacus posuere luctus id nec dolor. Mauris lobortis interdum velit, in accumsan nibh scelerisque vel. Maecenas faucibus ornare mi, sit amet vestibulum metus posuere sed. Sed nulla arcu, rutrum vitae felis vel, pulvinar dictum risus. Donec lorem sem, mollis eu gravida vitae, suscipit id massa. Nullam imperdiet sem arcu. Nunc sit amet maximus elit.\' +\n' + '  \'Pellentesque ut odio eu lacus posuere luctus id nec dolor. Mauris lobortis interdum velit, in accumsan nibh scelerisque vel. Maecenas faucibus ornare mi, sit amet vestibulum metus posuere sed. Sed nulla arcu, rutrum vitae felis vel, pulvinar dictum risus. Donec lorem sem, mollis eu gravida vitae, suscipit id massa. Nullam imperdiet sem arcu. Nunc sit amet maximus elit.',
  budget: {
    value: 250,
    currency: 'USD'
  },
  dateStart: new Date(),
  dateEnd: new Date(),
  location: 'Слоним'
};
var orders = [order, order, order, order, order, order, order, order, order, order, order, order, order, order, order, order, order, order, order, order, order];

var OrdersPage = function OrdersPage(props) {
  var classes = props.classes,
      className = props.className;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);

  var _useState = (0, _react.useState)({
    searchValue: ''
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      filter = _useState2[0],
      updateFilter = _useState2[1];

  var setFilter = function setFilter(newFilterValue) {
    updateFilter(newFilterValue);
  };

  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement("div", {
    className: classes.searchForm
  }, _react["default"].createElement(_card["default"], {
    className: classes.searchInputCard
  }, _react["default"].createElement(_input["default"], {
    className: classes.searchInput,
    value: filter.searchValue,
    onChange: function onChange(e) {
      setFilter((0, _objectSpread2["default"])({}, filter, {
        searchValue: e.target.value
      }));
    }
  })), _react["default"].createElement("div", {
    className: classes.searchResult
  }, (orders || []).map(function (or, index) {
    return _react["default"].createElement(_OrderListItem["default"], {
      key: index,
      className: classes.orderListItem,
      order: or
    });
  }))));
};

OrdersPage.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(MainPageStyle)(OrdersPage);

exports["default"] = _default;