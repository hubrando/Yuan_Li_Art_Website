import React from 'react';
import { Link } from 'react-router-dom';

type PaintingPreviewProps = {
  title: string;
  artist: string;
  imageUrl: string;
  description: string;
  id: string;
};

export default function PaintingPreview({
  title,
  artist,
  imageUrl,
  description,
  id,
}: PaintingPreviewProps) {
  return (
    <div className="painting-image">
        <Link to={`/paintings/${id}`} className="painting-image">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{artist}</p>
            <p>{description}</p>
        </Link>
    </div>
  );
}