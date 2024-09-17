'use client'

import React from 'react';
import styled from 'styled-components';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const MemberContainer = styled.div`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const MemberName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const MemberRole = styled.p`
  margin: 0;
  color: #666;
`;

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => (
  <MemberContainer>
    <MemberImage src={imageUrl} alt={name} />
    <MemberName>{name}</MemberName>
    <MemberRole>{role}</MemberRole>
  </MemberContainer>
);

export default TeamMember;
