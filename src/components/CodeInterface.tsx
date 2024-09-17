'use client'

import React from 'react';
import styled from 'styled-components';

const CodeContainer = styled.pre`
  background-color: #1e1e1e;
  color: #d4d4d4;
  padding: 2rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  width: 100%;
  margin: 0;
`;

const Keyword = styled.span`
  color: #569cd6;
`;

const String = styled.span`
  color: #ce9178;
`;

const Comment = styled.span`
  color: #6a9955;
`;

const CodeInterface: React.FC = () => (
  <CodeContainer>
    <Keyword>class</Keyword> LucidSamuel():
    {'\n'}
    {'  '}<Keyword>def</Keyword> __init__(self):
    {'\n'}
    {'    '}self.name = <String>"Samuel Akinosho"</String>
    {'\n'}
    {'    '}self.username = <String>"Lucid Samuel"</String>
    {'\n'}
    {'    '}self.location = <String>"Metaverse"</String>
    {'\n'}
    {'    '}self.twitter = <String>"@LucidSamuel"</String>
    {'\n'}
    {'    '}self.web = <String>"https://samuelakinosho.com"</String>
    {'\n'}
    {'\n'}
    {'  '}<Keyword>def</Keyword> __str__(self):
    {'\n'}
    {'    '}<Keyword>return</Keyword> self.name
    {'\n'}
    {'\n'}
    <Keyword>if</Keyword> __name__ == <String>'__main__'</String>:
    {'\n'}
    {'    '}me = LucidSamuel()
    {'\n'}
    {'    '}<Comment># This is where the magic happens</Comment>
  </CodeContainer>
);

export default CodeInterface;
