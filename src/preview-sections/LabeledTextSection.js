import React from 'react';
import { Section, SectionRow } from './Section';
import LabeledText from '../components/labled-text';

export const shortText = {
  label: 'Short text',
  content: 'Some content',
};

export const longText = {
  label: 'Long text',
  // eslint-disable-next-line max-len
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nisl in metus eleifend malesuada vel ac nulla. Aliquam nec elit ut purus ullamcorper dignissim a eu metus. Phasellus eu urna iaculis, sagittis augue at, vulputate ipsum. Fusce convallis laoreet diam, vel placerat sapien sagittis ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque semper arcu eu scelerisque fermentum. Sed ut dictum odio. Donec tincidunt arcu quis ex luctus, elementum accumsan eros imperdiet. Integer elementum consectetur magna. Sed facilisis lorem vel blandit efficitur. Nunc pellentesque leo tortor, id porttitor massa tincidunt at. Mauris purus augue, porttitor in porta et, volutpat at elit. Etiam pharetra, magna laoreet lobortis mattis, odio lectus cursus risus, et semper nisi purus at elit. Mauris pretium congue tellus, ut fringilla felis.',
};

const LabeledTextSection = () => (
  <Section title={'Labeled Text'}>
    <SectionRow>
      <LabeledText
        label={shortText.label}
        content={shortText.content}
      />
    </SectionRow>
    <SectionRow>
      <LabeledText
        label={longText.label}
        content={longText.content}
      />
    </SectionRow>
  </Section>
);

export default LabeledTextSection;
