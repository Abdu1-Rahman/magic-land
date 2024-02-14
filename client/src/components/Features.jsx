import React from 'react'
import { MdManageAccounts } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";

const Features = () => {
  return (
    <div>
        <h6 className="flex gap-2 text-3xl font-medium mt-3 text-gray-800">Features that makes us <div className='text-indigo-700'>Unique</div></h6>
    <span className="block w-24 h-0.5 my-3 bg-blue-400"></span>
    <div className='flex bg-blue-100 py-4'>
    <div >
    <div className='rounded-3xl bg-indigo-100 flex justify-center items-center w-12 h-12 '>
    <MdManageAccounts className='text-indigo-500 w-8 h-8' />
    </div>
    <h6 className="mt-3 text-gray-800">Secure Account Creation</h6>
    <span className="block w-16 h-0.5 my-3 bg-blue-400"></span>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, vero quod consequatur ea officia magni. Totam vel modi quis aut sed nihil, cupiditate itaque dolores delectus laboriosam, corporis tenetur numquam.</p>
    </div>

    <div >
    <div className='rounded-3xl bg-indigo-100 flex justify-center items-center w-12 h-12 '>
    <IoNewspaperOutline className='text-indigo-500 w-8 h-8' />
    </div>
    <h6 className="mt-3 text-gray-800">Rental Privacy Policy</h6>
    <span className="block w-16 h-0.5 my-3 bg-blue-400"></span>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, vero quod consequatur ea officia magni. Totam vel modi quis aut sed nihil, cupiditate itaque dolores delectus laboriosam, corporis tenetur numquam.</p>
    </div>

    <div >
    <div className='rounded-3xl bg-indigo-100 flex justify-center items-center w-12 h-12 '>
    <FaRegHandshake className='text-indigo-500 w-8 h-8' />
    </div>
    <h6 className="mt-3 text-gray-800">Direct Communication</h6>
    <span className="block w-16 h-0.5 my-3 bg-blue-400"></span>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, vero quod consequatur ea officia magni. Totam vel modi quis aut sed nihil, cupiditate itaque dolores delectus laboriosam, corporis tenetur numquam.</p>
    </div>

    <div >
    <div className='rounded-3xl bg-indigo-100 flex justify-center items-center w-12 h-12 '>
    <FaRegClock className='text-indigo-500 w-8 h-8' />
    </div>
    <h6 className="mt-3 text-gray-800">Fast Process</h6>
    <span className="block w-16 h-0.5 my-3 bg-blue-400"></span>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, vero quod consequatur ea officia magni. Totam vel modi quis aut sed nihil, cupiditate itaque dolores delectus laboriosam, corporis tenetur numquam.</p>
    </div>
    </div>
    </div>

    
  )
}

export default Features