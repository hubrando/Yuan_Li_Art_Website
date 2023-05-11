import { Link } from 'react-router-dom';
import '../index.css';

export default function Painting2() {
  return (
    <div>
      <h2>Painting 2</h2>
      <div className="painting-preview-headers">
        <Link to="/">
          <img
            src="https://www.example.com/painting2.jpg"
            alt="Painting 2"
          />
        </Link>
        <h3>Artist Name</h3>
        <p>Description of Painting 2</p>
      </div>
    </div>
  );
}
