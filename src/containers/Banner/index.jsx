import React from 'react';
import { FaPinterest, FaTwitter, FaFacebookF } from 'react-icons/fa';

function Banner() {
  return (
    <div
      className="flex items-center max-sm:flex-col mb-10"
      style={{
        height: `calc(min-content + 10vh)`,
      }}
    >
      {/* left-side */}
      <div className="flex flex-col items-center w-1/2 my-10 ">
        <div className="relative flex flex-col items-start justify-center flex-1 lg:px-32 mt-52">
          <div className="absolute -top-24 -z-10">
            <img
              src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/text-theme.webp"
              alt="icon"
              className="w-full h-full "
            />
          </div>
          <div className="flex flex-col uppercase gap-5">
            <h1 className="text-[4em] font-bold uppercase">clean fresh</h1>
            <p className="text-[1.2rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              voluptate!
            </p>
            <input
              type="button"
              value="Buy Now"
              className="px-4 py-3 tracking-[5px] border-2 border-[#231942] hover:bg-[#ff6565] hover:border-[#ff6565] hover:text-white hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out  rounded-full w-fit font-semibold"
            />
          </div>
        </div>
      </div>

      <div className="relative w-1/2 max-h-[100vh] bg-[#d9f1e1] items-center flex max-sm:w-full max-lg:h-auto">
        <img
          src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/slider1.webp"
          alt=""
          className="w-[90%] right-40 max-md:right-0 mt-12 mb-10 "
        />
        <div className="absolute flex gap-6 text-xl bottom-3 right-9">
          <FaPinterest />
          <FaTwitter />
          <FaFacebookF />
        </div>
      </div>
    </div>
  );
}

export default Banner;
