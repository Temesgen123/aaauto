import React, { useState } from 'react';
import aaautoIcon from '../../src/assets/images/aaautoIcon.png';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import SearchBox from './Search/SearchBox';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <header className="bg-[#010c42]  text-white fixed top-0  left-0 right-0 px-5 md:px-4  pt-4 pb-4 w-full  z-10">
      {/* Desktop navigation section */}
      <nav className="container flex justify-between items-center px-2">
        <div className="flex item-center gap-2 md:gap-5">
          <img src={aaautoIcon} width="32px" alt="aaautoIcon" />
          <Link to="/" className="font-bold text-xl">
            AAAutoMart
          </Link>
        </div>
        {/* <div></div> */}
        <div className="hidden md:flex items-center font-medium text-xl gap-8 ">
          <Link
            to="/"
            className="hover:text-[#c9c9e6] hover:scale-90 transition duration-200 ease-linear"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#c9c9e6] hover:scale-90 transition duration-200 ease-linear"
          >
            About
          </Link>
          <Link
            to="/cars"
            className="hover:text-[#c9c9e6] hover:scale-90 transition duration-200 ease-linear"
          >
            Cars
          </Link>
          <Link
            to="/services"
            className="hover:text-[#c9c9e6] hover:scale-90 transition duration-200 ease-linear"
          >
            Services
          </Link>
          <Link
            to="/contactus"
            className="hidden lg:flex border-2 border-[#ccd8ec] text-lg px-4 rounded-md  hover:scale-90 hover:text-[c9c9e6] transition duration-200 ease-linear"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>
      <div className="mt-3">
        <SearchBox />
      </div>
      {/* Responsive section */}
      <div
        className={`${
          menu ? 'translate-x-0' : '-translate-x-full'
        } md:hidden flex flex-col absolute z-10 bg-[#070342]
         text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-500 `}
      >
        <Link
          to="/"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-primary transition duration-200 ease-linear"
        >
          About Us
        </Link>
        <Link to="/cars">Cars</Link>
        <Link to="/services">Services</Link>
        <Link
          to="/contactus"
          className="border-2 w-full max-w-[250px] border-white py-1 px-4 rounded-md mx-auto"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
