/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Account } from '../Icons/Ellipse.svg';

const AccountSvg = styled(Account)`
position: relative;
height: 66px;
width: 66px;
display: block;
fill:inherit;
`;

const SvgText = styled.span`
position: absolute;
display: block;
top: 50%;
left: 50%;
translate: -50% -50%;
color:inherit;
font-family: Inter;
font-size: 32px;
font-weight: 400;
line-height: 39px;
letter-spacing: 0em;
text-align: left;
`;

const SvgWrapper = styled.div`
position: relative;
`;

export const AccountNav = () => (
  <SvgWrapper>
    <AccountSvg />
    <SvgText>A</SvgText>
  </SvgWrapper>
);
