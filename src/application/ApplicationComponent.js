import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import ApplicationHeader from './ApplicationHeader';
import { SettingsProvider } from '../context/SettingsContext';
import { Authorization } from '../context/AuthorizationContext';
import { MobileApp } from '../context/MobileContext';
import { NotificationApp } from '../context/NotificationContext';
import { ThemedApp } from '../context/ThemeContext';
import settings from '../../config/settings';
import ApplicationStyles from './ApplicationStyle';
import ApplicationRoutes from './ApplicationRoutes';

const ApplicationComponent = ({ classes }) => (
  <SettingsProvider value={settings}>
    <ThemedApp>
      <Authorization>
        <MobileApp>
          <NotificationApp>
            <ApplicationHeader/>
            <div className={classes.applicationWrapper}>
              <div className={classes.application}>
                <ApplicationRoutes/>
              </div>
            </div>
          </NotificationApp>
        </MobileApp>
      </Authorization>
    </ThemedApp>
  </SettingsProvider>
);

ApplicationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  settings: PropTypes.object,
};

export default withStyles(ApplicationStyles)(ApplicationComponent);
