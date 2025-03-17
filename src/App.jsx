import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Health from './components/Health';
import About from './components/About';
import Stress from './components/disease/Stress';
import Diabetes from './components/disease/Diabetes';
import Lungs from './components/disease/Lungs';
import Thyroid from './components/disease/Thyroid';
import Genhealth from './components/disease/Genhealth';
import Sleep from './components/disease/Sleep';

const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/health" element={<Health />} />
          <Route path="/about" element={<About />} />

          <Route path="/Stress" element={<Stress />} />
          <Route path="/Diabetes" element={<Diabetes />} />
          <Route path="/Lungs" element={<Lungs />} />
          <Route path="/Thyroid" element={<Thyroid />} />
          <Route path="/Genhealth" element={<Genhealth />} />
          <Route path="/Sleep" element={<Sleep />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App; 