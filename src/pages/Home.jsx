// import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Home/Hero/Hero';
import Featured from '../components/Home/Featured/Featured';
import NewArrivals from '../components/Home/NewArrivals/NewArrivals';
import Footer from '../components/Footer';
import TopRated from '../components/Home/TopDeals/TopRated';
import Brands from '../components/Home/Brands/Brands';

const Home = () => {
  return (
    <div className="md:mt-20 mt-28 mx-auto p-2 md:p-3 absolute left-0 right-0">
      <Navbar />
      <Hero />
      <Featured />
      <NewArrivals />
      <TopRated />
      <Brands />
      <Footer />
    </div>
  );
};
export default Home;
