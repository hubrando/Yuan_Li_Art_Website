import { useParams } from 'react-router-dom';
import { Painting } from '../../../App';
import { PaintingDetailProps } from './PaintingDetail';

export default function PaintingDetail({ paintings }: PaintingDetailProps) {
  const { id = "" } = useParams<{ id: string }>();

  // Find the painting object that matches the id
  const painting: Painting | undefined = paintings?.find(
    (painting) => painting.id === parseInt(id)
  );

  return (
    <div className='painting-preview-headers'>
      <h2>Title: {painting?.title}</h2>
      <img src={painting?.imageUrl} alt={painting?.title} />
      <p>Artist: {painting?.artist}</p>
      <p>Description: {painting?.description}</p>
    </div>
  );
}


