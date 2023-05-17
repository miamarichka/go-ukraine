/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';

export const BtnWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 686px;
gap: 16px;
`;

export const ButtonCuisine = styled.button`
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
width: 212px;
color: ${props => props.theme.colors.gray};
background-color: transparent;
border: none;
&:hover{
  color: ${props => props.theme.colors.blue};
  font-weight: 600;
};
&:focus{
  color: ${props => props.theme.colors.blue};
  font-weight: 600;
}
`;

export const FilterButtonBlock = styled.div`
text-align: center;
width: 686px;
margin: auto;
margin-bottom: 92px;
`;

const buttons = ['Ukrainian cuisine',
  'Breakfast', 'Bakery', 'Fine dining', 'Seafood'];

export const RestaurantsFilter = () => (
  <FilterButtonBlock>
    <BtnWrapper>
      {buttons.map(button => (
        <ButtonCuisine
          key={button}
        >
          {button}
        </ButtonCuisine>
      ))}
    </BtnWrapper>
  </FilterButtonBlock>
);
