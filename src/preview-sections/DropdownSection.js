import React from 'react';
import { Section, SectionRow } from './Section';
import Dropdown, { DropdownItem, DropdownItemSeparator } from '../components/dropdown';

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
      <Dropdown type={'secondary'} label={'Dropdown with option description'} >
        <DropdownItem label='First action' description='First action description'/>
        <DropdownItem label='Second action' description='Second action description'/>
        <DropdownItem label='Third action' description='Third action description'/>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Dropdown with separator'} >
        <DropdownItem label='First action' description='First action description'/>
        <DropdownItem label='Second action' description='Second action description'/>
        <DropdownItemSeparator/>
        <DropdownItem label='Third action' description='Third action description'/>
      </Dropdown>
    </SectionRow>
  </Section>
);

export default DropdownSection;
