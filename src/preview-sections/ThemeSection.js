import React, { useContext } from 'react';
import { Section, SectionRow } from './Section';
import Input from '../components/input';
import ThemeContext from '../context/ThemeContext';

const ThemeSection = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const onInputChange = (value, themeKey) => changeTheme({ [themeKey]: value });

  return (
    <Section title={'Theme'}>
      <SectionRow>
        {Object.keys(theme).map(key => (
          <Input
            key={key}
            value={theme[key]}
            label={key}
            onChange={e => onInputChange(e.target.value, key)}
          />
        ))}
      </SectionRow>
    </Section>
  );
};

export default ThemeSection;
