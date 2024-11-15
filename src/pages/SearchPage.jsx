import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search/Search';
import Footer from '../components/Footer';

const SearchPage = () => {
  return (
    <div className='mt-20'>
    <Navbar />
    <Search />
    <Footer />      
    </div>
  )
}

export default SearchPage;

