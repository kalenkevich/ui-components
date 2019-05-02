import React from 'react';
import PropTypes from 'prop-types';
import { Section, SectionRow } from './Section';
import Input from '../components/input';
import {
  backgroundColorTransition,
  borderRadius, boxShadow,
  controlFontSize,
  controlFontWeight,
  controlHeight,
} from '../theme';

const ThemeSection = ({ theme, onChange }) => {
  const onInputChange = (value, themeKey) => {
    onChange({
      [themeKey]: value,
    });
  };

  return (
    <Section title={'Theme'}>
      <SectionRow title={'Colors'}>
        <Input
          value={theme.brandPrimaryColor}
          label='brandPrimaryColor'
          onChange={e => onInputChange(e.target.value, 'brandPrimaryColor')}
        />
        <Input
          value={theme.brandPrimaryDarkColor}
          label='brandPrimaryDarkColor'
          onChange={e => onInputChange(e.target.value, 'brandPrimaryDarkColor')}
        />
        <Input
          value={theme.brandSuccessLightColor}
          label='brandSuccessLightColor'
          onChange={e => onInputChange(e.target.value, 'brandSuccessLightColor')}
        />
        <Input
          value={theme.brandSuccessDarkColor}
          label='brandSuccessDarkColor'
          onChange={e => onInputChange(e.target.value, 'brandSuccessDarkColor')}
        />
        <Input
          value={theme.brandInfoLightColor}
          label='brandInfoLightColor'
          onChange={e => onInputChange(e.target.value, 'brandInfoLightColor')}
        />
        <Input
          value={theme.brandInfoDarkColor}
          label='brandInfoDarkColor'
          onChange={e => onInputChange(e.target.value, 'brandInfoDarkColor')}
        />
        <Input
          value={theme.brandWarningLightColor}
          label='brandWarningLightColor'
          onChange={e => onInputChange(e.target.value, 'brandWarningLightColor')}
        />
        <Input
          value={theme.brandWarningDarkColor}
          label='brandWarningDarkColor'
          onChange={e => onInputChange(e.target.value, 'brandWarningDarkColor')}
        />
        <Input
          value={theme.brandErrorLightColor}
          label='brandErrorLightColor'
          onChange={e => onInputChange(e.target.value, 'brandErrorLightColor')}
        />
        <Input
          value={theme.brandErrorDarkColor}
          label='brandErrorDarkColor'
          onChange={e => onInputChange(e.target.value, 'brandErrorDarkColor')}
        />
        <Input
          value={theme.brandGrayColor}
          label='brandGrayColor'
          onChange={e => onInputChange(e.target.value, 'brandGrayColor')}
        />
        <Input
          value={theme.brandDarkGrayColor}
          label='brandGrayColor'
          onChange={e => onInputChange(e.target.value, 'brandDarkGrayColor')}
        />
        <Input
          value={theme.brandLightGrayColor}
          label='brandGrayColor'
          onChange={e => onInputChange(e.target.value, 'brandLightGrayColor')}
        />
      </SectionRow>
      <SectionRow title={'Controls'}>
        <Input
          value={theme.borderRadius}
          label='borderRadius'
          onChange={e => onInputChange(e.target.value, 'borderRadius')}
        />
        <Input
          value={theme.controlFontSize}
          label='controlFontSize'
          onChange={e => onInputChange(e.target.value, 'controlFontSize')}
        />
        <Input
          value={theme.controlFontWeight}
          label='controlFontWeight'
          onChange={e => onInputChange(e.target.value, 'controlFontWeight')}
        />
        <Input
          value={theme.controlHeight}
          label='controlHeight'
          onChange={e => onInputChange(e.target.value, 'controlHeight')}
        />
        <Input
          value={theme.boxShadow}
          label='boxShadow'
          onChange={e => onInputChange(e.target.value, 'boxShadow')}
        />
        <Input
          value={theme.backgroundColorTransition}
          label='backgroundColorTransition'
          onChange={e => onInputChange(e.target.value, 'backgroundColorTransition')}
        />
      </SectionRow>
    </Section>
  );
};

ThemeSection.propTypes = {
  theme: PropTypes.object,
  onChange: PropTypes.func,
};

export default ThemeSection;
