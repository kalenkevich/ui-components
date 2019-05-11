import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import TextArea from '../components/textarea';

const InputSection = () => {
  const forInput1 = getForInput();
  const forInput2 = getForInput();
  const forInput3 = getForInput();
  const forInput4 = getForInput();
  const forInput5 = getForInput();
  const forInput6 = getForInput();
  const forInput7 = getForInput();

  return (
    <Section title={'Text Areas'}>
      <SectionRow>
        <TextArea label='Simple text area' {...forInput1}/>
        <TextArea label='Password' {...forInput3} placeholder='Password' type='password' />
        <TextArea label='With placeholder' {...forInput2} placeholder={'With Placeholder'}/>
        <TextArea label='Success' {...forInput4} success/>
        <TextArea label='Error' {...forInput5} error/>
        <TextArea label='Disabled' {...forInput6} placeholder='Disabled' disabled/>
        <TextArea label='With tooltip' {...forInput7} placeholder='With tooltip' tooltip='Tooltip text here'/>
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
