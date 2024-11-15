import React from 'react';
import ContactUs from '../components/ContactUs/ContactUs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className='mt-24'>
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
