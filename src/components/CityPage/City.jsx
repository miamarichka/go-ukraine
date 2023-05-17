/* eslint-disable no-console */
import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Categories } from './CityCommonNavigation';
import { CityHeader } from './City.styled';
import { Footer } from '../Footer/Footer';
import { Container } from '../../utils/Container.styled';
import { UpperNavigation } from './UpperNavigation.jsx/UpperNavigation';
import { headerContent } from '../../utils/pathHeaderSwitchFunc';

export const City = () => {
  const { city } = useParams();
  const { pathname } = useLocation();

  const currentPage = pathname.split('/')[2];

  return (
    <>
      <Container>
        <div>
          <UpperNavigation
            city={city}
            pathname={currentPage}
          />
        </div>
        <CityHeader>
          {headerContent(city, currentPage)}
        </CityHeader>
        <Categories city={city} />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
