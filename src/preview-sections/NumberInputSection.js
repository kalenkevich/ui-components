import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import NumberInput from '../components/number-input';
import Form, { FormSection } from '../components/form';

const InputSection = () => {
  const forInput1 = getForInput();
  const forInput2 = getForInput();
  const forInput3 = getForInput();
  const forInput4 = getForInput();
  const forInput5 = getForInput();
  const forInput6 = getForInput();
  const forInput7 = getForInput();

  return (
    <Section title={'Number Inputs'}>
      <SectionRow>
        <Form transparent>
          <FormSection size={'3'}>
            <NumberInput label='Simple input' {...forInput1}/>
          </FormSection>
          <FormSection size={'3'}>
            <NumberInput label='Password' {...forInput3} placeholder='Password' type='password' />
          </FormSection>
          <FormSection size={'3'}>
            <NumberInput label='With placeholder' {...forInput2} placeholder={'With Placeholder'}/>
          </FormSection>
          <FormSection size={'3'}>
            <NumberInput label='Success' {...forInput4} success/>
          </FormSection>
          <FormSection size={'3'}>
            <NumberInput label='Error' {...forInput5} error/>
          </FormSection>
          <FormSection size={'3'}>
            <NumberInput label='Disabled' {...forInput6} placeholder='Disabled' disabled/>
          </FormSection>
          <FormSection size={'3'}>
            <NumberInput label='With tooltip' {...forInput7} placeholder='With tooltip' tooltip='Tooltip text here'/>
          </FormSection>
        </Form>
      </SectionRow>
    </Section>
  );
};

export const getForInput = (initialValue = 0) => {
  const [value, onChange] = useState(initialValue);

  return {
    value,
    onChange,
  };
};

export default InputSection;
