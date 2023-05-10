import PaintingPreview from './src/components/PaintingPreview';
import './App.css';

export default function App() {
  const artist = {
    name: "John Doe",
    bio: "John Doe is a talented artist based in New York City...",
    paintings: [
      {
        id: 2,
        title: "The Red Forest",
        imageUrl: "https://example.com/painting2.jpg",
        description: "A stunning painting of a forest in red hues..."
      },
      // add more paintings as needed
    ]
  };

  return (
    <div>
      <h2 className="center">Welcome to Yuan Li's Website!!!</h2>
      <div>
        {artist.paintings.map(painting => (
          <PaintingPreview key={painting.id} title='Painting 1' artist='Yuan Li' imageUrl='https://www.theartist.me/wp-content/uploads/2015/07/The-Starry-Night.jpg' description='This is the first painting!' id='1' />
        ))}
      </div>
    </div>
  );
}