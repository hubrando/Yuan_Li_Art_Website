import { Link } from 'react-router-dom';
import { Painting } from '../../App';

export interface PaintingPreviewProps {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  artist: string;
}

export default function PaintingPreview(props: PaintingPreviewProps) {
  const { id, title, imageUrl, description, artist } = props;

  return (
    <div>
      <div className="painting-preview-headers">
        <h2>{title}</h2>
        <Link to={`/paintings/${id}`}>
          <img src={imageUrl} alt={title} />
        </Link>
        By {artist}
      </div>
      <br></br>
      <div className='painting-preview-description'>
        Description: {description}
      </div>
    </div>
  );
}
