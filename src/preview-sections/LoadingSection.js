import React, { useState, useEffect } from 'react';
import { Section, SectionRow } from './Section';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';

const ButtonSection = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress > 100) {
        setProgress(0);
      } else {
        setProgress(progress + 0.1);
      }
    }, 10);

    return () => clearInterval(intervalId);
  });

  return (
    <Section title='Loading'>
      <SectionRow title='Progress bar'>
        <ProgressBar progress={progress}/>
        <ProgressBar progress={progress} type='success'/>
        <ProgressBar progress={progress} type='info'/>
        <ProgressBar progress={progress} type='warning'/>
        <ProgressBar progress={progress} type='danger'/>
      </SectionRow>
      <SectionRow title='Infinity progress bar'>
        <ProgressBar infinity/>
        <ProgressBar infinity type='success'/>
        <ProgressBar infinity type='info'/>
        <ProgressBar infinity type='warning'/>
        <ProgressBar infinity type='danger'/>
      </SectionRow>
      <SectionRow title='Spinner sizes'>
        <Spinner size='sm'/>
        <Spinner size='md'/>
        <Spinner size='lg'/>
      </SectionRow>
      <SectionRow title='Spinner '>
        <Spinner size='md' type='success'/>
        <Spinner size='md' type='info'/>
        <Spinner size='md' type='warning'/>
        <Spinner size='md' type='danger'/>
      </SectionRow>
    </Section>
  );
};

export default ButtonSection;
