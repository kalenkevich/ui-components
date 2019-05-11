import React from 'react';
import { Section, SectionRow } from './Section';
import Carousel from '../components/carousel';

const slides = [{
  imageUrl: 'https://s3-alpha-sig.figma.com/img/47b6/b625/04ae657044179abde3455020e99676f2?Expires=1558310400&Signature=em94d5BG6fM1aBWA26p~1cqyMmC4gtVl3I0rpon~VI1BJiexUhi1C-EcVkEsiceq09XuKO-EQ6BuJUzzQM6SiU5phxASApDyj32hQ0CeIJ27Ud9fzAlJdpA8LirGgmEvYEm1FqCr1pekUnbjCVtpKGQndbliBinqB~D0JoLAaA4CkdrYTNKKeOq0My~rG0julFwKoBmt6RM2F2Em3Zcl3wynViULPEFgJp4OF4Z2oKYvWvEsG0~gaCERWJCYthgbFYzBpDeQk-4fnAm6VK5oDv1WZSP7RYZXMtqVoGCkV7UYa1nR5cTdNMoUABglyoSJDUC6EBFm0fJ~lW0RGN3pjA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  title: 'Title 1',
  description: 'Description 1',
}, {
  imageUrl: 'https://s3-alpha-sig.figma.com/img/815d/2b8c/c7de8aaf437c7835f75c8269a31191af?Expires=1558310400&Signature=YG-9CQ8CpURtSC~CVlV9nEvvjad0abSDY4J~Im9DxegrLSfOb-VeOTFpxPGfCAa672nwm81~Z8-P5lD5QR6jdLHzjKTCOPwR1-6vnO1Siuwx8P7fdhe5A1GWR~aDMB6qtoDLRsGGApvz4AUoArKcLGxghy1w4J9ITlVtneKxG~v6D6lpFTutuRdwgMV4LINU50tdiqUsV6hg-2dHhwHVPKvdRKTw9tE9YpPc82F9LrZz057JPw31Smv2oEZ6FYPhGzwt0R~eVk1OdWaQN22MKmIbHwizsHjDt1id~Mf5IqV7zm0KAW98JYXcyfv5lK3sbfHSBRLWW5GhC-j3YoFK~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  title: 'Title 2',
  description: 'Description 2',
}, {
  imageUrl: 'https://s3-alpha-sig.figma.com/img/71e7/54c9/1d8782bbc8160eaa7431eebe5f340099?Expires=1558310400&Signature=NXYjTmgv2p65jhe8hLkY8kNMBrj7Ftyd46D1UGYtKvkhep3q423cm2SJ1sJw2F6eKCv-3o83nCuUfpgH2UrRyhllt6YKkorHul5TvT0Rek8t33I4mUa81dKbg7QUL5KaPH3r~oWQyQ-IlK2yYYuBxbeS8B2aFZ~oTyyBVquYizlUm5mVQbGYt3GFZ70p3lsuk7JIz-wxTB0Tv1NjRwleDFwyv74Yw1duRHtt4NnsWXVBrbxgcrMyhxip74MjzvktCWSO0zJbrDzzgUR9J9QreXSDlZ9-~1ZoyDBeDwuOFiYs~KlMYNTPVFwz2uyPZGCj-B~2l9AzAgOxOJOtcpOb1w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  title: 'Title 3',
  description: 'Description 3',
}];

const ButtonSection = () => (
  <Section title={'Carousel'}>
    <SectionRow>
      <Carousel slides={slides}/>
    </SectionRow>
  </Section>
);

export default ButtonSection;
