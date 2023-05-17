/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BtnStyled } from '../../../utils/buttonStyled';
import {
  CuisinesItem,
  CuisinesList,
  CuisinesTitle,
  FavoriteSelectedSvg,
  FavoriteSvg,
  ImgWrapper,
  MoreLink,
  RestaurantBox,
  RestaurantCuisinesBox,
  RestaurantDescription,
  RestaurantDetailsBox,
  RestaurantImage,
  RestaurantName,
  ShortDescItem,
  ShortDescList,
  SpanPoint,
  StarsSvg,
} from './RestaurantItem.styled';
import FavoriteContext from '../../../api/context/favoriteContext';

function cutTextDesc(text) {
  const shortedText = text.length > 270 ? `${text.slice(0, 140)}...` : text;

  return shortedText;
}

function getRandomRating() {
  return ((Math.random() * 100) / 100 + 4).toFixed(1);
}

export const RestaurantItem = ({
  image,
  price,
  desc,
  name,
  id,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteContext = useContext(FavoriteContext);
  
  const clickHandler = () => {
    if (isFavorite) {
      setIsFavorite(false);
      favoriteContext.removeFavoriteItem(id, 'restaurant')
    } else {
      setIsFavorite(true);
      const favoriteRestaurant = {
         image,
         desc,
         name,
         id,
         category: 'restaurant',
      }
      favoriteContext.addFavoriteItem(favoriteRestaurant);
    }
  }

  return (
  <RestaurantBox>
    <ImgWrapper>
      <RestaurantImage src={image} alt={name} />
        {isFavorite ? <FavoriteSelectedSvg onClick={clickHandler}/>
          : <FavoriteSvg onClick={clickHandler} />}
    </ImgWrapper>
    <RestaurantDetailsBox>
      <RestaurantName>{name}</RestaurantName>
      <ShortDescList>
        <ShortDescItem>
          {getRandomRating()}
          {' '}
          <StarsSvg />
        </ShortDescItem>
        <ShortDescItem><SpanPoint /></ShortDescItem>
        <ShortDescItem>Open Now</ShortDescItem>
        <ShortDescItem><SpanPoint /></ShortDescItem>
        <ShortDescItem>{price || '$$ - $$$'}</ShortDescItem>
      </ShortDescList>
      <RestaurantDescription>
        {cutTextDesc(desc)}
        <MoreLink
          to="https://www.tripadvisor.com/Restaurants-g294473-Ukraine.html"
          target="_blank"
        >
          MORE
        </MoreLink>
      </RestaurantDescription>
      <RestaurantCuisinesBox>
        <div>
          <CuisinesTitle>Cuisines</CuisinesTitle>
          <CuisinesList>
            <CuisinesItem>Ukrainian</CuisinesItem>
            <CuisinesItem>Eastern European</CuisinesItem>
            <CuisinesItem>European</CuisinesItem>
          </CuisinesList>
        </div>
        <BtnStyled>Open in Maps</BtnStyled>
      </RestaurantCuisinesBox>
    </RestaurantDetailsBox>
  </RestaurantBox>
)
};

RestaurantItem.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
