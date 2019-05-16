import React, { useContext } from 'react';
import { Section, SectionRow } from './Section';
import Input from '../components/input';
import ThemeContext from '../context/ThemeContext';
import Form, { FormSection } from '../components/form';

const ThemeSection = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const onInputChange = (value, themeKey) => changeTheme({ [themeKey]: value });

  return (
    <Section title={'Theme'}>
      <SectionRow>
        <Form transparent>
          {Object.keys(theme).map(key => (
            <FormSection size={'3'} key={key}>
              <Input
                value={theme[key]}
                label={key}
                onChange={e => onInputChange(e.target.value, key)}
              />
            </FormSection>
          ))}
        </Form>
      </SectionRow>
    </Section>
  );
};

export default ThemeSection;
