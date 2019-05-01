import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../components/notification';

const getId = () => Date.now();
const HIDE_ANIMATION_TIME = 1000;
const SHOW_ANIMATION_TIME = 5000;
const NotificationContext = React.createContext(null);

export const NotificationProvider = NotificationContext.Provider;
export const NotificationConsumer = NotificationContext.Consumer;
export const NotificationApp = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const showNotification = (notificationArgs) => {
    const {
      type = 'info',
      message,
      position = 'tc',
      show = SHOW_ANIMATION_TIME,
    } = notificationArgs;

    const newNotification = {
      id: getId(),
      position,
      type,
      message,
      hide: false,
    };

    setNotifications([
      ...notifications,
      newNotification,
    ]);

    setTimeout(() => hideNotification(newNotification), show);
  };

  const hideNotification = (notification) => {
    setNotifications((notifications || []).map((n) => {
      if (n.id !== notification.id) {
        return n;
      }

      return {
        ...notification,
        hide: true,
      };
    }));

    setTimeout(() => {
      setNotifications((notifications || []).filter(({ id }) => (id !== notification.id)));
    }, HIDE_ANIMATION_TIME);
  };

  return (
    <NotificationProvider value={{ showNotification }}>
      <div>
        {(notifications || []).map(notification => (
          <Notification
            key={notification.id}
            type={notification.type}
            position={notification.position}
            message={notification.message}
            hide={notification.hide}
            onClose={() => hideNotification(notification)}
          />
        ))}
      </div>
      {children}
    </NotificationProvider>
  );
};

NotificationApp.propTypes = {
  children: PropTypes.node,
};

export default NotificationContext;
