import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import DatePicker, { DateRangePicker } from '../components/datepicker';
import Form, { FormSection } from '../components/form';

const DatePickerSection = () => {
  const options = {
    dates: [{
      value: new Date(),
      label: '',
      tooltip: '',
      className: '',
      selected: true,
      disabled: true,
    }],
  };
  const forDatePicker1 = getForDatePicker('Simple date picker');
  const forDatePicker2 = getForDatePicker('With options');
  const forDatePicker3 = getForDatePicker('With placeholder');
  const forDatePicker4 = getForDatePicker('Success');
  const forDatePicker5 = getForDatePicker('Error');
  const forDatePicker6 = getForDatePicker('Disabled');
  const forDatePicker7 = getForDatePicker('With tooltip');

  const forDateRangePicker1 = getForDateRangePicker('Simple date range picker');

  return (
    <Section title={'Date pickers'}>
      <SectionRow title={'Date picker'}>
        <Form transparent>
          <FormSection size='3'>
            <DatePicker {...forDatePicker1}/>
          </FormSection>
          <FormSection size='3'>
            <DatePicker {...forDatePicker2} options={options}/>
          </FormSection>
          <FormSection size='3'>
            <DatePicker {...forDatePicker3} date={null} placeholder={'With placeholder'}/>
          </FormSection>
          <FormSection size='3'>
            <DatePicker {...forDatePicker4} success/>
          </FormSection>
          <FormSection size='3'>
            <DatePicker {...forDatePicker5} error/>
          </FormSection>
          <FormSection size='3'>
            <DatePicker {...forDatePicker6} disabled/>
          </FormSection>
          <FormSection size='3'>
            <DatePicker {...forDatePicker7} tooltip='Tooltip text here'/>
          </FormSection>
        </Form>
      </SectionRow>
      <SectionRow title={'Date range picker'}>
        <DateRangePicker {...forDateRangePicker1}/>
      </SectionRow>
    </Section>
  );
};

export const getForDatePicker = (label) => {
  const [date, setDate] = useState(new Date());

  return {
    date,
    onChange: setDate,
    label,
  };
};

export const getForDateRangePicker = (label) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return {
    startDate,
    endDate,
    onChange: (newDate) => {
      setStartDate(newDate.startDate);
      setEndDate(newDate.endDate);
    },
    label,
  };
};

export default DatePickerSection;
