import './src/index.css';
import { Link, useNavigate } from 'react-router-dom';
import PaintingPreview from './src/components/PaintingPreview';


export type Painting = {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  description: string;
};

// Artist type that could be implemented if more than one artist is on the website.
// export type Artist = {
//   name: string;
//   bio: string;
//   paintings: Painting[];
// };

const paintings: Painting[] = [
    {
      id: 1,
      title: "The Starry Night",
      artist: "Leonardo Da Vinci",
      imageUrl: "https://www.theartist.me/wp-content/uploads/2015/07/The-Starry-Night.jpg",
      description: "This is the first painting!"
    },
    {
      id: 2,
      title: "Guernica",
      artist: "Pablo Picasso",
      imageUrl: "https://i0.wp.com/www.oneonta.edu/faculty/farberas/arth/Images/110images/sl24_images/guernica_details/guernica_all.jpg?zoom=2",
      description: "A large 1937 oil painting by Spanish artist Pablo Picasso. It is one of his best-known works, regarded by many art critics as the most moving and powerful anti-war painting in history."
    },
    // add more paintings as needed
];

export default function App() {

  return (
    <div>
      <h1 className="title">Welcome to Yuan Li's Website!!!</h1>
      <div className="painting-preview-headers">
        {paintings.map(painting => (
          <div key={painting.id} className="painting-preview-headers">
            <PaintingPreview key={painting.id} id={painting.id} title={painting.title} artist={painting.artist} imageUrl={painting.imageUrl} description={painting.description} />
          </div>
        ))}
      </div>
      <br></br>
      <Link to="/paintings/:artist.paintings.id" />
    </div>
  );
}