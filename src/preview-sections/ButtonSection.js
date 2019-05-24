import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Section, SectionRow } from './Section';
import Button from '../components/button';

const ButtonSection = () => (
  <Section title={'Buttons'}>
    <SectionRow>
      <Button type={'primary'}>
        Primary button
      </Button>
      <Button type={'secondary'}>
        Secondary button
      </Button>
      <Button type={'secondary'}>
        With Icon
        <FontAwesomeIcon style={{ marginLeft: '5px' }} icon='user'/>
      </Button>
      <Button type={'success'}>
        Success button
      </Button>
      <Button type={'info'}>
        Info button
      </Button>
      <Button type={'warning'}>
        Warning button
      </Button>
      <Button type={'danger'}>
        Danger button
      </Button>
      <Button type={'link'}>
        Link button
      </Button>
      <Button type={'transparent'}>
        Transparent button
      </Button>
      <Button disabled>
        Disabled button
      </Button>
      <Button tooltip='Tooltip text here'>
        With tooltip
      </Button>
      <Button spin>
        Spin button
      </Button>
    </SectionRow>
  </Section>
);

export default ButtonSection;
