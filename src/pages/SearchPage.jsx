import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search/Search';
import Footer from '../components/Footer';

const SearchPage = () => {
  return (
    <div className='mt-28  p-2 md:p-3 absolute left-0 right-0'>
    <Navbar />
    <Search />
    <Footer />      
    </div>
  )
}

export default SearchPage;

