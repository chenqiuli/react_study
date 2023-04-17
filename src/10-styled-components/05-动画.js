import React from 'react';
import styled, { keyframes } from 'styled-components';

const box = keyframes`
  from {
    transform: rotate(0deg) 
  }
  to {
    transform: rotate(360deg)
  }
`;
const DivStyled = styled.div`
  width: 100px;
  height: 100px;
  line-height: 100px;
  background: pink;
  text-align: center;
  animation: ${box} 1s infinite 0s
`;

export default function App () {
  return (
    <div>
      App

      <DivStyled>动画</DivStyled>
    </div>
  );
}
