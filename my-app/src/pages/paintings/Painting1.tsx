import React from 'react';
import '../index.css';

const Painting1: React.FC = () => {
  return (
    <div className="painting-image">
      <h1>Painting 1</h1>
      <img src="https://www.theartist.me/wp-content/uploads/2015/07/The-Starry-Night.jpg" alt="Painting 1" />
      <p>This is the first painting!</p>
    </div>
  );
};

export default Painting1;
