import React from 'react';
import {
  GalleryItemWrapper,
  GalleryOverlay,
  GalleryTitle,
  GalleryDescription
} from './GalleryItem.styles';

const GalleryItem = ({ image, title, description }) => {
  return (
    <GalleryItemWrapper>
      <img src={image} alt={title} />
      <GalleryOverlay className="gallery-overlay">
        <GalleryTitle>{title}</GalleryTitle>
        <GalleryDescription>{description}</GalleryDescription>
      </GalleryOverlay>
    </GalleryItemWrapper>
  );
};

export default GalleryItem;