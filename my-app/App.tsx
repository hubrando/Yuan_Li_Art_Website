import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
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
};

function App() {
  const paintings: Painting[] = [
  {
    id: 1,
    title: "Child At Beach",
    imageUrl: "./src/assets/Child at Beach - Copy.jpeg",
    description: "A child walking in shallow water at a beach.",
  },
  {
    id: 2,
    title: "Flower Basket",
    imageUrl: "./src/assets/Flower basket.jpeg",
    description: "Flower Basket.",
  },
  {
    id: 3,
    title: "Hydrangea",
    imageUrl: "./src/assets/Hydrangea.jpeg",
    description: "Hydrangea."
  },
  {
    id: 4,
    title: "Nanjing Road Shanghai",
    imageUrl: "./src/assets/Nanjing Road Shanghai.jpeg",
    description: "Nanjing Road in Shanghai during a rainy night, with its famous neon style lights."
  },
  {
    id: 5,
    title: "Potato Farm",
    imageUrl: "./src/assets/Potato Farm.jpeg",
    description: "Two women picking potatoes on a potato farm, with trees with leaves that are turning yellow and red in the background"
  },
  {
    id: 6,
    title: "Rice Farms",
    imageUrl: "./src/assets/Rice Farms.jpeg",
    description: "Looking down upon rice farms from a crow's eye view. The many different colors give the impression of a rainbow embedded in the landscape."
  },
  {
    id: 7,
    title: "Two Children in a Corn Field",
    imageUrl: "./src/assets/Two Children in a Corn Field.jpeg",
    description: "Two children sitting down and playing a corn field."
  },
  {
    id: 8,
    title: "Two Childen Playing with Paint",
    imageUrl: "./src/assets/Two Children Paint.jpeg",
    description: "Two children playing in the grass. The child on the right has thrown a paint filled balloon at the child left, while staring at the other child expectantly. The child on the left has their back turned to the child on the right, trying not to get paint on their face."
  },
  {
    id: 9,
    title: "A Vase of Roses",
    imageUrl: "./src/assets/Vase of Roses.jpeg",
    description: "A vase of roses in front of a blue background."
  },
  {
    id: 10,
    title: "IMG_2615",
    imageUrl: "./src/assets/IMG_2615.jpeg",
    description: "Write a description here."
  },
  {
    id: 11,
    title: "IMG_2616",
    imageUrl: "./src/assets/IMG_2616.jpeg",
    description: "Write a description here."
  }

  // Add more paintings here
];

  return (
    <BrowserRouter>
      <div>
        <div className='layout'>
          <Nav />
            <Routes>
              <Route path="/" element={<h2 style={{ justifyContent: 'center' }}>Welcome to My Website!!!</h2>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/paintings"
                element={<PaintingDetail paintings={paintings} />}
              />
              <Route
                path="/painting-preview"
                element={<PaintingPreview paintings={paintings} />}
              />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
