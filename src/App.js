import logo from './logo.svg';
import React from 'react';
import './App.css';
import AboutSection from './AboutSection';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    
<div className="App">
        <Home/>
        <Routes >
          <Route path='/home'  element={Home} />
          <Route element={AboutSection} path='/about'/>
          <Route element={Service} path='/service'/>
          <Route element={Portfolio} path='/portfolio'/>
          <Route element={Contact} path='/contact'/>
        </Routes>

    </div>

  );
}

export default App;
