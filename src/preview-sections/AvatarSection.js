import React from 'react';
import { Section, SectionRow } from './Section';
import Avatar from '../components/avatar';

const user = {
// eslint-disable-next-line max-len
  avatarUrl: 'https://s3-alpha-sig.figma.com/img/2f67/52b9/b33bbe8dc24a4792f0df1eece848af90?Expires=1557705600&Signature=bwMcuCqf65J4LqQeGpVAw~8ZeKvoFYD0ijLTFf7tgPWNKYPnz~WXnW~hwDtAmwgUWOXXntF1YNpj8705Tkefd71CG7E6IBPsdEAlFNLT05lu6f3heH5e6Zi8quZISzJqSiQEOwnuMCnE5RkIKrJoXDdStyZ9WVNYaoUj8I9cvsIk2I5ZIY-u87soslZ1FoGRyQKHfFmi0zxmlD9VXLrnMY0rY0sKW2LdptJAyw19S~jtjQ7vpat9OmZFKZMcqcFGi~h8eeTMMZEherjCn6U7Pe-gBRfUwfK-CavQwYvBeqHB9nqaVxZYS9lYE67ZWLnQzjdH~iv5C3weAdsB23np4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  rate: 4.3,
};

const AvatarSection = () => (
  <Section title={'Avatars'}>
    <SectionRow title='Small'>
      <Avatar url={user.avatarUrl} size='sm'/>
      <Avatar url={user.avatarUrl} rate={user.rate} size='sm'/>
    </SectionRow>
    <SectionRow title='Middle'>
      <Avatar url={user.avatarUrl} size='md'/>
      <Avatar url={user.avatarUrl} rate={user.rate} size='md'/>
    </SectionRow>
    <SectionRow title='Large'>
      <Avatar url={user.avatarUrl} size='lg'/>
      <Avatar url={user.avatarUrl} rate={user.rate} size='lg'/>
    </SectionRow>
  </Section>
);

export default AvatarSection;
