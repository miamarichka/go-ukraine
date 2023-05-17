/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Currency,
  HotelBox, HotelDescription, HotelDetailsBox,
  HotelImage, HotelName, HotelPriceBox,
  ImageWrapper,
  LocationLink,
  LocationSvg, Price, PriceWrapper, StarsSvg, TextSvgBox, ViewDealLink, WifiSvg,
} from './HotelItem.styled';
import { FavoriteSelectedSvg, FavoriteSvg, MoreLink } from '../RestaurantsPage/RestaurantItem.styled';
import FavoriteContext from '../../../api/context/favoriteContext';

function cutText(text) {
  const shortedText = text.length > 140 ? `${text.slice(0, 140)}...` : `${text}...`;

  return shortedText;
}

function getRandomNumber() {
  return ((Math.random() * 100) / 100 + 8).toFixed(1);
}

export const HotelItem = ({
  name,
  location,
  image,
  price,
  deal,
  description,
  id,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
   const favoriteContext = useContext(FavoriteContext);

  const clickHandler = () => {
    if (isFavorite) {
      setIsFavorite(false);
      favoriteContext.removeFavoriteItem(id, 'hotel');
    } else {
      setIsFavorite(true);
      const favoriteHotel = {
        image,
        price,
        location,
        deal,
        description,
        name,
        id,
        category: 'hotel',
      };
      favoriteContext.addFavoriteItem(favoriteHotel);
    }
  }
  return (
  <HotelBox>
    <ImageWrapper>
      <HotelImage src={image} alt={name} />
              {isFavorite ? <FavoriteSelectedSvg onClick={clickHandler}/>
          : <FavoriteSvg onClick={clickHandler} />}
    </ImageWrapper>
    <HotelDetailsBox>
      <HotelName>{name}</HotelName>
      <TextSvgBox>
        {getRandomNumber()}
        {' '}
        <StarsSvg />
        {' '}
        stars
      </TextSvgBox>
      <HotelDescription>
        {cutText(description)}
        <MoreLink to={deal}>MORE</MoreLink>
      </HotelDescription>
      <TextSvgBox>
        <LocationSvg />
        <LocationLink to={location} target="_blank">View location</LocationLink>
      </TextSvgBox>
      <TextSvgBox>
        <WifiSvg />
        Free wifi
      </TextSvgBox>
    </HotelDetailsBox>
    <HotelPriceBox>
      <h2>Booking.com</h2>
      <PriceWrapper>
        <Currency>UAH</Currency>
        <Price>{price}</Price>
      </PriceWrapper>
      <ViewDealLink to={deal} target="_blank">View Deal</ViewDealLink>
    </HotelPriceBox>
  </HotelBox>
)
};

HotelItem.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  deal: PropTypes.string,
  favoriteHandleClick: PropTypes.func,
};

HotelItem.defaultProps = {
  name: 'Khreschatyk City Hotel',
  location: 'Great location',
  image: 'https://static-new.lhw.com/HotelImages/Final/LW3601/lw3601_28070673_720x450.jpg',
  price: '3,678',
  description: 'Located on the main Kiev street, between the European Square and the Independence Square in Kiev,Khreschatyk Hotel offers rooms with free WiFi and satellite TV.Guests are offered free access to the gym... ',
  deal: 'https://www.booking.com/',
};
