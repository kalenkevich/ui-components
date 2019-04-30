import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import Radio from '../components/radio';

export const optionGroup1 = [{
  label: 'Option 1',
  value: 'value1',
}, {
  label: 'Option 2',
  value: 'value2',
}, {
  label: 'Option 3',
  value: 'value3',
}, {
  label: 'Option 4',
  value: 'value4',
}, {
  label: 'Option 5',
  value: 'value5',
}];

export const optionGroup2 = [{
  label: 'Option 1',
  value: 'value1',
}, {
  label: 'Option 2',
  value: 'value2',
  disabled: true,
}, {
  label: 'Option 3',
  value: 'value3',
}, {
  label: 'Option 4',
  value: 'value4',
  disabled: true,
}, {
  label: 'Option 5',
  value: 'value5',
}];

const RadioSection = () => {
  const [selectedValue1, setValue1] = useState(optionGroup1[0].value);
  const [selectedValue2, setValue2] = useState(optionGroup2[0].value);

  return (
    <Section title={'Radio'}>
      <SectionRow title={'Group 1'}>
        <div>
          {(optionGroup1 || []).map(option => (
            <Radio
              key={option.value}
              label={option.label}
              value={option.value}
              selectedValue={selectedValue1}
              group='group1'
              onChange={setValue1}
            />
          ))}
        </div>
      </SectionRow>
      <SectionRow title={'Group 2 (with disabled options)'}>
        <div>
          {(optionGroup2 || []).map(option => (
            <Radio
              key={option.value}
              label={option.label}
              value={option.value}
              disabled={option.disabled}
              selectedValue={selectedValue2}
              group='group2'
              onChange={setValue2}
            />
          ))}
        </div>
      </SectionRow>
    </Section>
  );
};

export default RadioSection;
