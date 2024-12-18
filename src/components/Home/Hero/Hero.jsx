import React from 'react';
import img from '../../../assets/images/homePageImage0001.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="shadow-lg  heropage h-[80vh]  md:h-screen relative bg-slate-100 ">
      <div className="container flex flex-col md:flex-row justify-center items-center">
        {/* Content section */}
        <div className="w-full md:w-2/4 space-y-5 md:mt-24 mt-10 relative px-6">
          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight
          lg:bg-gradient-to-r from-[#fff] to-[#000000] bg-clip-text md:text-transparent backdrop-opacity-50  text-[#0000ff]"
          >
            Drive into the future.
          </h1>
          {/* <div className='bg-[#fff] rounded-full w-16 h-16 absolute right-20 top-[25px] z-20 opacity-30 hover:blur-md shadow-[200px] hover:scale-150 ' >{}</div> */}
          <h2 className=" text-xl lg:text-2xl font-bold text-[#0000ff] md:text-[#0000ff]">
            Over 100+ New Cars Available Here.
          </h2>
          <p
            className="text-lg lg:text-base font-bold text-[#0000ff]
          ] md:text-[#0000ff]"
          >
            Explore the latest models and unbeatable offers.
          </p>
          <div className="flex gap-8">
            <Link to={'/aaauto/services'}>
              <button className="bg-[#1b0459] py-1 px-4 rounded-md font-bold border-2 text-white hover:scale-95 hover:bg-white hover:text-[#1b0459] hover:border-blue-900 transition duration-400 ease-linear mt-5">
                Explor More
              </button>
            </Link>
            <Link to={'/aaauto/cars'}>
              <button className=" border-2  border-[#1b0459] py-1 px-4 rounded-md bg-white text-[#010459] font-bold  hover:bg-[#1b0459] hover:text-white scale-95 transition duration-400 ease-linear mt-5">
                See Cars
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/4 mt-4 rounded-2xl  h-full">
          <img src={img} alt="img" className="rounded-xl w-24 hidden" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
