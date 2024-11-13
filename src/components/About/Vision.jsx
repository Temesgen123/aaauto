import React from 'react';
import img from '../../assets/images/ourvision.webp';

const Vision = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-1 md:mt-5 px-2 md:px-5 mt-5">
        Our <span className="text-blue-700 ">Vision</span>
      </h1>
      <div className="flex flex-col  md:flex-row-reverse item-center md:gap-12 ">
        {/* image section */}
        <div className="w-full md:w-[60%] my-auto ">
          <img src={img} alt="image" className="rounded-lg max-w-full" />
        </div>
        {/* content section */}
        <div className="w-full md:w-full space-y-1 pt-6 mt-2 md:p-0">
          <p className="text-sm lg:text-base pl-5">
            Our vision is to be the leading dealership in automotive market in
            our area, recognized for our exceptional customer care, diverse
            selection of vehicles, competitive price, loyalty to customers and
            the community, and commitment to innovation and sustainability in
            the automotive industry.
          </p>{}              
          <p className="text-sm lg:text-base pl-5">
            {' '}
            With 25 years in the automotive industry, we have built a reputation
            for reliability, integrity, and exellence. Our team of automotive
            experts brings decades of experience, ensuring that you receive
            knowledgeable advice, whether you are buying, selling, or
            maintaining your vehicle.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Vision;

// const Vision = () => {
//   return (
//     <div className="flex flex-col justify-center md:flex-row item-center gap-5 mt-8">
//       {/* content section */}
//       <div className="w-full space-y-4">
//         <div className="bg-red-500">
//           <h1 className="text-xl font-bold">
//             Our <span className="text-blue-700">Vision</span>
//           </h1>
//           <p className="text-sm lg:text-base">
//             {' '}
//             &quot;To be the leading dealership in automotive market in our area,
//             recognized for our exceptional customer care, diverse selection of
//             vehicles, competitive price, loyalty to customers and the community,
//             and commitment to innovation and sustainability in the automotive
//             industry.&quot;
//           </p>
//           <p className="text-sm lg:text-base">
//             {' '}
//             We are customer-focused, ethical, and community-oriented company and
//             we strive to grow through sustainability and innovation.
//           </p>
//         </div>
//         <div className="w-full md:w-2/5 my-auto">
//           <img src={img} alt="image" className="rounded-lg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vision;
