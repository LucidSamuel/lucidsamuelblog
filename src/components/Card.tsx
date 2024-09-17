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
`;

const Card: React.FC<CardProps> = ({ title, content, backgroundColor, textColor }) => (
  <CardContainer $backgroundColor={backgroundColor} $textColor={textColor}>
    <h2>{title}</h2>
    <p>{content}</p>
  </CardContainer>
);

export default Card;
