import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Section, SectionRow } from './Section';
import Button from '../components/button';
import NotificationContext from '../context/NotificationContext';
import { NotificationBell } from '../components/notification';

const ButtonSection = () => {
  const { showNotification } = useContext(NotificationContext);
  const [notificationCount, setNotificationCount] = useState(99);

  return (
    <Section title={'Notification'}>
      <SectionRow title={'Notification bell'}>
        <Button
          type='secondary'
          onClick={() => {
            if (notificationCount - 1 >= 0) {
              setNotificationCount(notificationCount - 1);
            }
          }}
        >
          <FontAwesomeIcon icon={'chevron-down'}/>
        </Button>
        <NotificationBell
          notificationCount={notificationCount}
        />
        <Button
          type='secondary'
          onClick={() => setNotificationCount(notificationCount + 1)}
        >
          <FontAwesomeIcon icon={'chevron-up'}/>
        </Button>
      </SectionRow>
      <SectionRow title={'Notification types'}>
        <Button
          type='success'
          onClick={() => {
            showNotification({
              type: 'success',
              message: 'Success Notification Here!',
              position: 'tc',
            });
          }}
        >
          Success notification
        </Button>
        <Button
          type='info'
          onClick={() => {
            showNotification({
              type: 'info',
              message: 'Info Notification Here!',
              position: 'tc',
            });
          }}
        >
          Info notification
        </Button>
        <Button
          type='warning'
          onClick={() => {
            showNotification({
              type: 'warning',
              message: 'Warning Notification Here!',
              position: 'tc',
            });
          }}
        >
          Warning notification
        </Button>
        <Button
          type='danger'
          onClick={() => {
            showNotification({
              type: 'error',
              message: 'Error Notification Here!',
              position: 'tc',
            });
          }}
        >
          Error notification
        </Button>
      </SectionRow>
      <SectionRow title={'Notification positions'}>
        <Button
          type='secondary'
          onClick={() => {
            showNotification({
              type: 'info',
              message: 'Top Left Notification Here!',
              position: 'tl',
            });
          }}
        >
          Top Left
        </Button>
        <Button
          type='secondary'
          onClick={() => {
            showNotification({
              type: 'info',
              message: 'Top Center Notification Here!',
              position: 'tc',
            });
          }}
        >
          Top Center
        </Button>
        <Button
          type='secondary'
          onClick={() => {
            showNotification({
              type: 'info',
              message: 'Top Right Notification Here!',
              position: 'tr',
            });
          }}
        >
          Top Right
        </Button>
        <Button
          type='secondary'
          onClick={() => {
            showNotification({
              type: 'info',
              message: 'Center Left Notification Here!',
              position: 'cl',
            });
          }}
        >
          Center Left
        </Button>
        <Button
          type='secondary'
          onClick={() => {
            showNotification({
              type: 'info',
              message: 'Center Notification Here!',
              position: 'cc',
            });
          }}
        >
          Center
        </Button>
        <Button
          type='secondary'
          onClick={() => {
            showNotification({
              type: 'info',
              message: 'Center Right Notification Here!',
              position: 'cr',
            });
          }}
        >
          Center Right
        </Button>
        <Button
          type='secondary'
          onClick={() => {
            showNotification({
              type: 'info',
              message: 'Bottom Left Notification Here!',
              position: 'bl',
            });
          }}
        >
          Bottom Left
        </Button>
        <Button
          type='secondary'
          onClick={() => {
            showNotification({
              type: 'info',
              message: 'Bottom Center Notification Here!',
              position: 'bc',
            });
          }}
        >
          Bottom Center
        </Button>
        <Button
          type='secondary'
          onClick={() => {
            showNotification({
              type: 'info',
              message: 'Bottom Rights Notification Here!',
              position: 'br',
            });
          }}
        >
          Bottom Right
        </Button>
      </SectionRow>
    </Section>
  );
};

export default ButtonSection;
