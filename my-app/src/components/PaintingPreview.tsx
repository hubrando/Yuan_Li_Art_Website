import { Link } from 'react-router-dom';

interface PaintingPreviewProps {
  title: string;
  artist: string;
  imageUrl: string;
  description: string;
  id: number;
}

export default function PaintingPreview(props: PaintingPreviewProps) {
  return (
    <div>
      <div className="painting-preview-headers">
          <h2>{props.title}</h2>
          <Link to={`/painting/${props.id}`}>
              <img src={props.imageUrl} alt={props.title} />
          </Link>
        <br></br>
        By {props.artist}
      </div>
      <br></br>
      <div className='painting-preview-description'>
        Description: {props.description}
      </div>
    </div>
  );
}
