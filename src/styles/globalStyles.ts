'use client'

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

  body {
    font-family: 'Space Mono', monospace;
    color: #FF4600;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #000000;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Mono', monospace;
  }
`;

export default GlobalStyle;
