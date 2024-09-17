'use client'

import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Button from './Button';
import TeamMember from './TeamMember';

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const TeamSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const MainContent: React.FC = () => (
  <MainContainer>
    <HeroSection>
      <h1>Unlock the Power of AI-Driven Development</h1>
      <p>Experience faster, smarter coding with AI. Streamline your workflow and boost productivity with our tailored tools.</p>
    </HeroSection>
    <CardGrid>
      <Card
        title="Efficient Project Setup"
        content="Transform your development process with automation."
        backgroundColor="#ff4500"
        textColor="white"
      />
      <Card
        title="Flexible Templates"
        content="Adapt code templates to your needs."
      />
      <Card
        title="AI-Powered Code Generation"
        content="Designed to streamline your project and reduce manual coding effort."
        backgroundColor="#333"
        textColor="white"
      />
    </CardGrid>
    <TeamSection>
      <h2>Our team is fueled by technological innovation, working together to overcome challenges and craft meaningful solutions.</h2>
      <Button onClick={() => console.log('Join team clicked')}>Join Our Team</Button>
      <TeamGrid>
        <TeamMember
          name="Alex Morgan"
          role="Founder + CEO"
          imageUrl="/path/to/alex-image.jpg"
        />
        <TeamMember
          name="Quinn Lee"
          role="Founder + CTO"
          imageUrl="/path/to/quinn-image.jpg"
        />
        <TeamMember
          name="Ryan Brooks"
          role="Founding Software Engineer"
          imageUrl="/path/to/ryan-image.jpg"
        />
      </TeamGrid>
    </TeamSection>
  </MainContainer>
);

export default MainContent;
