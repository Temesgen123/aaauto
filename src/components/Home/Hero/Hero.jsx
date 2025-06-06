// import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/images/aaautobanner-m.png';

const Hero = () => {
  return (
    <div className="shadow-lg h-[16vh] md:h-[72vh] relative -mt-5">
      <div className="flex flex-col md:flex-row justify-left px-6 items-center">
        <div className="absolute -left-10 top-1 md:-top-72">
          <img src={heroImage} className="" />
        </div>

        {/* Content section */}
        <div
          className="w-full md:w-2/4 md:space-y-4 space-y-1 mt-5 md:mt-10
        px-0 md:px-6"
        >
          <h1
            className="text-[16px] lg:text-5xl  font-bold leading-tight
          lg:bg-gradient-to-r from-[#fff] to-[#faf9fc] bg-clip-text md:text-transparent backdrop-opacity-50  text-[#fff]"
          >
            Drive into the future.
          </h1>
          <p
            className="text-[12px] lg:text-2xl  font-bold leading-tight
          lg:bg-gradient-to-r from-[#fff] to-[#faf9fc] bg-clip-text md:text-transparent backdrop-opacity-50  text-[#fff]"
          >
            Over 100+ New Cars Available Here.
          </p>
          <p
            className="text-[10px] lg:text-lg  font-bold leading-tight
          lg:bg-gradient-to-r from-[#fff] to-[#faf9fc] bg-clip-text md:text-transparent backdrop-opacity-50  text-[#fff]"
          >
            Explore the latest models and unbeatable offers.
          </p>
          <div className="flex md:gap-8 gap-4  md:py-10 md:mt-0">
            <Link to={'/services'}>
              <button
                className=" border-2  border-[#470cf8] px-2 rounded-md 
              text-[12px]  md:text-[16px] bg-white text-[#010459] font-bold  hover:bg-[#1b0459] hover:text-white scale-95 transition duration-400 ease-linear mt-2 hover:border-slate-100 "
              >
                Explore More
              </button>
            </Link>
            <Link to={'/cars'}>
              <button
                className=" border-2  border-[#470cf8] px-2 rounded-md 
              text-[12px]  md:text-[16px] bg-white text-[#010459] font-bold  hover:bg-[#1b0459] hover:text-white scale-95 transition duration-400 ease-linear mt-2 hover:border-slate-100 "
              >
                See Cars
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
