import React from 'react'
import styled from 'styled-components';


function Title() {
  return (
    <CenteredContainer>
        <MainContainer>
            <Top>
                <Heading>Discover and Enjoy Your New
                Places and Experience
                </Heading>
            </Top>
            <Middle>
                <Caption>
                We are travel agency based in India. ready to provide your dream trip to the nature
                </Caption>
            </Middle>
            <GetStart>
                GetStart
            </GetStart>
                
        </MainContainer>
    </CenteredContainer>
  )
}

export default Title

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Set the height to full viewport height for vertical centering */
`;
const MainContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 131px; 
`;
const Top = styled.div`
    width: 1451px;
`;
const Heading = styled.h1`
    color: var(--neutral-100, #EEE);
    text-align: center;
    font-family: DM Sans;
    font-size: 72px;
    font-style: normal;
    font-weight: 500;
    line-height: 82px;
`;
const Middle = styled.div`
    width: 608px;
`;
const Caption = styled.p`
    color: var(--neutral-button, #ADADAD);
    text-align: center;
    font-family: DM Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
`;
const GetStart = styled.button`
    display: flex;
    width: 288px;
    height: 70px;
    padding: 10px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    background-color:#f0f8ff00;
    border-radius: 6px;
    border: 1px solid var(--neutral-100, #EEE);

    color: var(--neutral-100, #EEE);
    text-align: center;
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
`;