import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/About/AboutUs';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="mt-28  p-2 md:p-3 absolute left-0 right-0">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
