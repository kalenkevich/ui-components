import React from 'react';
import { Section, SectionRow } from './Section';
import Dropdown, { DropdownItem } from '../components/dropdown';

const DropdownSection = () => (
  <Section title={'Dropdowns'}>
    <SectionRow>
      <Dropdown type={'primary'} label={'Primary Dropdown'}>
        <DropdownItem label='First action'/>
        <DropdownItem label='Second action'/>
        <DropdownItem label='Third action'/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Secondary Dropdown'}>
        <DropdownItem label='First action'/>
        <DropdownItem label='Second action'/>
        <DropdownItem label='Third action'/>
      </Dropdown>
      <Dropdown type={'success'} label={'Success Dropdown'}>
        <DropdownItem label='First action'/>
        <DropdownItem label='Second action'/>
        <DropdownItem label='Third action'/>
      </Dropdown>
      <Dropdown type={'info'} label={'Info Dropdown'}>
        <DropdownItem label='First action'/>
        <DropdownItem label='Second action'/>
        <DropdownItem label='Third action'/>
      </Dropdown>
      <Dropdown type={'warning'} label={'Warning Dropdown'}>
        <DropdownItem label='First action'/>
        <DropdownItem label='Second action'/>
        <DropdownItem label='Third action'/>
      </Dropdown>
      <Dropdown type={'danger'} label={'Danger Dropdown'}>
        <DropdownItem label='First action'/>
        <DropdownItem label='Second action'/>
        <DropdownItem label='Third action'/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Disabled Dropdown'} disabled>
        <DropdownItem label='First action'/>
        <DropdownItem label='Second action'/>
        <DropdownItem label='Third action'/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Dropdown With Disabled options'}>
        <DropdownItem disabled label='First action'/>
        <DropdownItem label='Second action'/>
        <DropdownItem disabled label='Third action'/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Separate Dropdown'} separate>
        <DropdownItem label='First action'/>
        <DropdownItem label='Second action'/>
        <DropdownItem label='Third action'/>
      </Dropdown>
    </SectionRow>
  </Section>
);

export default DropdownSection;
