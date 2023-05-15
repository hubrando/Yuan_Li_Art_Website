import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App'
import About from './components/AboutPage';
import Contact from './components/ContactPage';
import PaintingDetail from './pages/paintings/PaintingDetail';
import PaintingPreview from './components/PaintingPreview';
import { Painting } from '../App';

const RouterComponent: React.FC = () => {
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
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/paintings/paintingdetail" element={<PaintingDetail />} />
      <Route path="/painting-preview" element={<PaintingPreview paintings={paintings} />} />
    </Routes>
  );
};

export default RouterComponent;