'use client'

import React from 'react';
import styled from 'styled-components';
import CodeInterface from './CodeInterface';
import AboutMe from './AboutMe';
import TeamSection from './TeamSection';

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0; // Remove horizontal padding
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 1rem; // Add padding to the header
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ContentSection = styled.section`
  width: 100%;
  margin-top: 2rem;
  padding: 0 1rem; // Add consistent padding to all content sections
`;

const MainContent: React.FC = () => (
  <MainContainer>
    <Header>
      <Title>Hi, I'm Samuel Akinosho <br/> a software engineer building great developer experiences.</Title>
    </Header>
    <ContentSection>
      <CodeInterface />
    </ContentSection>
    <ContentSection>
      <AboutMe />
    </ContentSection>
    <ContentSection>
      <TeamSection />
    </ContentSection>
  </MainContainer>
);

export default MainContent;
