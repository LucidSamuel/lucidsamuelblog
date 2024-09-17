'use client'

import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.section`
  background-color: #1a2744;
  color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  margin: 0; // Remove any default margins
`;

const MeHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #ff4500;
    margin-top: 0.5rem;
  }
`;

const MainHeading = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const LargeText = styled.p`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: underline;
  &:hover {
    color: #ff4500;
  }
`;

const AboutMe: React.FC = () => (
  <AboutMeContainer>
    <MeHeading>me ...</MeHeading>
    <MainHeading>I work in Developer Relations at Irys, & I love building products.</MainHeading>
    <Paragraph>
    Over the last 8 years I've worked as a software engineer, engineering manager, startup founder and also led developer-focused communities. I often <Link href="#">write</Link> technical articles about my interests. It's my way of transforming complex concepts into digestible insights for fellow developers.
    </Paragraph>
    <Paragraph>
    My journey into the world of tech began unusually early. At just 9 years old, I was tapping away at keyboards in the local cyber cafe, writing my first lines of code. This early passion led me to explore various corners of the tech world throughout my early teens. By 15, I had already secured my first internship, cementing my path in software engineering.     </Paragraph>
    <Paragraph>
    Currently, I'm a cofounder at <Link href='https://evm.ink'>Evm Ink</Link>, building toolings to scale Ethereum. Previously, I served as a DevRel engineer at o(1) labs, focusing on privacy scaling with zero-knowledge proofs for Mina Protocol, and at <Link href='https://dfinity.org'>Dfinity</Link> for the Internet Computer Protocol. I also founded Kingdom, a DeFi Infrastructure platform, which was later acquired and Spydar Africa, an AI and Robotics service company with the Nigerian Airforce on our clientele.</Paragraph>
    <Paragraph>
    Beyond the code screens, you'll catch me teeing off the golf course, grappling in MMA sessions, or rallying on the tennis court.
    </Paragraph>
    <LargeText>
      And now I obsess over how to inspire devs and make their lives easier.
    </LargeText>
    <Paragraph>
      There's lots more info in <Link href="#">my resume</Link>, and my <Link href="#">GitHub</Link>
    </Paragraph>
  </AboutMeContainer>
);

export default AboutMe;
