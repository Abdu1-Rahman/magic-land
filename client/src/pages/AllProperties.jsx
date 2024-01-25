import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AllProperties = () => {
  const [propertys, setPropertys] = useState([]);
  

  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className='rounded w-80 ml-12 mt-4 bg-white p-8'>
        <h1 className='text-lg'>Find Your Property</h1>
        <form>
          <div className='text-gray-600' >
          <label>
            <input type="radio" name="propertyType" value="Buy"/> Buy
          
            <input type="radio" name="propertyType" value="Rent" className='ml-4' /> Rent
          </label>
          </div>
        </form>
        <h1 className='text-md'>What kind of property you want?</h1>
        <select className='w-52 outline-none bg-slate-100 p-2'>
          <option value="">Select</option>
          <option value="">Residential</option>
          <option value="">commercial</option>
          <option value="">Agricultures</option>
        </select>
        <h1 className='text-md'>Select property type</h1>
        <div className='text-gray-600'>
        <input type="checkbox"/>
         <label className='pb-2' >Flat/Apartment</label><br/>
         <input type="checkbox"/>
         <label >Independent House/Villa</label><br/>
         <input type="checkbox"/>
         <label >Residential Land</label><br/>
         <input type="checkbox"/>
         <label >Studio Apartment</label><br/>
         <input type="checkbox"/>
         <label >Service Apartment</label><br/>
         <input type="checkbox"/>
         <label >Residential Others</label><br/>
         </div>
         <h1 className='text-md'>Search by property ID or title</h1>
         <input type='search' placeholder='Search' className='p-2 outline-none bg-gray-100'/>
      </div>
      <div>
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
      <Footer />
    </div>
  );
}

export default AllProperties