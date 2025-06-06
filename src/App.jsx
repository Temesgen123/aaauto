import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Scroller/ScrollToTop';
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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cardetails" element={<CarsDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
