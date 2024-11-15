import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search/Search';
import Footer from '../components/Footer';

const SearchPage = () => {
  return (
    <div className='bg-blue-600'>
    <Navbar />
    <Search />
    <Footer />      
    </div>
  )
}

export default SearchPage;

