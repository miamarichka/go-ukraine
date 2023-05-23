/* eslint-disable max-len */
import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';
import { RestaurantItem } from './RestaurantItem';

export const RestaurantListStyled = styled.div`
margin-top: 26px;
`;

export const RestaurantList = ({ restaurants }) => {

  return (
    <RestaurantListStyled>
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          image={restaurant.image}
          desc={restaurant.description}
          cuisine={restaurant.cuisine}
          category={restaurant.category}
        />
      ))}
    </RestaurantListStyled>
  );};

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(string),
};

RestaurantList.defaultProps = {
  restaurants: [],
};
