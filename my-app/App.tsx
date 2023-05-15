import { Route, Routes } from 'react-router-dom';
import About from './src/components/AboutPage';
import Contact from './src/components/ContactPage';
import PaintingDetail from './src/pages/paintings/PaintingDetail';
import PaintingPreview from './src/components/PaintingPreview';
import './App.css';
import Nav from './src/components/nav/Nav';


export type Painting = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  artist: string;
}


function App() {
  const paintings: Painting[] = [
    {
      id: 1,
      title: "Starry Night",
      imageUrl: "https://www.example.com/starrynight.jpg",
      description: "A painting of the night sky.",
      artist: "Vincent van Gogh"
    },
    {
      id: 2,
      title: "The Persistence of Memory",
      imageUrl: "https://www.example.com/persistenceofmemory.jpg",
      description: "A painting of melting clocks.",
      artist: "Salvador Dali"
    },
    {
      id: 3,
      title: "The Kiss",
      imageUrl: "https://www.example.com/thekiss.jpg",
      description: "A painting of a couple kissing.",
      artist: "Gustav Klimt"
    }
  ];

  return (
    <div className="App">
      <div className="layout">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<div className='center'><h2>Welcome to Yuan Li's Website!!!</h2></div>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/paintings/paintingdetail" element={<PaintingDetail />} />
            <Route path="/painting-preview" element={<PaintingPreview paintings={paintings} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
