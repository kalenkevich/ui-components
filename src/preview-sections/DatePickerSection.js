import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import DatePicker from '../components/datepicker';

const DatePickerSection = () => {
  const [date, setDate] = useState(new Date());
  const options = {
    dates: [{
      value: new Date(),
      label: '',
      tooltip: '',
      className: '',
      selected: true,
      disabled: true,
      onClick: (day) => {

      },
      render: (day, classes) => {

      },
    }],
  };

  return (
    <Section title={'Date pickers'}>
      <SectionRow>
        <DatePicker label='Simple date picker' date={date} onChange={setDate}/>
        <DatePicker label='With options' date={date} onChange={setDate} options={options}/>
        <DatePicker label='With placeholder' placeholder='With placeholder' date={null} onChange={setDate}/>
        <DatePicker label='Success' success date={date} onChange={setDate}/>
        <DatePicker label='Error' error date={date} onChange={setDate}/>
        <DatePicker label='Disabled' disabled date={date} onChange={setDate}/>
      </SectionRow>
    </Section>
  );
};

export default DatePickerSection;
