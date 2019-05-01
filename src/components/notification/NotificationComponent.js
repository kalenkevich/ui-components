import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NotificationStyle from './NotificationStyle';
import { getClassName } from '../../services/Utils';
import MobileContext from '../../context/MobileContext';

const Notification = (props) => {
  const {
    classes = {},
    type = 'info',
    message = '',
    hide = false,
    position = 'tc',
    onClose = () => {},
  } = props;
  const { isMobile } = useContext(MobileContext);

  const classNames = getClassName([
    classes.root,
    type,
    position,
    isMobile ? 'mobile' : '',
    hide ? 'hide' : '',
  ]);

  return (
    <div className={classNames}>
      {message}
      <FontAwesomeIcon
        onClick={onClose}
        className={classes.closeIcon}
        icon='times'
      />
    </div>
  );
};

Notification.propTypes = {
  classes: PropTypes.object,
  type: PropTypes.oneOf([
    'success',
    'info',
    'warning',
    'error',
  ]),
  position: PropTypes.oneOf([
    'tl',
    'tc',
    'tr',
    'cl',
    'cc',
    'cr',
    'bl',
    'bc',
    'br',
  ]),
  message: PropTypes.string,
  hide: PropTypes.bool,
  onClose: PropTypes.func,
};

export default withStyles(NotificationStyle)(Notification);
