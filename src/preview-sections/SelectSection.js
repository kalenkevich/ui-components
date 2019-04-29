import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import Select from '../components/select';

export const options1 = [{
  label: 'Option 1',
  value: 'option1',
}, {
  label: 'Option 2',
  value: 'option2',
}, {
  label: 'Option 3',
  value: 'option3',
}, {
  label: 'Option 4',
  value: 'option4',
}, {
  label: 'Option 5',
  value: 'option5',
}, {
  label: 'Option 6',
  value: 'option6',
}, {
  label: 'Option 7',
  value: 'option7',
}, {
  label: 'Option 8',
  value: 'option8',
}];

export const options2 = [{
  label: 'Option 1',
  value: 'option1',
}, {
  label: 'Option 2',
  value: 'option2',
}, {
  label: 'Option 3',
  value: 'option3',
}, {
  label: 'Option 4',
  value: 'option4',
}];

const InputSection = () => {
  const forSelect1 = getForSelect(options1);
  const forSelect2 = getForSelect(options2);
  const forSelect3 = getForSelect(options1);
  const forSelect4 = getForSelect(options1);
  const forSelect5 = getForSelect(options1);
  const forSelect6 = getForSelect(options1, null);

  return (
    <Section title={'Selects'}>
      <SectionRow>
        <Select label='With a bit of options' {...forSelect2}/>
        <Select label='With a lot of options' {...forSelect1}/>
        <Select label='With placeholder' {...forSelect6} placeholder='With placeholder'/>
        <Select label='Success' {...forSelect4} success/>
        <Select label='Error' {...forSelect3} error/>
        <Select label='Disabled' {...forSelect5} disabled/>
      </SectionRow>
    </Section>
  );
};

export const getForSelect = (options, initialValue) => {
  const [value, setValue] = useState(initialValue !== undefined ? initialValue : (options[0] && options[0].value));
  return {
    value,
    onSelect: option => setValue(option.value),
    options,
  };
};

export default InputSection;
