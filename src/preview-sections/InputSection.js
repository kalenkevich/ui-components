import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import Input from '../components/input';

const InputSection = () => {
  const forInput1 = getForInput();
  const forInput2 = getForInput();
  const forInput3 = getForInput();
  const forInput4 = getForInput();
  const forInput5 = getForInput();
  const forInput6 = getForInput();
  const forInput7 = getForInput();

  return (
    <Section title={'Inputs'}>
      <SectionRow>
        <Input label='Simple input' {...forInput1}/>
        <Input label='Password' {...forInput3} placeholder='Password' type='password' />
        <Input label='With placeholder' {...forInput2} placeholder={'With Placeholder'}/>
        <Input label='Success' {...forInput4} success/>
        <Input label='Error' {...forInput5} error/>
        <Input label='Disabled' {...forInput6} placeholder='Disabled' disabled/>
        <Input label='With tooltip' {...forInput7} placeholder='With tooltip' tooltip='Tooltip text here'/>
      </SectionRow>
    </Section>
  );
};

export const getForInput = (initalValue = '') => {
  const [value, setValue] = useState(initalValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
  };
};

export default InputSection;
