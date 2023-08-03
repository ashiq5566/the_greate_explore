import React from 'react'
import Spotlight from './main/Spotlight'
import styled from 'styled-components';


function Home() {
  return (
    <MainContainer>
        <Spotlight/>
    </MainContainer>
  )
}

export default Home

const MainContainer = styled.div`
    width: 100%;
    height: 10201px;
`;