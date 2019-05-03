import React from 'react';
import { Section, SectionRow } from './Section';
import Dropdown, { DropdownItem } from '../components/dropdown';

const DropdownSection = () => (
  <Section title={'Dropdowns'}>
    <SectionRow>
      <Dropdown type={'primary'} label={'Primary Dropdown'}>
        <DropdownItem>
          First action
        </DropdownItem>
        <DropdownItem>
          Second action
        </DropdownItem>
        <DropdownItem>
          Third action
        </DropdownItem>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Secondary Dropdown'}>
        <DropdownItem>
          First action
        </DropdownItem>
        <DropdownItem>
          Second action
        </DropdownItem>
        <DropdownItem>
          Third action
        </DropdownItem>
      </Dropdown>
      <Dropdown type={'success'} label={'Success Dropdown'}>
        <DropdownItem>
          First action
        </DropdownItem>
        <DropdownItem>
          Second action
        </DropdownItem>
        <DropdownItem>
          Third action
        </DropdownItem>
      </Dropdown>
      <Dropdown type={'info'} label={'Info Dropdown'}>
        <DropdownItem>
          First action
        </DropdownItem>
        <DropdownItem>
          Second action
        </DropdownItem>
        <DropdownItem>
          Third action
        </DropdownItem>
      </Dropdown>
      <Dropdown type={'warning'} label={'Warning Dropdown'}>
        <DropdownItem>
          First action
        </DropdownItem>
        <DropdownItem>
          Second action
        </DropdownItem>
        <DropdownItem>
          Third action
        </DropdownItem>
      </Dropdown>
      <Dropdown type={'danger'} label={'Danger Dropdown'}>
        <DropdownItem>
          First action
        </DropdownItem>
        <DropdownItem>
          Second action
        </DropdownItem>
        <DropdownItem>
          Third action
        </DropdownItem>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Disabled Dropdown'} disabled>
        <DropdownItem>
          First action
        </DropdownItem>
        <DropdownItem>
          Second action
        </DropdownItem>
        <DropdownItem>
          Third action
        </DropdownItem>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Dropdown With Disabled options'}>
        <DropdownItem disabled>
          First action
        </DropdownItem>
        <DropdownItem>
          Second action
        </DropdownItem>
        <DropdownItem disabled>
          Third action
        </DropdownItem>
      </Dropdown>
      <Dropdown type={'secondary'} label={'Separate Dropdown'} separate>
        <DropdownItem>
          First action
        </DropdownItem>
        <DropdownItem>
          Second action
        </DropdownItem>
        <DropdownItem>
          Third action
        </DropdownItem>
      </Dropdown>
    </SectionRow>
  </Section>
);

export default DropdownSection;
