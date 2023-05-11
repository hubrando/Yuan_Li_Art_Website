import { Link } from 'react-router-dom';
import '../index.css';

export default function Painting1() {
  return (
    <div>
      <h2>Painting 1</h2>
      <div className="container">
        <Link to="/">
          <img className="painting-preview-headers" src="https://www.theartist.me/wp-content/uploads/2015/07/The-Starry-Night.jpg" alt="Painting 1" />
        </Link>
      </div>
      <p>Yuan Li</p>
      <p>This is the first painting!</p>
    </div>
  );
}
