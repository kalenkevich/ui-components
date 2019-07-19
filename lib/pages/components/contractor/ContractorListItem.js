"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ContractorListItemStyle = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _Utils = require("../../../services/Utils");

var _avatar = _interopRequireDefault(require("../../../components/avatar"));

var _labeledText = _interopRequireDefault(require("../../../components/labeled-text"));

var _card = _interopRequireDefault(require("../../../components/card"));

var _checkbox = _interopRequireDefault(require("../../../components/checkbox"));

var _expandableSection = _interopRequireDefault(require("../../../components/expandable-section"));

var ContractorListItemStyle = function ContractorListItemStyle() {
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
      flexBasis: '40%'
    },
    contractorInfo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexBasis: '30%'
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexBasis: '30%'
    }
  };
};

exports.ContractorListItemStyle = ContractorListItemStyle;

var ContractorListItem = function ContractorListItem(props) {
  var classes = props.classes,
      className = props.className,
      contractor = props.contractor;
  var rootClasses = (0, _Utils.getClassName)([classes.rootWrapper, className]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      checked = _useState2[0],
      setCheckedState = _useState2[1];

  return _react["default"].createElement(_card["default"], {
    className: rootClasses
  }, _react["default"].createElement(_expandableSection["default"], {
    childrenClassName: classes.root,
    expandedContent: function expandedContent() {
      return _react["default"].createElement(_labeledText["default"], {
        label: 'Описание',
        content: contractor.description
      });
    }
  }, _react["default"].createElement("div", {
    className: classes.userInfo
  }, _react["default"].createElement(_avatar["default"], {
    url: contractor.avatarUrl,
    rate: contractor.rate
  }), _react["default"].createElement(_labeledText["default"], {
    reverse: true,
    label: contractor.industry,
    content: contractor.name
  })), _react["default"].createElement("div", {
    className: classes.contractorInfo
  }, _react["default"].createElement(_labeledText["default"], {
    label: 'Решит вопрос за',
    content: "".concat(contractor.pricePerHour.value, " ").concat(contractor.pricePerHour.currency)
  })), _react["default"].createElement("div", {
    className: classes.actions
  }, _react["default"].createElement(_checkbox["default"], {
    checked: checked,
    onChange: function onChange() {
      return setCheckedState(!checked);
    }
  }))));
};

ContractorListItem.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  contractor: _propTypes["default"].object
};

var _default = (0, _reactJss["default"])(ContractorListItemStyle)(ContractorListItem);

exports["default"] = _default;