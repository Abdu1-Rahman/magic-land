import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import land2 from '../assets/land2.jpg';
import Footer from '../components/Footer';
import axios from 'axios';
import './Home.css'

const Home = () => {
  const [propertys, setPropertys] = useState([]);

  useEffect(() => {
    let fetchProperty = async () => {
      try {
        let property = await axios.get('http://localhost:5000/Getproperty');
        console.log(property);
        setPropertys(property.data.propertys);
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };
    fetchProperty();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='relative'>
        <img
          src={land2}
          alt='pics'
          className='h-64 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden'
        />
        <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center'>
          <input
            type='search'
            id='default-search'
            className='block w-full p-2.5 g-lg-5 ps-10 text-sm border border-gray-300 rounded-full bg-gray-50 outline-none'
            placeholder='Search'
            required
          />
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 dark:bg-indigo-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2'
          >
            <svg
              className='w-4 h-4 text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='ml-3'>
      <h6 className='text-3xl font-medium mt-3 text-gray-800'>Best Properties For Sale in Kerala</h6>
      <span className='block w-24 h-0.5 my-3 bg-blue-400'></span>
      </div>
      <div className='card-container flex gap-15 overflow-x-auto mx-1 p-20 whitespace-nowrap'>
        {propertys.map((property, index) => (
          <div
            key={index}
            className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-5 px-2'
          >
            <div className='bg-white border border-gray-200 rounded-lg shadow'>
              <a href='#'>
                <img
                  className='rounded-t-lg w-full'
                  src={property.file}
                  alt=''
                />
              </a>
              <div className='p-4'>
                <a href='#'>
                  <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 '>
                    {property.Location}
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {property.description}
                </p>
                <a
                  href='#'
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Read more
                  <svg
                    className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
