/* eslint-disable react/display-name */
import React, { useState } from 'react';
import { Section, SectionRow } from './Section';
import {
  Tab,
  TabsBody,
  TabsContainer,
  TabsHeader,
} from '../components/tabs';
import Label from '../components/label';

export const tabs1 = [
  {
    label: 'First tab',
    value: 'tab1',
    content: 'Tab 1 Content',
  }, {
    label: 'Second tab',
    value: 'tab2',
    content: 'Tab 2 Content',
  }, {
    label: 'Third tab',
    value: 'tab3',
    content: 'Tab 3 Content',
  }];

export const tabs2 = [
  {
    label: 'First tab',
    value: 'tab1',
    content: 'Tab 1 Content',
  }, {
    label: 'Second tab',
    value: 'tab2',
    content: 'Tab 2 Content',
  }, {
    label: 'Third tab',
    value: 'tab3',
    content: 'Tab 3 Content',
  }, {
    label: 'Disabled tab',
    value: 'tab4',
    disabled: true,
    content: 'Disabled Content',
  }];

export const tabs3 = [
  {
    label: 'First tab',
    value: 'tab1',
    content: 'Tab 1 Content',
  }, {
    label: 'Second tab',
    value: 'tab2',
    marked: true,
    content: 'Tab 2 Content',
  }, {
    label: 'Third tab',
    value: 'tab3',
    content: 'Tab 3 Content',
  }, {
    label: 'Fourth tab',
    value: 'tab4',
    marked: true,
    content: 'Tab 4 Content',
  }];

const TabsSection = () => {
  const [selectedValue1, selectTab1] = useState(tabs1[0].value);
  const [selectedValue2, selectTab2] = useState(tabs2[3].value);
  const [selectedValue3, selectTab3] = useState(tabs3[3].value);
  const selectedTab1 = (tabs1 || []).find(
    ({value}) => selectedValue1 === value);
  const selectedTab2 = (tabs2 || []).find(
    ({value}) => selectedValue2 === value);
  const selectedTab3 = (tabs3 || []).find(
    ({value}) => selectedValue3 === value);

  return (
    <Section title={'Tabs'}>
      <SectionRow title='First tabs'>
        <TabsContainer>
          <TabsHeader>
            {(tabs1 || []).map(tab => (
              <Tab
                key={tab.value}
                selected={tab.value === selectedValue1}
                label={tab.label}
                value={tab.value}
                onSelect={selectTab1}
              />
            ))}
          </TabsHeader>
          <TabsBody>
            <Label value={selectedTab1.content}/>
          </TabsBody>
        </TabsContainer>
      </SectionRow>
      <SectionRow title='Second tabs'>
        <TabsContainer>
          <TabsHeader>
            {(tabs2 || []).map(tab => (
              <Tab
                key={tab.value}
                selected={tab.value === selectedValue2}
                label={tab.label}
                value={tab.value}
                disabled={tab.disabled}
                onSelect={selectTab2}
              />
            ))}
          </TabsHeader>
          <TabsBody>
            <Label value={selectedTab2.content}/>
          </TabsBody>
        </TabsContainer>
      </SectionRow>
      <SectionRow title='Third tabs'>
        <TabsContainer>
          <TabsHeader>
            {(tabs3 || []).map(tab => (
              <Tab
                key={tab.value}
                selected={tab.value === selectedValue3}
                label={tab.label}
                value={tab.value}
                marked={tab.marked}
                disabled={tab.disabled}
                onSelect={selectTab3}
              />
            ))}
          </TabsHeader>
          <TabsBody>
            <Label value={selectedTab3.content}/>
          </TabsBody>
        </TabsContainer>
      </SectionRow>
    </Section>
  );
};

export default TabsSection;
