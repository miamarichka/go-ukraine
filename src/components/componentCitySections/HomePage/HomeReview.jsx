/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Stars } from '../../Icons/Stars.svg';
import {
  AvatarWrapper,
  DescWrapper,
  ProfileAvatar, ProfileLocation, ProfileName,
  ReviewBox, ReviewContainer,
  ReviewDescription, ReviewScope, ReviewTitle, UserImg,
} from './HomeReview.styled';

export const HomeReview = ({ reviews }) => {
  const reviewsToRender = reviews.length < 2 ? HomeReview.defaultProps.reviews : reviews;

  return (
    <ReviewContainer>
      {reviewsToRender.map((review) => {
        const { rvw_title: title,
          rvw_description: desc,
          user_avatar: avatar,
          user_name: name,
          user_location: location,
          user_point: point,
          user_img: img,
          id } = review;

        return (
          <ReviewBox key={id}>
            <AvatarWrapper>
              <ProfileAvatar src={avatar} alt="" />
              <ProfileName>{name}</ProfileName>
              <ProfileLocation>{location}</ProfileLocation>
            </AvatarWrapper>
            <DescWrapper>
              <ReviewTitle>{title}</ReviewTitle>
              <ReviewScope>
                <span>
                  {point}
                  {' '}
                  <Stars />
                </span>
              </ReviewScope>
              <ReviewDescription>
                {desc}
              </ReviewDescription>
            </DescWrapper>
            {img.map(picture => <UserImg src={picture} alt="Lutsk" key={picture} />)}
          </ReviewBox>
        );
      })}
    </ReviewContainer>
  );
};

HomeReview.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape),
};

const defaultReviews = [
  {
    header: ` The home of my soul`,
    id: 1111,
    profile_photo: 'https://i.pinimg.com/originals/f9/a3/6e/f9a36ee6f4469602253a72f64dae60fe.jpg',
    rating: 5,
    text: `Is a fantastic destination that I would highly recommend to anyone.
        Its stunning architecture, rich history, bustling nightlife,
        and delicious cuisine make for an unforgettable experience.`,
    user: 'John',
    location: 'California, USA',
  },
  {
    header: ` In I felt at home from the moment I arrived.`,
    id: 1112,
    profile_photo: 'https://images.saymedia-content.com/.image/t_share/MTc2MjY1NDMzOTM3MTU5MzQx/square-face-women-celebrities.jpg',
    rating: 5,
    text: `The city itself is a true gem, with stunning architecture and a rich cultural history. 
    The vibrant colors of the buildings and the intricate designs of the 
    cathedrals left me in awe.It was amazing to see how the city had preserved its heritage.`,
    user: 'Olivia',
    location: 'Texas, USA',
  },
];

HomeReview.defaultProps = {
  reviews: defaultReviews,
};
