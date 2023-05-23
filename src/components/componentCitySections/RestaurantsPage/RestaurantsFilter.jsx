/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { BtnWrapper, FilterButtonBlock, LinkCuisine } from './RestaurantsFilter.styled';

const cuisinesTypes = ['Ukrainian cuisine',
  'Breakfast', 'Bakery', 'Fine dining', 'Seafood'];

export const RestaurantsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const cuisine = searchParams.get('cuisine') || null;

  const handleCuisineClick = (cuisineType) => {
    if (cuisineType === cuisine) {
      searchParams.delete('cuisine');
    } else {
      setSearchParams({ cuisine: cuisineType });
    }
  };

console.log(cuisine);
  return (
    <FilterButtonBlock>
      <BtnWrapper>
        {cuisinesTypes.map((cuisineType) => (
          <LinkCuisine
            to={{
              search: cuisineType !== cuisine ? `?cuisine=${cuisineType}` : "",
            }}
            className={classNames({
              activeLink: cuisine === cuisineType,
            })}
            key={cuisineType}
            onClick={() => handleCuisineClick(cuisineType)}>
            {cuisineType}
          </LinkCuisine>
        ))}
      </BtnWrapper>
    </FilterButtonBlock>
  );
};
