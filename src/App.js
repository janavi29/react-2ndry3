import React from 'react';
import './style.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Carousel from './carousel';
import Cards from './cards';


export default function App2() {
  return (
    <Router>
      <Navbar />
      <Home/>
      <Carousel/>
      <Cards/>
    </Router>
  );
}
