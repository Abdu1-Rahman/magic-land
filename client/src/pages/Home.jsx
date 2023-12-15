import React from 'react'
import Navbar from '../components/Navbar'
import  land2  from '../assets/land2.jpg'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-indigo-300 relative'>
        <img src={land2} alt='pics' className='h-64 w-full object-cover blur-sm'></img>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
          <input
            type="search"
            id="default-search"
            className="block w-full p-2.5 g-lg-5 ps-10 text-sm border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-indigo-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 dark:bg-indigo-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
          >
            <svg
              className="w-4 h-4 text-white"
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
        </div>
      </div>
    </div>
  );


}

export default Home