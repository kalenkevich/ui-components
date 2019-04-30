import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import Checkbox from '../components/checkbox';

const CheckboxSection = () => {
  const [checked1, setCheckedState1] = useState(true);
  const [checked2, setCheckedState2] = useState(false);
  const [checked3, setCheckedState3] = useState(false);

  return (
    <Section title={'Checkboxes'}>
      <SectionRow>
        <Checkbox checked={checked1} onChange={setCheckedState1} label='Checked'/>
      </SectionRow>
      <SectionRow>
        <Checkbox checked={checked2} onChange={setCheckedState2} label='Unchecked'/>
      </SectionRow>
      <SectionRow>
        <Checkbox checked={checked3} onChange={setCheckedState3} label='Disabled' disabled/>
      </SectionRow>
      <SectionRow>
        <Checkbox checked={true} onChange={setCheckedState3} label='Checked and disabled' disabled/>
      </SectionRow>
    </Section>
  );
};

export default CheckboxSection;
