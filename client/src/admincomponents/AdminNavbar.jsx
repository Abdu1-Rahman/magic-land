import React from 'react';
import MagicLand from '../assets/MagicLand.png';
import { Link } from 'react-router-dom';
import { SlCalender } from 'react-icons/sl';
import { IoPeopleOutline,IoSettingsOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdHome,MdOutlineRealEstateAgent  } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const AdminNavbar = () => {
  return (
      <div className='fixed navbar shadow-2xl'>
        <nav>
          <div className='bg-white flex flex-col w-64 h-screen'>
            <div className='flex flex-col gap-3 mt-5 justify-center items-center'>
              <img src={MagicLand} className='w-44' alt='magiclandlogo' />
              <hr className='w-52 bg-indigo-100 h-0.5' />
              <ul className='flex flex-col gap-3'>
              <li><Link to={'/dashboard'} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700 '><MdHome className='h-7 w-5 ' />Main Dashboard </Link></li>
              <li><Link to={'/manageproperty'} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><MdOutlineRealEstateAgent />Manage Property</Link></li>
              <li><Link to={''} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><SlCalender className='w-4 h-3' />Bookings</Link></li>
              <li><Link to={'/users'} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><IoPeopleOutline />Users</Link></li>
              <hr className='w-52 bg-indigo-100 h-0.5' />
              <li><Link to={''} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><LuMail />Messages</Link></li>
              <li><Link to={''} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><AiOutlineTransaction />Transactions</Link></li>
              <li><Link to={'/settings'} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><IoSettingsOutline />Settings</Link></li>
              <li><Link to={'/profile'} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><CgProfile />Profile</Link></li>
            </ul>
            </div>
          </div>
        </nav>
       </div>
  );
}

export default AdminNavbar;
