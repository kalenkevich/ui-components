import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import Input from '../components/input';
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
    <Section title={'Inputs'}>
      <SectionRow>
        <Form transparent>
          <FormSection size={'3'}>
            <Input label='Simple input' {...forInput1}/>
          </FormSection>
          <FormSection size={'3'}>
            <Input label='Password' {...forInput3} placeholder='Password' type='password' />
          </FormSection>
          <FormSection size={'3'}>
            <Input label='With placeholder' {...forInput2} placeholder={'With Placeholder'}/>
          </FormSection>
          <FormSection size={'3'}>
            <Input label='Success' {...forInput4} success/>
          </FormSection>
          <FormSection size={'3'}>
            <Input label='Error' {...forInput5} error/>
          </FormSection>
          <FormSection size={'3'}>
            <Input label='Disabled' {...forInput6} placeholder='Disabled' disabled/>
          </FormSection>
          <FormSection size={'3'}>
            <Input label='With tooltip' {...forInput7} placeholder='With tooltip' tooltip='Tooltip text here'/>
          </FormSection>
        </Form>
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
