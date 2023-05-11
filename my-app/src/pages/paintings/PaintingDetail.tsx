import { useParams } from 'react-router-dom';
import { Painting } from '../../../App';
import PaintingDetails from './PaintingDetails';

export interface PaintingDetailProps {
  paintings?: Painting[];
}

export default function PaintingDetail({ paintings }: PaintingDetailProps) {
  const { id } = useParams<{ id: string }>();

  // Find the painting object that matches the id
  const painting: Painting | undefined = paintings?.find(
    (painting) => painting.id === (typeof id === 'string' ? parseInt(id) : undefined)
  );

  return painting ? (
    <PaintingDetails paintings={paintings} />
  ) : (
    <div>No painting found for id {id}</div>
  );
}
