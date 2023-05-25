import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

export interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const { id } = useParams<{ id?: string }>();
  const location = useLocation();
  const currentIndex = images.indexOf(id || '');

  const prevImage = images[currentIndex - 1];
  const nextImage = images[currentIndex + 1];

  return (
    <div>
      <div>
        {prevImage && (
          <Link to={`${prevImage}`} replace>
            Previous
          </Link>
        )}
        {nextImage && (
          <Link to={`${nextImage}`} replace>
            Next
          </Link>
        )}
      </div>
      <div>
        <img src={id} alt="" />
      </div>
    </div>
  );
};

export default ImageCarousel;
