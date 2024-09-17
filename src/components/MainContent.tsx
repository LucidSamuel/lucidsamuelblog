'use client'

import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import CodeInterface from './CodeInterface';
import TeamSection from './TeamSection';

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
`;

const CodeSection = styled.section`
  grid-column: span 2;
  margin-top: 2rem;
`;

const MainContent: React.FC = () => (
  <MainContainer>
    <Header>
      <Title>Hi, I'm Samuel Akinosho <br/> a software engineer building great developer experiences.</Title>
    </Header>
    <ContentGrid>
      <Column>
        <Subtitle>My simple mission is to make the life of the average developer easy by providing actionable insights through articles, speaking, demos, or whatever else they need to succeed.</Subtitle>
      </Column>
      <Column>
        <Card
          title="Quintessence"
          content="The secret sauce of my work? Making developers' lives a breeze! I'm like a tech-world translator, turning brain-bending concepts into "aha!" moments. Whether I'm scribbling articles, chatting on stage, cooking up demos, or being your personal code whisperer, it's all about helping you crush it in the dev world. Think of me as your coding fairy godparent, sprinkling success dust wherever I go!"
          backgroundColor="#ff4500"
          textColor="white"
        />
      </Column>
      <Column>
        <Card
          title="Flexible Templates"
          content="Adapt code templates to your needs."
          backgroundColor="#fff"
          textColor="#333"
        />
      </Column>
    </ContentGrid>
    <ContentGrid>
      <CodeSection>
        <CodeInterface />
      </CodeSection>
      <Column>
        {/* This column is intentionally left empty to create the two-column layout for the CodeInterface */}
      </Column>
    </ContentGrid>
    <TeamSection />
  </MainContainer>
);

export default MainContent;
