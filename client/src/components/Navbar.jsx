import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MagicLand from '../assets/MagicLand.png';
import '../components/Navbar.css'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={MagicLand} className='flex items-center justify-center mb-2 md:mb-0 h-12 w-52' alt="Magic Land Logo" />
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-blue-400 dark:hover:bg-blue-700 dark:focus:ring-gray-600"
            aria-expanded={showDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`toggle items-center gap-3  ${showDropdown && 'hidden'}`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link to="#" className="block py-2 px-3 text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 hover:text-black" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 text-blue-700 rounded md:hover:bg-transparent md:border-0 hover:text-black md:p-0">About</Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 text-blue-700 rounded md:hover:bg-transparent md:border-0 hover:text-black md:p-0">Services</Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 text-blue-700 rounded md:hover:bg-transparent md:border-0 hover:text-black md:p-0">Pricing</Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 text-blue-700 rounded md:hover:bg-transparent md:border-0 hover:text-black md:p-0">Contact</Link>
              </li>
              
              <li>
                <Link to={'/signup'}> <button className="flex items-center justify-center md:mt-0 mr-3 px-3 py-2 md:px-4 md:py-2 h-9 w-auto text-white transition duration-500 ease-out bg-blue-700 rounded-md hover:bg-blue-800 hover:ease-in">Sign up</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
