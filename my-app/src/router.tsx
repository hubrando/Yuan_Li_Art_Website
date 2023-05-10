import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/AboutPage';
import Contact from './components/ContactPage';
import Painting1 from './pages/paintings/Painting1';
import Painting2 from './pages/paintings/Painting2';
// import Painting3 from './pages/paintings/Painting3';

const RouterComponent: React.FC = () => {
  return (
    <>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/contact" Component={Contact} />
      <Route path="/paintings/1" Component={Painting1} />
      <Route path="/paintings/2" Component={Painting2} />
      {/* <Route path="/paintings/3" Component={Painting3} /> */}
    </>
  );
};

export default RouterComponent;