import React from 'react';
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-[#fafafa]">
      <div className="flex flex-wrap gap-10 mb-10 max-md:flex-col pt-5">
        <div className="flex flex-col flex-1 gap-8 px-20 max-lg:px-5 max-lg:w-full ">
          <img
            src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
            alt="icon"
            className="w-24"
          />
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            aperiam necessitatibus deserunt, tempora totam veniam!
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-10 max-lg:px-5">
          <h3 className="text-[18px] font-bold">Information</h3>
          <ul className="flex flex-wrap flex-1 gap-y-6 ">
            <li className="w-[33%]">
              <a href="#blog">Blog</a>
            </li>
            <li className="w-[33%]">
              <a href="#about_us">About Us</a>
            </li>
            <li className="w-[33%]">
              <a href="#contact">Contact</a>
            </li>
            <li className="w-[33%]">
              <a href="#privacy">Privacy</a>
            </li>
            <li className="w-[33%]">
              <a href="#login">Login</a>
            </li>
            <li className="w-[33%]">
              <a href="#shop">Shop</a>
            </li>
            <li className="w-[33%]">
              <a href="#myaccount">My Account</a>
            </li>
            <li className="w-[33%]">
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 gap-10 px-20 max-lg:p-[20px] mx-lg:w-full">
          <div className="flex flex-col flex-1 gap-6 min-lg:px-[160px]">
            <h3>Social Info</h3>
            <div className="flex gap-5">
              <div className="w-[20%]">
                <FaTwitter />
              </div>
              <div className="w-[20%]">
                <FaFacebook />
              </div>
              <div className="w-[20%]">
                <FaPinterest />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center border-t border-[#e8e8e8] py-[20px] box-border -m-mar-r -m-mar-l ">
        <p>&copy; 2024 Brancy. Made with &#x2764; by Smit Prajapati</p>
      </div>
    </div>
  );
}

export default Footer;
