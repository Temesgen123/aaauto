import React from 'react';
import Navbar from '../components/Navbar';
import OurServices from '../components/Services/OurServices';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="mt-24  p-2 md:p-3 absolute left-0 right-0">
      <Navbar />
      <OurServices />
      <Footer />
    </div>
  );
};

export default Services;
