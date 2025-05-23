import React from 'react';
import Navbar from '../components/Navbar';
import OurCars from '../components/Cars/OurCars';
import Footer from '../components/Footer';
import Brands from '../components/Home/Brands/Brands';
import OurCarsM from '../components/Cars/OurCrasM';

const Cars = () => {
  return (
    <div className='mt-28  p-2 md:p-3 absolute left-0 right-0'>
      <Navbar />
      <div className='hidden md:flex'>
        <OurCars />
      </div>
      <div className='md:hidden'>
        <OurCarsM />
      </div>
      <Brands />
      <Footer />
    </div>
  );
};

export default Cars;
