import { Route, Routes } from 'react-router-dom';
import About from './src/components/AboutPage';
import Contact from './src/components/ContactPage';
import PaintingDetail from './src/pages/paintings/PaintingDetail';
import PaintingPreview from './src/components/PaintingPreview';
import './App.css';
import Nav from './src/components/nav/Nav';
import { ImageCarouselProps } from './src/components/ImageCarousel';


export type Painting = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}


function App() {
  const paintings: Painting[] = [
    {
      id: 1,
      title: "Flower Basket",
      imageUrl: "src/assets/Flower basket.jpeg",
      description: "A painting of the night sky.",
    },
    {
      id: 2,
      title: "Hydrangea",
      imageUrl: "src/assets/Hydrangea.jpeg",
      description: "A painting of melting clocks.",
    },
    {
      id: 3,
      title: "Child at Beach",
      imageUrl: "src/assets/Child at Beach - Copy.jpeg",
      description: "A painting of a couple kissing.",
    }
  ];

  const images = [
    'src/assets/Flower basket.jpeg',
    'src/assets/Hydrangea.jpeg',
    'src/assets/IMG_0116.jpeg',
    // Add more image URLs here
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
