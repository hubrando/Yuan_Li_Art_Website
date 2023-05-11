import './src/index.css';
import { Link } from 'react-router-dom';

export default function App() {
  const artist = {
    name: "John Doe",
    bio: "John Doe is a talented artist based in New York City...",
    paintings: [
      {
        id: 1,
        title: "The Starry Night",
        imageUrl: "https://www.theartist.me/wp-content/uploads/2015/07/The-Starry-Night.jpg",
        description: "This is the first painting!"
      },
      {
        id: 2,
        title: "Guernica",
        imageUrl: "https://i0.wp.com/www.oneonta.edu/faculty/farberas/arth/Images/110images/sl24_images/guernica_details/guernica_all.jpg?zoom=2",
        description: "A large 1937 oil painting by Spanish artist Pablo Picasso. It is one of his best-known works, regarded by many art critics as the most moving and powerful anti-war painting in history."
      },
      // add more paintings as needed
    ]
  };

  return (
    <div>
      <h1 className="title">Welcome to Yuan Li's Website!!!</h1>
      <div className="painting-preview-headers">
        {artist.paintings.map(painting => (
          <div key={painting.id} className="painting-preview-headers">
            <h2>{painting.title}</h2>
            <Link to={`/paintings/${painting.id}`}>
              <img src={painting.imageUrl} alt={painting.title} />
            </Link>
            <p>By {artist.name}</p>
            <p>{painting.description}</p>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
}
