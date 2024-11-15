import React from 'react';
import Navbar from '../components/Navbar';
import OurServices from '../components/Services/OurServices';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="bg-yellow-600 mt-20">
      <Navbar />
      <OurServices />
      <Footer />
    </div>
  );
};

export default Services;
