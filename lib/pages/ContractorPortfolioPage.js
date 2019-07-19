"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ContractorPortfolioPageStyle = exports.contractor = exports.image = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _avatar = _interopRequireDefault(require("../components/avatar"));

var _labeledText = _interopRequireDefault(require("../components/labeled-text"));

var _Utils = require("../services/Utils");

var _album = _interopRequireDefault(require("../components/album"));

var image = {
  url: 'https://image.ibb.co/ckwzkq/MG-1418.jpg',
  comments: [{
    user: {
      name: 'Alexey Kalenkevich',
      avatarUrl: 'https://avatar-cdn.atlassian.com/5ba3e03512b3ea2f78b71046?by=id&sg=iDdadg265ubxOx3V4Ljf5D2%2FTDg%3D&d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-5.svg&nocaching=0.6002600680772352'
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor consectetur nibh quis feugiat. Sed malesuada suscipit lacus in condimentum.',
    likes: 100
  }],
  likes: 100,
  views: 500,
  size: {
    width: 300,
    height: 200
  }
};
exports.image = image;
var contractor = {
  avatarUrl: 'https://avatar-cdn.atlassian.com/5ba3e03512b3ea2f78b71046?by=id&sg=iDdadg265ubxOx3V4Ljf5D2%2FTDg%3D&d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FAK-5.svg&nocaching=0.6002600680772352',
  name: 'Alexey Kalenkevich',
  rate: 100,
  industry: 'Software Developer Legend',
  pricePerHour: {
    value: 100000,
    currency: 'USD'
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor consectetur nibh quis feugiat. Sed malesuada suscipit lacus in condimentum. Phasellus a finibus nunc. Vivamus ut metus mi. Donec mattis volutpat facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas porttitor turpis ac velit fermentum, eget sollicitudin ex pretium. Ut pellentesque pharetra venenatis.\\n\' +\n' + '  \'\\n\' +\n' + '  \'Pellentesque ut odio eu lacus posuere luctus id nec dolor. Mauris lobortis interdum velit, in accumsan nibh scelerisque vel. Maecenas faucibus ornare mi, sit amet vestibulum metus posuere sed. Sed nulla arcu, rutrum vitae felis vel, pulvinar dictum risus. Donec lorem sem, mollis eu gravida vitae, suscipit id massa. Nullam imperdiet sem arcu. Nunc sit amet maximus elit.\' +\n' + '  \'Pellentesque ut odio eu lacus posuere luctus id nec dolor. Mauris lobortis interdum velit, in accumsan nibh scelerisque vel. Maecenas faucibus ornare mi, sit amet vestibulum metus posuere sed. Sed nulla arcu, rutrum vitae felis vel, pulvinar dictum risus. Donec lorem sem, mollis eu gravida vitae, suscipit id massa. Nullam imperdiet sem arcu. Nunc sit amet maximus elit.',
  location: 'Слоним',
  portfolio: {
    images: [image, (0, _objectSpread2["default"])({}, image, {
      size: {
        width: 500,
        height: 400
      }
    }), image, image, (0, _objectSpread2["default"])({}, image, {
      size: {
        width: 500,
        height: 400
      }
    }), image, image, (0, _objectSpread2["default"])({}, image, {
      size: {
        width: 500,
        height: 400
      }
    }), image, image, (0, _objectSpread2["default"])({}, image, {
      size: {
        width: 500,
        height: 400
      }
    }), image, image, (0, _objectSpread2["default"])({}, image, {
      size: {
        width: 620,
        height: 480
      }
    }), image, image, (0, _objectSpread2["default"])({}, image, {
      size: {
        width: 700,
        height: 300
      }
    }), image, (0, _objectSpread2["default"])({}, image, {
      size: {
        width: 100,
        height: 50
      }
    }), image, image, image]
  }
};
exports.contractor = contractor;

var ContractorPortfolioPageStyle = function ContractorPortfolioPageStyle() {
  return {
    root: {
      display: 'flex'
    },
    contractorInfo: {
      width: '400px',
      flexShrink: '0'
    },
    album: {
      width: '100%',
      marginLeft: '10px'
    }
  };
};

exports.ContractorPortfolioPageStyle = ContractorPortfolioPageStyle;

var ContractorPortfolioPage = function ContractorPortfolioPage(props) {
  var classes = props.classes,
      className = props.className;
  var rootClasses = (0, _Utils.getClassName)([classes.root, className]);
  return _react["default"].createElement("div", {
    className: rootClasses
  }, _react["default"].createElement("div", {
    className: classes.contractorInfo
  }, _react["default"].createElement(_avatar["default"], {
    url: contractor.avatarUrl,
    rate: contractor.rate,
    size: 'lg'
  }), _react["default"].createElement(_labeledText["default"], {
    reverse: true,
    label: contractor.industry,
    content: contractor.name
  }), _react["default"].createElement(_labeledText["default"], {
    label: "\u041C\u0435\u0441\u0442\u043E",
    content: contractor.location
  }), _react["default"].createElement(_labeledText["default"], {
    label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    content: contractor.description
  })), _react["default"].createElement(_album["default"], {
    className: classes.album,
    images: contractor.portfolio.images
  }));
};

ContractorPortfolioPage.propTypes = {
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string
};

var _default = (0, _reactJss["default"])(ContractorPortfolioPageStyle)(ContractorPortfolioPage);

exports["default"] = _default;