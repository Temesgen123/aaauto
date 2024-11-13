import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import SearchPage from './pages/SearchPage';
import CarsDetails from './components/Cars/CarsDetails';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="aaauto/" element={<Home />} />
          <Route path="aaauto/about" element={<About />} />
          <Route path="aauto/cars" element={<Cars />} />
          <Route path="aaauto/services" element={<Services />} />
          <Route path="aaauto/contactus" element={<Contact />} />
          <Route path="aaauto/search" element={<SearchPage />} />     
          <Route path="aaauto/cardetails" element={<CarsDetails />} />       
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
