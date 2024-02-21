import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios';

const AllProperties = () => {
  const [propertys, setPropertys] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [title , setTitle] =useState("")
 
  const fetchdata =async() =>{
    try {
      let property = await axios.get(`http://localhost:5000/Getproperty?Location=${title}`);
      setPropertys(property.data.propertys)
    } catch (error) {
      console.log(error)
    }
  }

  const reset =async() =>{
    try {
      let property = await axios.get(`http://localhost:5000/Getproperty`);
      setPropertys(property.data.propertys)
     ;
    } catch (error) {
      console.log(error)
    }
  }
  
  const titlesetting = (e)=>{
    setTitle(e.target.value)
    console.log(title)
  }
  
  

  useEffect(() => {
    let fetchProperty = async () => {
      try {
        let property = await axios.get(`http://localhost:5000/Getproperty`);
        setPropertys(property.data.propertys);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };
    fetchProperty();
  },[]);

  return (
    <div className='bg-gray-100'>
      <Navbar />
      
      <div className='flex flex-col'>
       <div className='flex mt-28 justify-center items-center'>
  <input
  className="block h-12 w-96 p-2.5 g-lg-5 ps-10 text-sm border border-gray-300 rounded-full bg-gray-50 outline-none "
  id="default-search"
    type='text'
    placeholder='Search'
    value={title}
    onChange={titlesetting}
  />

  <button
    onClick={fetchdata}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 dark:bg-indigo-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2 h-12"
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
  </button >
  <button onClick={reset} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 dark:bg-indigo-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2 h-12' >Reset</button>
  </div> 
      <div className='w-1/2'>
      {propertys.map((property, index) => (
          <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-full mt-5 px-2'>
            <div className='bg-white flex border border-gray-200 rounded-lg shadow'>
              <a href='#'>
                <img
                  className='rounded-t-lg w-52 l-98'
                  src={property.file}
                  alt='propertyImage'
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
                  href={`/Details/${property._id}`}
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
      </div>
      <Footer />
    </div>
  );
}

export default AllProperties