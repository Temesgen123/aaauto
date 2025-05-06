import React from 'react';
import Slider from 'react-slick';

import { useNavigate } from 'react-router-dom';
import { SiToyota } from 'react-icons/si';
import { SiNissan } from 'react-icons/si';
import { SiPeugeot } from 'react-icons/si';
import { SiHonda } from 'react-icons/si';
import { SiMitsubishi } from 'react-icons/si';
import { SiHyundai } from 'react-icons/si';
import { SiMercedes } from 'react-icons/si';
import { SiMazda } from 'react-icons/si';
import { SiBmw } from 'react-icons/si';
import { SiVolkswagen } from 'react-icons/si';
import { SiVolvo } from 'react-icons/si';
import { SiSuzuki } from 'react-icons/si';
import { SiRenault } from 'react-icons/si';
import { SiFord } from 'react-icons/si';
import { SiKia } from 'react-icons/si';
import { SiCadillac } from 'react-icons/si';
import { SiTesla } from 'react-icons/si';
import { SiChevrolet } from 'react-icons/si';
import { SiJaguar } from 'react-icons/si';

const carBrands = [
  { iconName: SiTesla, brandName: 'TESLA' },
  { iconName: SiMercedes, brandName: 'MERCEDES' },
  { iconName: SiFord, brandName: 'FORD' },
  { iconName: SiToyota, brandName: 'TOYOTA' },
  { iconName: SiNissan, brandName: 'NISSAN' },
  { iconName: SiHonda, brandName: 'HONDA' },
  { iconName: SiMitsubishi, brandName: 'Mitsubishi' },
  { iconName: SiVolkswagen, brandName: 'Volkswagen' },
  { iconName: SiKia, brandName: 'KIA' },
  { iconName: SiChevrolet, brandName: 'Chevrolet' },
  { iconName: SiCadillac, brandName: 'CADILLAC' },
  { iconName: SiJaguar, brandName: 'JAGUAR' },
  { iconName: SiRenault, brandName: 'RENAULT' },
  { iconName: SiVolvo, brandName: 'VOLVO' },
  { iconName: SiSuzuki, brandName: 'SUZUKI' },
  { iconName: SiHyundai, brandName: 'HYUNDAI' },
  { iconName: SiMazda, brandName: 'MAZDA' },
  { iconName: SiBmw, brandName: 'BMW' },
  { iconName: SiPeugeot, brandName: 'Peugeot' },
];

const Brands = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    Infinite: true,
    slideToShow: 1, //3
    slideToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: true,
    pauseOnHover: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024, //1024
        settings: {
          dots: true,
          Infinite: true,
          slideToShow: 3, //3
          slideToScroll: 1, //3
          centerMode: false, //added
          // intialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slideToShow: 2,
          slideToScroll: 1, //2
          // intialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slideToShow: 1,
          slideToScroll: 1,
          // intialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="bg-slate-100 mt-8 px-3 py-2 shadow-sm mx-auto">
      <h1 className="p-5 text-center text-2xl font-semibold mb-3">
        Select by brand
      </h1>
      {/* <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-15 gap-1">
        {carBrands.map((brand) => (
          <div
            key={brand.brandName}
            className="bg-[#010c42] w-full text-center flex justify-center rounded-3xl"
          >
            {' '}
            <button className="p-1 w-full max-w-[64px] sm:max-w-[72px] md:max-w-full">
              <div className=" bg-slate-100 rounded-lg hover:bg-[#8d97dc] hover:text-[#ff0000] hover:scale-95 transition duration-300 ease-linear hover:shadow-xl hover:shadow-[#6a6262] hover:backdrop-blur-xl hover:bg-opacity-40  max-w-full">
                {' '}
                <h1
                  className="text-center font-semibold
                 max-w-full text-[2vw] sm:text-[1vw]"
                >
                  {brand.brandName}
                </h1>
                <div
                  className="flex justify-center hover:text-white"
                  onClick={(e) => {
                    {
                      e.preventDefault();
                      navigate({
                        pathname: '/aaauto/search',
                        search: `query=${brand.brandName}`,
                      });
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  <brand.iconName
                    className="carIcon"                    
                    style={{ color: '#000', fontSize: '50px' }} 
                  />
                </div>
              </div>
            </button>
          </div>
        ))}
      </div> */}
      <div className="">
        <Slider {...settings}>
          {carBrands.map((brand) => (
            <div
              key={brand.brandName}
              className="md:bg-[#7080af] text-center flex justify-center rounded-xl"
            >
              {' '}
              <button className="p-1 w-full max-w-[64px] sm:max-w-[72px] md:max-w-full">
                <div className="min-w-32 rounded-lg hover:bg-[#8d97dc] hover:text-[#ff0000] hover:scale-95 transition duration-300 ease-linear hover:shadow-xl hover:shadow-[#6a6262] hover:backdrop-blur-xl hover:bg-opacity-40  max-w-full">
                  {' '}
                  <h1
                    className="text-center font-semibold
                 max-w-full text-[2vw] sm:text-[1vw]"
                  >
                    {brand.brandName}
                  </h1>
                  <div
                    className="flex justify-center hover:text-white"
                    onClick={(e) => {
                      {
                        e.preventDefault();
                        navigate({
                          pathname: '/aaauto/search',
                          search: `query=${brand.brandName}`,
                        });
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        });
                      }
                    }}
                  >
                    <brand.iconName
                      className="carIcon"
                      md:style={{
                        color: '#fff',
                        fontSize: '72px',
                        background: '#7080af',
                      }}
                      style={{
                        color: '#f00',
                        fontSize: '90px',
                        background: '#7080af',
                        borderRadius: '8px',
                        maxWidth: '72px',
                      }}
                    />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
