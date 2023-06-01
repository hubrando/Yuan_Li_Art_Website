import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

export interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const { id } = useParams<{ id?: string }>();
  const location = useLocation();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const importImages = async () => {
      const imageFiles = import.meta.glob('./src/assets/*.{jpg,jpeg,png,gif}');
      const urls = await Promise.all(
        images.map(async (image) => {
          const resolvedImageUrl = imageFiles[image];
          if (resolvedImageUrl) {
            const module = await resolvedImageUrl();
            return (module as { default: string }).default;
          }
          return null;
        })
      );
      setImageUrls(urls.filter((url) => url !== null) as string[]);
    };

    importImages();
  }, [images]);

  const currentIndex = id ? imageUrls.indexOf(id) : -1;

  const prevImage = currentIndex > 0 ? imageUrls[currentIndex - 1] : undefined;
  const nextImage = currentIndex < imageUrls.length - 1 ? imageUrls[currentIndex + 1] : undefined;

  return (
    <div>
      <div>
        {prevImage && (
          <Link to={`/${prevImage}`} replace>
            Previous
          </Link>
        )}
        {nextImage && (
          <Link to={`/${nextImage}`} replace>
            Next
          </Link>
        )}
      </div>
      <div>
        {id && <img src={id} alt="" />}
      </div>
    </div>
  );
};

export default ImageCarousel;