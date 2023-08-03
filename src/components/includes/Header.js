import React from 'react'
import styled from 'styled-components';
import logo from "../assets/header.png"



function Header() {
  return (
    <MainContainer>
        <H1>
            <img src={logo} alt="Example" />
        </H1>
        <StyledList>
            <StyledListItem>Home</StyledListItem>
            <StyledListItem>AboutUs</StyledListItem>
            <StyledListItem>Destinations</StyledListItem>
            <StyledListItem>ContactUs</StyledListItem>
        </StyledList>
        <Enquiry>Enquiry</Enquiry>
    </MainContainer>
  )
}

export default Header

const MainContainer = styled.div`
    display: flex;
    height: 176.99px;
    padding: 34px 154px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0; 
`;
const H1 = styled.h1`
    width: 143px;
    height: 108.99px;
    flex-shrink: 0;
`;
const StyledList = styled.ul`
    display: flex;
    padding-right: 0px;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
`;
const StyledListItem = styled.li`
    display: flex;
    width: 115px;
    height: 34px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    color: #747474;

    color: var(--neutral-300-paragraph, #747474);
    font-family: DM Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px
`;
const Enquiry = styled.button`
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
