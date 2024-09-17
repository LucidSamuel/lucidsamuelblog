'use client'

import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  content: string;
  backgroundColor?: string;
  textColor?: string;
}

const CardContainer = styled.div<{ $backgroundColor?: string; $textColor?: string }>`
  background-color: ${props => props.$backgroundColor || '#fff'};
  color: ${props => props.$textColor || '#333'};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  // Remove margin-bottom if it exists
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const CardContent = styled.p`
  font-size: 0.9rem;
`;

const Card: React.FC<CardProps> = ({ title, content, backgroundColor, textColor }) => (
  <CardContainer $backgroundColor={backgroundColor} $textColor={textColor}>
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
  </CardContainer>
);

export default Card;
