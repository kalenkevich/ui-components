import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import CurrencyInput from '../components/currency-input';
import Form, { FormSection } from '../components/form';

export const currencies = [{
  label: 'BYN',
  value: 'BYN',
}, {
  label: 'USD',
  value: 'USD',
}, {
  label: 'EUR',
  value: 'EUR',
}];

const InputSection = () => {
  const forInput1 = getForInput();
  const forInput2 = getForInput();
  const forInput3 = getForInput();
  const forInput4 = getForInput();
  const forInput5 = getForInput();
  const forInput6 = getForInput();
  const forInput7 = getForInput();

  return (
    <Section title={'Currency Inputs'}>
      <SectionRow>
        <Form transparent>
          <FormSection size={'3'}>
            <CurrencyInput label='Simple input'{...forInput1}/>
          </FormSection>
          <FormSection size={'3'}>
            <CurrencyInput label='Password' {...forInput3} placeholder='Password' type='password' />
          </FormSection>
          <FormSection size={'3'}>
            <CurrencyInput label='With placeholder' {...forInput2} placeholder={'With Placeholder'}/>
          </FormSection>
          <FormSection size={'3'}>
            <CurrencyInput label='Success' {...forInput4} success/>
          </FormSection>
          <FormSection size={'3'}>
            <CurrencyInput label='Error' {...forInput5} error/>
          </FormSection>
          <FormSection size={'3'}>
            <CurrencyInput label='Disabled' {...forInput6} placeholder='Disabled' disabled/>
          </FormSection>
          <FormSection size={'3'}>
            <CurrencyInput label='With tooltip' {...forInput7} placeholder='With tooltip' tooltip='Tooltip text here'/>
          </FormSection>
        </Form>
      </SectionRow>
    </Section>
  );
};

export const getForInput = (options) => {
  const initialValue = { value: 0, currency: 'BYN' };
  const [price, onChange] = useState(initialValue);

  return {
    price,
    onChange,
    currencies,
    ...options,
  };
};

export default InputSection;
