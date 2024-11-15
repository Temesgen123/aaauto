import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/About/AboutUs';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-blue-600">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
