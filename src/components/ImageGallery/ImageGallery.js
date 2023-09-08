import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImagesList } from './ImageGallery.styled';

export const ImageGallery = ({ imagesArr }) => {
  return (
    <ImagesList>
      {imagesArr.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ImagesList>
  );
};
