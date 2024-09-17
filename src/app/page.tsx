import React from 'react';
import { Providers } from './providers';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

export default function Home() {
  return (
    <Providers>
      <Header />
      <MainContent />
    </Providers>
  );
}
