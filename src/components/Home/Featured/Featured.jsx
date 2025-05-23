import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FeaturedCard from './FeaturedCard.jsx';
import carsData from '../../../CarsData.jsx';

const Featured = () => {
  const featuredCars = carsData.filter((car) => car.featured === true);
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
    <div className="container mt-2 md:mt-12">      
      <div className="mt-36 md:-mt-32">
        <Slider {...settings}>
          {featuredCars.map((item) => (
            <FeaturedCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Featured;
