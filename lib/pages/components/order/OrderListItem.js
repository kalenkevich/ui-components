"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OrderListItemStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _avatar = _interopRequireDefault(require("../../../components/avatar"));

var _labeledText = _interopRequireDefault(require("../../../components/labeled-text"));

var _card = _interopRequireDefault(require("../../../components/card"));

var _button = _interopRequireDefault(require("../../../components/button"));

var _expandableSection = _interopRequireDefault(require("../../../components/expandable-section"));

var _Utils = require("../../../services/Utils");

var OrderListItemStyle = function OrderListItemStyle() {
  return {
    rootWrapper: {
      display: 'flex',
      padding: '10px'
    },
    root: {
      display: 'flex',
      width: '100%'
    },
    userInfo: {
      display: 'flex',
      flexBasis: '20%'
    },
    orderInfo: {
      display: 'flex',
      justifyContent: 'center'
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '& > *': {
        marginRight: '10px'
      }
    }
  };
};

exports.OrderListItemStyle = OrderListItemStyle;

var OrderListItem = function OrderListItem(props) {
  var classes = props.classes,
      className = props.className,
      order = props.order;
  var rootClasses = (0, _Utils.getClassName)([classes.rootWrapper, className]);
  return _react["default"].createElement(_card["default"], {
    className: rootClasses
  }, _react["default"].createElement(_expandableSection["default"], {
    childrenClassName: classes.root,
    expandedContent: function expandedContent() {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_labeledText["default"], {
        label: 'Описание',
        content: order.description
      }), _react["default"].createElement("div", {
        className: classes.actions
      }, _react["default"].createElement(_button["default"], {
        type: "success"
      }, "\u041D\u0430\u0447\u0430\u0442\u044C"), _react["default"].createElement(_button["default"], {
        type: "warning"
      }, "\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C"), _react["default"].createElement(_button["default"], {
        type: "success"
      }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C"), _react["default"].createElement(_button["default"], {
        type: "danger"
      }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")));
    }
  }, _react["default"].createElement("div", {
    className: classes.userInfo
  }, _react["default"].createElement(_avatar["default"], {
    url: order.customer.avatarUrl,
    rate: order.customer.rate
  }), _react["default"].createElement(_labeledText["default"], {
    reverse: true,
    label: 'Заказчик',
    content: order.customer.name
  })), _react["default"].createElement("div", {
    className: classes.orderInfo
  }, _react["default"].createElement(_labeledText["default"], {
    label: "\u0426\u0435\u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u0430",
    content: "".concat(order.budget.value, " ").concat(order.budget.currency)
  }), _react["default"].createElement(_labeledText["default"], {
    label: "\u0414\u0430\u0442\u0430",
    content: (0, _Utils.getFormattedDateRange)(order.dateStart, order.dateEnd)
  }), _react["default"].createElement(_labeledText["default"], {
    label: "\u041C\u0435\u0441\u0442\u043E",
    content: order.location
  }))));
};

OrderListItem.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  order: _propTypes["default"].object
};

var _default = (0, _reactJss["default"])(OrderListItemStyle)(OrderListItem);

exports["default"] = _default;