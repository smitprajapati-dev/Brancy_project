import React from 'react';
import SearchIcon from '../../../public/icons/search.svg';
import CartIcon from '../../../public/icons/cart.svg';
import PersonIcon from '../../../public/icons/person.svg';

function Header() {
  return (
    <header className="flex items-center w-full z-50 gap-10 px-container fixed">
      <div className=" flex justify-center">
        <a href="#">
          <img
            src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
            alt="headIcon"
            height={70}
            width={70}
          />
        </a>
      </div>
      <nav className="flex-1 ">
        <ul className=" item-center font-semibold gap-10 hidden md:flex ">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#pages">Pages</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className=" flex justify-end gap-9 p-5">
        <button type="button" className="hover:text-[#ff6565]">
          <SearchIcon height={40} width={40} />
        </button>
        <button type="button" className="hover:text-[#ff6565]">
          <CartIcon height={40} width={40} />
        </button>
        <button type="button" className="hover:text-[#ff6565]">
          <PersonIcon height={40} width={40} />
        </button>
      </div>
    </header>
  );
}

export default Header;
