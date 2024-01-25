import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import land2 from '../assets/land2.jpg';
import Footer from '../components/Footer';
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import WhatsappIcon from '../components/WhatsappIcon';
import HashLoader from 'react-spinners/HashLoader';

const LoaderComponent = ({ loading }) => (
  <div className="flex justify-center items-center h-screen">
    <HashLoader
      color={'#3949ab'}
      loading={loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);

const Home = () => {
  const [propertys, setPropertys] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    let fetchProperty = async () => {
      try {
        let property = await axios.get(`http://localhost:5000/Getproperty?search=${searchTerm}`);
        console.log(property);
        setPropertys(property.data.propertys);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };
    fetchProperty();
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    
        <div>
          <Navbar />
      <WhatsappIcon/>
      <div className="relative">
        <img
          src={land2}
          alt="pics"
          className="h-64 w-full object-cover transition-transform duration-200 ease-in-out transform hover:scale-110 overflow-hidden"
        />
        <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center'>
        <input
                type='search'
                id='default-search'
                className='block w-full p-2.5 g-lg-5 ps-10 text-sm border border-gray-300 rounded-full bg-gray-50 outline-none'
                placeholder='Search'
                value={searchTerm}
                onChange={handleSearchChange}
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
      <Link to={'/allproperties'}><button className='p-3 flex gap-2 text-gray-700 bg-blue-100 hover:bg-blue-200 ml-auto mr-8'>See all properties<FaArrowRightLong className='mt-1'/></button></Link>
      </div>
      <div>
      {loading ? 
        <LoaderComponent loading={loading} />
       : 
      <div className='card-container flex gap-15 overflow-x-auto mx-1 p-6 whitespace-nowrap'>
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
                </p><hr/>

                <div className='flex mt-2 gap-3'>
                <p className='font-bold mt-1'>
                ₹{property.Price}
                </p>
                <a
                  href='#'
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  View Details
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
          </div>
        ))}
      </div>
      }
      <Footer />
      </div>
      
    </div>
  );
};

export default Home;
