/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { HotelList } from './HotelList';
import { InputSection } from './InputSection';
import { Error } from '../../Loader/Error.jsx/Error';
import { Loader } from '../../Loader/Loader';
import { FavoriteProvider } from '../../../api/context/favoriteContext';

export const HotelsSection = ({ city }) => {
  const [hotelData, setHotelData] = useState(null);
  const { city: cityParam } = useParams();
  const selectedCity = city || cityParam;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadHotelsInfo = async() => {
      const cityInLowerCase = selectedCity.toLowerCase();

      try {
        setIsError(false);
        const cityInfoFromServer = await axios.get('https://64521253bce0b0a0f73bdbe4.mockapi.io/city/hotels');

        if (cityInfoFromServer.data) {
          setHotelData(cityInfoFromServer.data);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
        setIsError(false);
      }
    };

    loadHotelsInfo();

    return () => {
      setHotelData(null);
    };
  }, [selectedCity]);

  return (
    <>
      {isError && <Error />}
      {!hotelData && isLoading && <Loader />}
      {hotelData && (
        <div>
          <InputSection />
          <HotelList hotels={hotelData} />
        </div>
      )}
    </>
  );
};
