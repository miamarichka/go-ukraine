import React from 'react';
import { CityHeader } from '../components/CityPage/City.styled';

export const headerContent = (cityName, pathName) => {
  switch (pathName) {
    case 'overview':
      return (
        <CityHeader>
          Journey to
          {' '}
          {cityName}
        </CityHeader>
      );
    case 'route':
      return (
        <CityHeader>
          How to get to
          {' '}
          {cityName}
        </CityHeader>
      );
    case 'hotels':
      return (
        <CityHeader>
          Where to stay in
          {' '}
          {cityName}
        </CityHeader>
      );
    case 'restaurants':
      return (
        <CityHeader>
          Where to eat in
          {' '}
          {cityName}
        </CityHeader>
      );
    case 'entertainment':
      return (
        <CityHeader>
          Where to do in
          {' '}
          {cityName}
        </CityHeader>
      );
    default:
      return (
        <CityHeader>
          Journey to
          {' '}
          {cityName}
        </CityHeader>
      );
  }
};
