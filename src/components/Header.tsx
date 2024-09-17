'use client'

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000000;
  color: #FF4600;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #FF4600;
  text-decoration: none;
  &:hover {
    color: #ff4500;
  }
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <h1>Lucid Samuel</h1>
    <Nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/talks">Talks</NavLink>
      <NavLink href="/musings">Musings</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;
