import React, { useEffect, useState } from 'react';
import MagicLand from '../assets/MagicLand.png';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { SlCalender } from 'react-icons/sl';
import { IoPeopleOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { MdHome,MdOutlineRealEstateAgent  } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import axios from 'axios';

const AdminNavbar = () => {
const navigate=useNavigate()
  const[users,setUsers] = useState([])
  useEffect(() => {
    let fetchUser = async () => {
  let token=localStorage.getItem('token')
      
  if(!token){
    navigate('/login')

  }
      try {
         
        let user = await axios.get('http://localhost:5000/admin/Getusers', { headers: { Authorization: `Bearer ${token}` } });
        console.log(user);
        setUsers(user.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        navigate('/login')
      }
    }
    fetchUser();
  }, []);
  return (
    <div >

      <div className='fixed navbar shadow-2xl'>
        <nav>
          <div className='bg-white flex flex-col w-64 h-screen'>
            <div className='flex flex-col gap-3 mt-5 justify-center items-center'>
              <img src={MagicLand} className='w-44' alt='magiclandlogo' />
              <hr className='w-52 bg-indigo-100 h-0.5' />
              <ul className='flex flex-col gap-3'>
              <li><Link to={'/admin/dashboard'} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700 '><MdHome className='h-7 w-5 ' />Main Dashboard </Link></li>
              <li><Link to={'/admin/manageproperty'} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><MdOutlineRealEstateAgent />Manage Property</Link></li>
              <li><Link to={''} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><SlCalender className='w-4 h-3' />Bookings</Link></li>
              <li><Link to={'/admin/users'} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><IoPeopleOutline />Users</Link></li>
              <hr className='w-52 bg-indigo-100 h-0.5' />
              <li><Link to={'/admin/message'} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><LuMail />Messages</Link></li>
              <li><Link to={'/admin/profile'} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><CgProfile />Profile</Link></li>
              <li><Link to={'/'} className='flex items-center gap-2 text-gray-400 focus:text-indigo-700'><IoLogOutOutline />Sign Out</Link></li>
              
            </ul>
            </div>
          </div>
        </nav>
       </div >
       <div className='ml-10'>

       <Outlet/>
       </div>
    </div>
  );
}

export default AdminNavbar;
