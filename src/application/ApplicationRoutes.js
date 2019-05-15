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
import LoadingSection from '../preview-sections/LoadingSection';
import CarouselSection from '../preview-sections/CarouselSection';
import OrderPage from '../pages/OrderPage';

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
    <LoadingSection/>
  </>
);

const Widgets = () => (
  <>
    <DatePickerSection/>
    <CarouselSection/>
  </>
);

export const Pages = () => (
  <>
    <OrderPage/>
  </>
);

const Routes = () => (
  <Switch>
    <Route path='/basic' component={BasicComponents}/>
    <Route path='/widgets' component={Widgets}/>
    <Route path='/pages' component={Pages}/>
    <Redirect from={''} to={'/basic'}/>
  </Switch>
);

export default Routes;
