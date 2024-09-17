'use client'

import React from 'react';
import GlobalStyle from '../styles/globalStyles';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
