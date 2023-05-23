/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { HomeCarousel } from './HomeCarousel';
import { HomeReview } from './HomeReview';
import { LeaveReviewBtn } from './LeaveReviewBtn';
import {
  HomeTitle, HomeDescription, ReviewSection,
  ReviewSectionTextWrapper, StyledLink
} from './HomeSection.styled';
import { Loader } from '../../Loader/Loader';
import { NotificationFailed } from '../../Notification/Notifications';
import { CityInfoNotification } from '../../Notification/CityInfoNotification';

export const HomeSection = ({ city }) => {
  const [cityData, setCityData] = useState(null);
  const [reviewData, setReviewData] = useState(null);
  const { city: cityParam } = useParams();
  const selectedCity = city || cityParam;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadCityInfo = async() => {
      const cityInLowerCase = selectedCity.toLowerCase();

      try {
        setIsError(false);
        const cityInfoFromServer = await axios.get(`https://64521253bce0b0a0f73bdbe4.mockapi.io/city/${cityInLowerCase}`);
        const cityReviewsFromServer = await axios.get(
          `https://64521253bce0b0a0f73bdbe4.mockapi.io/city/reviews`
        );

        if (cityInfoFromServer.data) {
          setCityData(cityInfoFromServer.data[0]);
          setReviewData(cityReviewsFromServer.data);
        }
      } catch {
        console.log('serverdata error', console.error());
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadCityInfo();

    return () => {
      setCityData(null);
    };
  }, [selectedCity]);

  return (
    <>
      {isError && !isLoading && (
        <CityInfoNotification />
      )}
      {!cityData && isLoading && <Loader />}
      {cityData && (
        <div>
          <HomeTitle>{cityData.title}</HomeTitle>
          <HomeDescription>{cityData.description}</HomeDescription>
          <HomeCarousel images={cityData.images} />
          {!!reviewData.length && (
            <ReviewSection>
              <ReviewSectionTextWrapper>
                <p>
                  Your impressions of
                  {city}
                </p>
                <StyledLink
                  to={`https://www.google.com/search?q=${selectedCity}+ukraine+reviews&oq=${selectedCity}+ukraine+reviews`}
                  target='_blank'>
                  View more
                </StyledLink>
              </ReviewSectionTextWrapper>
              <HomeReview reviews={reviewData} />
              <LeaveReviewBtn />
            </ReviewSection>
          )}
        </div>
      )}
    </>
  );
};
