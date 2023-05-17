import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Saved } from '../Icons/Heart.svg';

const SavedSvg = styled(Saved)`
height: 32px;
width: 32px;
display: block;
fill: inherit;
`;

export const SavedNav = () => (
  <SavedSvg />
);
