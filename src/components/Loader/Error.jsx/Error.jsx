import Notiflix from 'notiflix';
import React from 'react';

Notiflix.Notify.init({
  width: '600px',
  position: 'center-center',
  fontSize: '40px',
  fontFamily: 'MacPaw Fixel',
  closeButton: true,
  background: '#FCD800',
});

export const Error = () => (
  <>
    {Notiflix.Notify.failure('Can`t get city information. Please try again')}
  </>
);
