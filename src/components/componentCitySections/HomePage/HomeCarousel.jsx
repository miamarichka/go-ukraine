/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './HomeCarouselCSS.css';
import { GalleryWrapper } from './HomeCarousel.styled';

export const HomeCarousel = ({ images }) => (
  <GalleryWrapper>
    <ImageGallery
      items={images}
      autoPlay={false}
      showThumbnails={false}
      showBullets
      showPlayButton={false}
    />
  </GalleryWrapper>

);

HomeCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape),
};

HomeCarousel.defaultProps = {
  images: [
    {
      original: 'https://ukraine.ua/wp-content/uploads/2020/09/Lviv-market-square.Ruslan-Lytvyn.shutterstock-1536x1024.jpg',
      thumbnail: 'https://ukraine.ua/wp-content/uploads/2020/09/Lviv-market-square.Ruslan-Lytvyn.shutterstock-1536x1024.jpg',
    },
    {
      original: 'https://cdn.turkishairlines.com/m/3ca6c0776a640b70/original/1400_500.jpg',
      thumbnail: 'https://cdn.turkishairlines.com/m/3ca6c0776a640b70/original/1400_500.jpg',
    },
    {
      original: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Operniy-1.jpg/1200px-Operniy-1.jpg',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Operniy-1.jpg/1200px-Operniy-1.jpg',
    },
  ],
};
