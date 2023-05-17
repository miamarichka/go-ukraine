import React from 'react';
import { MainWrapper, ContentWrapper } from './Main.styled';
import { AsideColums } from './AsideColums';
import { MainMap } from './MainMap';
import { Container } from '../../utils/Container.styled';

export const Main = () => (
  <MainWrapper>
    <AsideColums />
    <Container>
      <ContentWrapper>
        <MainMap />
      </ContentWrapper>
    </Container>
  </MainWrapper>
);
