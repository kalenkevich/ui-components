import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSave,
  faUndo,
  faPlus,
  faUser,
  faSignOutAlt,
  faCommentAlt,
  faTimes,
  faPencilAlt,
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faBell,
  faBars,
  faCrown,
} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

library.add(faSave);
library.add(faUndo);
library.add(faPlus);
library.add(faUser);
library.add(faTimes);
library.add(faPencilAlt);
library.add(faCommentAlt);
library.add(faSignOutAlt);
library.add(faThumbsUp);
library.add(faThumbsDown);
library.add(faChevronUp);
library.add(faChevronDown);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faBell);
library.add(faBars);
library.add(faCrown);

export default {
  applicationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  application: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '1200px',
    width: '100%',
  },
  '@keyframes blink': {
    '0%': {
      backgroundColor: 'rgba(204,204,204, 0)',
    },
    '10%': {
      backgroundColor: 'rgba(204,204,204, 0.5)',
    },
    '100%': {
      backgroundColor: 'rgba(204,204,204, 0)',
    },
  },
};
