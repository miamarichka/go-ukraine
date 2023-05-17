/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HotelItem } from './HotelItem';

export const HotelListStyled = styled.div`
margin-top: 26px;
`;

export const HotelList = ({ hotels }) => (
  <HotelListStyled>
    {hotels.map((hotel) => {
      const { name,
        image,
        description,
        price,
        location,
        id,
        view_deal: deal } = hotel;

  const onClick = (id) => {
  
}
      
      return (
        <HotelItem
          key={name}
          id={id}
          name={name}
          description={description}
          location={location}
          image={image}
          price={price}
          deal={deal}
          favoriteHandleClick={onClick}
        />
      );
    })}
  </HotelListStyled>
);

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape),
};

HotelList.defaultProps = {
  hotels: [
    {
      name: 'Khreschatyk City Hotel',
      location: 'https://www.google.com/maps/search/Готелі/@49.2194456,24.8816852,6.08z/data=!4m2!2m1!6e3',
      image: 'https://static-new.lhw.com/HotelImages/Final/LW3601/lw3601_28070673_720x450.jpg',
      price: '3,678',
      description: 'Located on the main Kiev street, between the European Square and the Independence Square in Kiev,Khreschatyk Hotel offers rooms with free WiFi and satellite TV.Guests are offered free access to the gym... ',
      deal: 'https://www.booking.com/',
    },
  ],
};
