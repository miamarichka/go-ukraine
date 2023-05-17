/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

import UkraineBird from '../components/Icons/UkraineBird.gif';

const Frame = styled.iframe`
width: 1200px;
height: 600px;
border: white;
margin-left: 100px;
`;

const FrameWrapper = styled.div`
// background-color: #a1d0f0;
width: 1400px;
font-size: 32px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
margin-top: 30px;
margin-bottom: 30px;
`;

const videoOptions = {
  width: '1400',
  height: '800',
};

export const AnimationCity = () => {
  const [videoId, setVideoId] = useState('TUv6EU4Blec');

  return (
    <FrameWrapper>
      <YouTube videoId={videoId} opts={videoOptions} />
      {/* Page in progress...
      <Frame
        title="Parallax SVG Interactive Landscape"
        src="https://www.youtube.com/watch?v=TUv6EU4Blec"
        loading="lazy"
        allowTransparency="true"
        allowfullscreen="true"
      /> */}
    </FrameWrapper>
  );
};
