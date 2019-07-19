import React from 'react';
import { Section, SectionRow } from './Section';
import Dropdown from '../components/dropdown';
import { OptionItem, OptionItemSeparator } from '../components/options';

const DropdownSection = () => (
  <Section title={'Dropdowns'}>
    <SectionRow>
      <Dropdown type={'primary'} label={'Primary Dropdown'}>
        <OptionItem label='First action' type={'primary'}/>
        <OptionItem label='Second action' type={'primary'}/>
        <OptionItem label='Third action' type={'primary'}/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Secondary Dropdown'}>
        <OptionItem label='First action' type={'secondary'}/>
        <OptionItem label='Second action' type={'secondary'}/>
        <OptionItem label='Third action' type={'secondary'}/>
      </Dropdown>
      <Dropdown type={'success'} label={'Success Dropdown'}>
        <OptionItem label='First action' type={'success'}/>
        <OptionItem label='Second action' type={'success'}/>
        <OptionItem label='Third action' type={'success'}/>
      </Dropdown>
      <Dropdown type={'info'} label={'Info Dropdown'}>
        <OptionItem label='First action' type={'info'}/>
        <OptionItem label='Second action' type={'info'}/>
        <OptionItem label='Third action' type={'info'}/>
      </Dropdown>
      <Dropdown type={'warning'} label={'Warning Dropdown'}>
        <OptionItem label='First action' type={'warning'}/>
        <OptionItem label='Second action' type={'warning'}/>
        <OptionItem label='Third action' type={'warning'}/>
      </Dropdown>
      <Dropdown type={'danger'} label={'Danger Dropdown'}>
        <OptionItem label='First action' type={'danger'}/>
        <OptionItem label='Second action' type={'danger'}/>
        <OptionItem label='Third action' type={'danger'}/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Disabled Dropdown'} disabled>
        <OptionItem label='First action' type={'secondary'}/>
        <OptionItem label='Second action' type={'secondary'}/>
        <OptionItem label='Third action' type={'secondary'}/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Dropdown With Disabled options'}>
        <OptionItem disabled label='First action' type={'secondary'}/>
        <OptionItem label='Second action' type={'secondary'}/>
        <OptionItem disabled label='Third action' type={'secondary'}/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Separate Dropdown'} separate>
        <OptionItem label='First action' type={'secondary'}/>
        <OptionItem label='Second action' type={'secondary'}/>
        <OptionItem label='Third action' type={'secondary'}/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Dropdown with option description'} >
        <OptionItem label='First action' description='First action description'/>
        <OptionItem label='Second action' description='Second action description'/>
        <OptionItem label='Third action' description='Third action description'/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Dropdown with separator'} >
        <OptionItem label='First action' description='First action description'/>
        <OptionItem label='Second action' description='Second action description'/>
        <OptionItemSeparator/>
        <OptionItem label='Third action' description='Third action description'/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Dropdown with tooltip'} tooltip='Tooltip text here'>
        <OptionItem label='First action'/>
        <OptionItem label='Second action'/>
        <OptionItem label='Third action'/>
      </Dropdown>
    </SectionRow>
  </Section>
);

export default DropdownSection;
