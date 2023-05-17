import React from 'react';
import styled from 'styled-components';
import { ReactComponent as UkraineLogo } from '../Icons/Ukraine.svg';

const GoUkraineText = styled.h2`
font-weight: 600;
size:32px;
line-height: 44.16px;
color: ${props => props.theme.colors.black};
`;

const UkraineLogoSvg = styled(UkraineLogo)`
height: 57px;
width: 34px;
margin-left: 21px;
`;

export const GoUkraineNav = () => (
  <GoUkraineText>
    Go
    <UkraineLogoSvg />
    kraine
  </GoUkraineText>
);
