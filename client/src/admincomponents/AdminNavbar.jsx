import React from 'react';
import MagicLand from '../assets/MagicLand.png';
import { Link } from 'react-router-dom';
import { SlCalender } from 'react-icons/sl';
import { FaRegAddressBook } from "react-icons/fa";
import { IoPeopleOutline,IoSettingsOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdHome } from "react-icons/md";

const AdminNavbar = () => {
  return (
    <div className='flex'>
      <div className='navbar'>
        <nav>
          <div className='bg-white flex flex-col w-64 h-screen'>
            <div className='flex flex-col gap-3 mt-5 justify-center items-center'>
              <img src={MagicLand} className='w-44' />
              <hr className='w-52 bg-indigo-100 h-0.5' />
              <ul className='flex flex-col gap-3'>
              <li><Link to={'/dashboard'} className='flex items-center gap-2'><MdHome className='h-7 w-5' />Main Dashboard </Link></li>
              <li><Link to={''} className='flex items-center gap-2'><SlCalender className='w-4 h-3' />Bookings</Link></li>
              <li><Link to={''} className='flex items-center gap-2'><FaRegAddressBook />Client</Link></li>
              <li><Link to={''} className='flex items-center gap-2'><IoPeopleOutline />User</Link></li>
              <hr className='w-52 bg-indigo-100 h-0.5' />
              <li><Link to={''} className='flex items-center gap-2'><LuMail />Messages</Link></li>
              <li><Link to={''} className='flex items-center gap-2'><AiOutlineTransaction />Transactions</Link></li>
              <li><Link to={''} className='flex items-center gap-2'><IoSettingsOutline />Settings</Link></li>
            </ul>
            </div>
          </div>
        </nav>
       </div>

      <div className='flex-grow'></div>
       <div className='search-box bg-white mt-7 mr-3 p-1 h-10 rounded-full flex'>
        <input
          type="search"
          id="default-search"
          className="block w-full h-8 p-2 g-lg-5 ps-9 text-sm rounded-full bg-gray-100 relative"
          placeholder="Search..."
          required
        />
        <button className='absolute right-56 top-11 mr-14'>
          <svg
            className="search-icon w-4 h-3 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
        <button className='bell-icon ml-3 mr-4 w-2'>
          <svg className="w-6 h-6 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"/>
          </svg>
        </button>
        <button
          type="submit"
          className="text-white bg-blue-900 focus:ring-4 font-medium rounded-full text-sm px-3 py-2 ml-2">AP
        </button>
      </div>
    </div>
  );
}

export default AdminNavbar;
