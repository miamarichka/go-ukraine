import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GoUkraine } from '../Icons/GoUkraine.svg';
import './Loader.css';

const GoUkraineSvg = styled(GoUkraine)`
width: 500px;
height: 300;
display: block;
`;

const LoaderWrapper = styled.div`
display: flex;
font-size: 32px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
align-items: center;
justify-content: center;
margin-bottom: 70px;
height: 400px;
`;

export const Loader = () => (
  <LoaderWrapper>
    <GoUkraineSvg
      className="heartbeat"
    />
    <p>Loading...</p>
  </LoaderWrapper>
);
