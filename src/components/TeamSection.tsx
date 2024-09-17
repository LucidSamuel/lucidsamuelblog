'use client'

import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const TeamSectionContainer = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`;

const TeamDescription = styled.p`
  font-size: 1.5rem;
  color: #333;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.4;
`;

const TeamSection: React.FC = () => (
  <TeamSectionContainer>
    <TeamDescription>
      Our team is fueled by technological innovation, working together to overcome challenges and craft meaningful solutions.
    </TeamDescription>
    <Button onClick={() => console.log('Join team clicked')}>Join Our Team</Button>
  </TeamSectionContainer>
);

export default TeamSection;
