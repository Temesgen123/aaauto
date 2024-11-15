import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/About/AboutUs';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-red-600 mt-28">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
