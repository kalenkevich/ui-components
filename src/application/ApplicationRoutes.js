import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
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
import DropdownSection from '../preview-sections/DropdownSection';

const BasicComponents = () => (
  <>
    <ThemeSection/>
    <ButtonSection/>
    <DropdownSection/>
    <InputSection/>
    <SelectSection/>
    <CheckboxSection/>
    <RadioSection/>
    <TextAreaSection/>
    <LabeledTextSection/>
    <AvatarSection/>
    <TabsSection/>
    <NotificationSection/>
    <DatePickerSection/>
  </>
);

export const Forms = () => (
  <>
    Forms will be here!
  </>
);

const Routes = () => (
  <Switch>
    <Route path='/basic' component={BasicComponents}/>
    <Route path='/forms' component={Forms}/>
    <Redirect from={''} to={'/basic'}/>
  </Switch>
);

export default Routes;