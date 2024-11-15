import React from 'react';
import Navbar from '../components/Navbar';
import OurServices from '../components/Services/OurServices';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="bg-green-600 mt-24">
      <Navbar />
      <OurServices />
      <Footer />
    </div>
  );
};

export default Services;
