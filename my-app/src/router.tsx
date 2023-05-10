import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/HomePage';

const RouterComponent: React.FC = () => {
  return (
    <Route  path="/" Component={Home} />

  );
};

export default RouterComponent;