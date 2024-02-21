import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MagicLand from '../assets/MagicLand.png';
import '../components/Navbar.css';
import { RiHomeHeartLine } from "react-icons/ri";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [buyerHover, setBuyerHover] = useState(false);

  const toggleHover = () => {
    setBuyerHover(!buyerHover);
  };

  return (
    <div className={`shadow-md fixed w-full transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`} style={{ zIndex: 1000 }}>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={MagicLand} className='mb-2 md:mb-0 h-16 w-52 aspect-square object-contain' alt="Magic Land Logo" />
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-blue-400 dark:hover:bg-blue-700 dark:focus:ring-gray-600"
            aria-expanded={showDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 border-none outline-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`toggle items-center md:gap-10 md:flex md:flex-row flex-col flex ${showDropdown && 'hidden'}`}>
            <ul className="text-md font-bold flex flex-col p-4 md:p-0 md:mr-80 mt-4 border w-44 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link to={'/'} className="nav-link" aria-current="page">HOME</Link>
              </li>
              <li>
                <Link to="#" className="nav-link">
                  <div className="dropdown">
                    <button className="dropbtn" onMouseOver={toggleHover}>BUYERS</button>
                    {buyerHover &&
                      <div className="dropdown-content" onMouseOut={toggleHover}>
                        <Link to={'/allproperties'}>Apartment</Link><hr/>
                        <Link to={'/allproperties'}>House</Link><hr/>
                        <Link to={'/allproperties'}>Flat</Link>
                      </div>
                    }
                  </div>
                </Link>
              </li>
              <li>
                <Link to={'/about'} className="nav-link">ABOUT</Link>
              </li>
              <li>
                <Link to="/services" className="nav-link">SERVICES</Link>
              </li>
              <li>
                <Link to={'/contact'} className="nav-link">CONTACT</Link>
              </li>
            </ul>
            <Link to={'/postproperty'}>
            <button className="flex items-center justify-center md:gap-2 md:mt-0 mr-3 px-3 md:px-3 md:py-2 h-9 text-lg w-auto bg-blue-700 border-none text-white hover:text-gray-200 hover:bg-blue-800 transition duration-200 ease-out border-2 rounded-md hover:ease-in  ">
                Post Property<RiHomeHeartLine/>
              </button>
            </Link>
            <Link to={'/'}>
              <button className="flex items-center justify-center md:gap-10 md:mt-0 mr-3 px-3 md:px-4 md:py-2 h-9 text-lg w-auto text-blue-700 hover:text-white transition duration-200 ease-out border-2 border-blue-700 rounded-md hover:bg-blue-700 hover:ease-in ">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
