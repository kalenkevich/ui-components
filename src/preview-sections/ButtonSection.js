import React from 'react';
import { Section, SectionRow } from './Section';
import Button from '../components/button';

const ButtonSection = () => (
  <Section title={'Buttons'}>
    <SectionRow>
      <Button>
        Primary button
      </Button>
      <Button type={'secondary'}>
        Secondary button
      </Button>
      <Button type={'success'}>
        Success button
      </Button>
      <Button type={'danger'}>
        Danger button
      </Button>
      <Button disabled>
        Disabled button
      </Button>
    </SectionRow>
  </Section>
);

export default ButtonSection;
