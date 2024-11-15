import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/About/AboutUs';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-green-600 mt-24">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
