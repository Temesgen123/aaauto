import React from 'react';

const FeaturedCard = ({ id, image, name, price }) => {
  return (
    <div
      key={id}
      className="border-2 border-secondary bg-slate-400 rounded-xl mb-2 cursor-pointer hover:scale-90 hover:bg-slate-200 transition duration-300 ease-linear w-30 "
    >
      <div className=''>
        <img
          src={image[0]}
          alt="carimage"
          className="rounded-t-xl max-w-[130px] sm:max-w-[130px] md:max-w-[130px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-semibold  text-[10px] md:text-[12px] pt-1 text-orange-600">
          {name}
        </h1>
        <div className="flex gap-5 pt-1">
          <h2 className="text-[10px] md:text-[12px">Starting at ${price}</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
