import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NotificationBellStyle from './NotificationBellStyle';

const NotificationBell = (props) => {
  const {
    classes,
    notificationCount,
  } = props;

  return (
    <div className={classes.root}>
      <FontAwesomeIcon
        className={classes.icon}
        size='lg'
        icon='bell'
      />
      { notificationCount > 0 ? <div className={classes.marked}>{notificationCount}</div> : null }
    </div>
  );
};

NotificationBell.propTypes = {
  classes: PropTypes.object,
  notificationCount: PropTypes.number,
};

export default withStyles(NotificationBellStyle)(NotificationBell);
