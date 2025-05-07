import React from 'react';
// import img from '../../../assets/images/homePageImage0001.png'
import img from '../../..//assets/images/aaautoIcon.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="shadow-lg  heropage  h-[22vh] md:h-[90vh] relative md:bg-slate-100">
      <div className="container flex flex-col md:flex-row justify-left px-6 items-center">
        {/* Content section */}
        <div
          className="w-full md:w-2/4 space-y-[2px] md:space-y-5 md:mt-24 mt-6 relative 
        px-12 md:px-12 "
        >
          <h1
            className="text-[16px] lg:text-5xl font-bold leading-tight
          lg:bg-gradient-to-r from-[#fff] to-[#faf9fc] bg-clip-text md:text-transparent backdrop-opacity-50  text-[#fff]"
          >
            Drive into the future.
          </h1>
          {/* <div className='bg-[#fff] rounded-full w-16 h-16 absolute right-20 top-[25px] z-20 opacity-30 hover:blur-md shadow-[200px] hover:scale-150 ' >{}</div> */}
          <h2 className=" text-[8px] lg:text-2xl font-bold text-[#f4f4f6] md:text-[#f4f4f6]">
            Over 100+ New Cars Available Here.
          </h2>
          <p
            className="text-[6px] lg:text-base font-bold text-[#f4f4f6]
          ] md:text-[#f4f4f6]"
          >
            Explore the latest models and unbeatable offers.
          </p>
          <div className="flex md:gap-8 gap-4 ">
            <Link to={'/aaauto/services'}>
              <button
                className="bg-[#1b0459] px-2 rounded-md font-bold border-2 
              text-[10px] md:text-[16px] text-white hover:scale-95 hover:bg-white hover:text-[#1b0459] hover:border-blue-900 transition duration-400 ease-linear mt-2"
              >
                Explor More
              </button>
            </Link>
            <Link to={'/aaauto/cars'}>
              <button
                className=" border-2  border-[#470cf8] px-2 rounded-md 
              text-[10px]  md:text-[16px] bg-white text-[#010459] font-bold  hover:bg-[#1b0459] hover:text-white scale-95 transition duration-400 ease-linear mt-2 hover:border-slate-100 "
              >
                See Cars
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="w-full md:w-2/4 mt-4 rounded-2xl  h-full p-12 bg-red-500">
          <img src={img} alt="img" className="rounded-xl w-24 hidden" />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
