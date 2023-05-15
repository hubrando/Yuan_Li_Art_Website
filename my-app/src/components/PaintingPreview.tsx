import { Link } from 'react-router-dom';
import { Painting } from '../../App';

interface PaintingPreviewProps {
  paintings: Painting[];
}

export default function PaintingPreview({ paintings }: PaintingPreviewProps) {
  return (
    <div>
      <h2>Here are some paintings by Yuan Li.</h2>
      {paintings.map((painting) => (
        <div key={painting.id}>
          <div className="painting-preview-headers">
            <h3>{painting.title}</h3>
            <Link to={`/paintings/${painting.id}`}>
              <img src={painting.imageUrl} alt={painting.title} />
            </Link>
            By {painting.artist}
          </div>
          <br />
          <div className='painting-preview-description'>
            Description: {painting.description}
          </div>
        </div>
      ))}
    </div>
  );
}
