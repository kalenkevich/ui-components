import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import DatePicker, { DateRangePicker } from '../components/datepicker';

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
        <DatePicker {...forDatePicker1}/>
        <DatePicker {...forDatePicker2} options={options}/>
        <DatePicker {...forDatePicker3} date={null} placeholder={'With placeholder'}/>
        <DatePicker {...forDatePicker4} success/>
        <DatePicker {...forDatePicker5} error/>
        <DatePicker {...forDatePicker6} disabled/>
        <DatePicker {...forDatePicker7} tooltip='Tooltip text here'/>
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
