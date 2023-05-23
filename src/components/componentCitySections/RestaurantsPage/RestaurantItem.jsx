/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
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
import { useAuth } from '../../../api/zustand/useAuth';
import { cutTextDesc, formatSearchParams, getRandomRating } from '../../../utils/functionsHelpers';
import { useLocation, useSearchParams} from 'react-router-dom';

export const RestaurantItem = ({
  image,
  price,
  desc,
  name,
  id,
  category,
  cuisine,
}) => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("cuisine");
  const { isLoggedIn } = useAuth();
  const favoriteContext = useContext(FavoriteContext);
  const isItemfavorite = favoriteContext.isItemFavorite;
  const [isFavorite, setIsFavorite] = useState(isItemfavorite(id));

  const clickHandler = () => {
    if (isFavorite) {
      setIsFavorite(false);
      favoriteContext.removeFavoriteItem(id, "restaurants");
    } else {
      setIsFavorite(true);
      const favoriteRestaurant = {
        image,
        desc,
        name,
        id,
        category,
      };
      favoriteContext.addFavoriteItem(favoriteRestaurant);
    }
  };

  const isRender = selectedCategory === cuisine || !selectedCategory;

  return (
    isRender && (
      <RestaurantBox>
        <ImgWrapper>
          <RestaurantImage src={image} alt={name} />
          {isLoggedIn &&
            (isFavorite ? (
              <FavoriteSelectedSvg onClick={clickHandler} />
            ) : (
              <FavoriteSvg onClick={clickHandler} />
            ))}
        </ImgWrapper>
        <RestaurantDetailsBox>
          <RestaurantName>{name}</RestaurantName>
          <ShortDescList>
            <ShortDescItem>
              {getRandomRating()} <StarsSvg />
            </ShortDescItem>
            <ShortDescItem>
              <SpanPoint />
            </ShortDescItem>
            <ShortDescItem>Open Now</ShortDescItem>
            <ShortDescItem>
              <SpanPoint />
            </ShortDescItem>
            <ShortDescItem>{price || "$$ - $$$"}</ShortDescItem>
          </ShortDescList>
          <RestaurantDescription>
            {cutTextDesc(desc)}
            <MoreLink
              to='https://www.tripadvisor.com/Restaurants-g294473-Ukraine.html'
              target='_blank'>
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
  );
};

RestaurantItem.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
