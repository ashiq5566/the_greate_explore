import React from 'react'
import styled from 'styled-components';
import Header from '../../includes/Header';
import Title from '../../includes/Title';


function Spotlight() {
  return (
    <MainContainer>
        <Header />
        <Title />
    </MainContainer>
  )
}

export default Spotlight


const MainContainer = styled.div`
  flex-shrink: 0;
  height: 1977px;
  background: var(--bg, linear-gradient(132deg, #111 0%, #1A9B92 100%));
  position: relative; /* Ensure ::before pseudo-element is positioned relative to MainContainer */
  z-index: 0; /* Set z-index to place the ::before pseudo-element below the content */

  &::before {
    content: '';
    position: absolute;
    top: 54%;
    left: 0;
    width: 100px;
    height: 100px;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='327' viewBox='0 0 256 327' fill='none'%3E%3Cpath d='M201.783 0.664062H255.88V326.161H201.783V187.041H55.0412V326.527H0.757812V0.664062H54.855V139.967H201.597L201.783 0.664062Z' fill='white'/%3E%3C/svg%3E");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5; /* Adjust the opacity as desired */
    z-index: -1; /* Set z-index to place the ::before pseudo-element below the content */
  }
`;



