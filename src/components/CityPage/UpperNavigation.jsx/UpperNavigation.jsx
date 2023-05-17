/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { UpperLinkStyled, UpperLinkStyledBox } from './UpperNavigation.styled';
import { normalizedPathName } from '../../../utils/normalizedPathName';

export const UpperNavigation = ({ city, pathname }) => {
  const path = pathname ?? '';

  return (
    <nav>
      <UpperLinkStyledBox>
        <UpperLinkStyled
          to="/"
          element={<div>Search</div>}
        >
          Search /
        </UpperLinkStyled>
        <UpperLinkStyled
          to={`/${city}`}
          element={(
            <div>
              {city}
            </div>
)}
        >
          {` ${city} / `}
        </UpperLinkStyled>
        <UpperLinkStyled
          to={`/${city}/${path}`}
          element={<div>{path}</div>}
        >
          {normalizedPathName(path)}
        </UpperLinkStyled>
      </UpperLinkStyledBox>
    </nav>
  );
};

UpperNavigation.propTypes = {
  city: PropTypes.string,
  pathname: PropTypes.string,
};
