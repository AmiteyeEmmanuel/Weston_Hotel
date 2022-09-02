import React from 'react';
import styled from 'styled-components';

function Title({ value }) {
  return (
  <Div>
    <h1>{value}</h1>
  </Div>
);
}

const Div = styled.div `
     position: relative;
     h1{
      position: absolute;
      transform: translateX(-30%) translateY(12vw) rotate(90deg);
      color: var(--Secondary-color);
      font-weight: 500;
      margin-top: 6rem;
      text-transform: uppercase;
      font-size: 6rem;
     }

     @media Screen and (min-width:280px) and (max-width: 1080px) {
      h1{
        transform: none;
        font-size: 3rem;
        margin-top: -5rem;
        text-align: center;
        margin-left: 70px;
      }
     }
`

export default Title