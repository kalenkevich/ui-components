"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faSave);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faUndo);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faPlus);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faUser);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faTimes);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faPencilAlt);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faCommentAlt);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faSignOutAlt);

_fontawesomeSvgCore.library.add(_freeRegularSvgIcons.faThumbsUp);

_fontawesomeSvgCore.library.add(_freeRegularSvgIcons.faThumbsDown);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faChevronUp);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faChevronDown);

var _default = {
  applicationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  application: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '1200px',
    width: '100%'
  },
  '@keyframes blink': {
    '0%': {
      backgroundColor: 'rgba(204,204,204, 0)'
    },
    '10%': {
      backgroundColor: 'rgba(204,204,204, 0.5)'
    },
    '100%': {
      backgroundColor: 'rgba(204,204,204, 0)'
    }
  }
};
exports["default"] = _default;