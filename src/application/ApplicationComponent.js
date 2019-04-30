import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Header from '../components/header';
import { SettingsProvider } from '../context/SettingsContext';
import { Authorization } from '../context/AuthorizationContext';
import { MobileApp } from '../context/MobileContext';
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
import DatePickerSection from '../preview-sections/DatePickerSection';

const ApplicationComponent = ({ classes }) => (
  <SettingsProvider value={settings}>
    <Authorization>
      <MobileApp>
        <Header appName={settings.AppName}/>
        <div className={classes.applicationWrapper}>
          <div className={classes.application}>
            <ButtonSection/>
            <CheckboxSection/>
            <RadioSection/>
            <LabeledTextSection/>
            <InputSection/>
            <TextAreaSection/>
            <SelectSection/>
            <AvatarSection/>
            <TabsSection/>
            <DatePickerSection/>
          </div>
        </div>
      </MobileApp>
    </Authorization>
  </SettingsProvider>
);

ApplicationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  settings: PropTypes.object,
};

export default withStyles(ApplicationStyles)(ApplicationComponent);
