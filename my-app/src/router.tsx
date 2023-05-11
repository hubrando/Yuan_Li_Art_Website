import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/AboutPage';
import Contact from './components/ContactPage';
import PaintingDetail from './pages/paintings/PaintingDetail';
// import Painting3 from './pages/paintings/Painting3';

const RouterComponent: React.FC = () => {
  return (
    <>
      <Route path="/about" Component={About} />
      <Route path="/contact" Component={Contact} />
      <Route path="/paintings/paintingdetail" Component={PaintingDetail} />
      {/* <Route path="/paintings/3" Component={Painting3} /> */}
    </>
  );
};

export default RouterComponent;