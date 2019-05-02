import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles, { ThemeProvider } from 'react-jss';
import { HeaderWithAuthorization } from '../components/header';
import { SettingsProvider } from '../context/SettingsContext';
import { Authorization } from '../context/AuthorizationContext';
import { MobileApp } from '../context/MobileContext';
import { NotificationApp } from '../context/NotificationContext';
import settings from '../../config/settings';
import ApplicationStyles from './ApplicationStyle';
import ButtonSection from '../preview-sections/ButtonSection';
import InputSection from '../preview-sections/InputSection';
import TextAreaSection from '../preview-sections/TextAreaSection';
import SelectSection from '../preview-sections/SelectSection';
import CheckboxSection from '../preview-sections/CheckboxSection';
import RadioSection from '../preview-sections/RadioSection';
import AvatarSection from '../preview-sections/AvatarSection';
import TabsSection from '../preview-sections/TabsSection';
import LabeledTextSection from '../preview-sections/LabeledTextSection';
import NotificationSection from '../preview-sections/NotificationSection';
import DatePickerSection from '../preview-sections/DatePickerSection';
import ThemeSection from '../preview-sections/ThemeSection';
import defaultTheme from '../theme';

const ApplicationComponent = ({ classes }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const changeTheme = (newTheme) => {
    setTheme({
      ...theme,
      ...newTheme,
    });
  };

  return (
    <SettingsProvider value={settings}>
      <ThemeProvider theme={theme}>
        <Authorization>
          <MobileApp>
            <NotificationApp>
              <HeaderWithAuthorization/>
              <div className={classes.applicationWrapper}>
                <div className={classes.application}>
                  <ThemeSection theme={theme} onChange={changeTheme}/>
                  <ButtonSection/>
                  <CheckboxSection/>
                  <RadioSection/>
                  <LabeledTextSection/>
                  <InputSection/>
                  <TextAreaSection/>
                  <SelectSection/>
                  <AvatarSection/>
                  <TabsSection/>
                  <NotificationSection/>
                  <DatePickerSection/>
                </div>
              </div>
            </NotificationApp>
          </MobileApp>
        </Authorization>
      </ThemeProvider>
    </SettingsProvider>
  );
};

ApplicationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  settings: PropTypes.object,
};

export default withStyles(ApplicationStyles)(ApplicationComponent);
