import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import  land2  from '../assets/land2.jpg'
import Footer from '../components/Footer'
import axios from 'axios'

const Home = () => {
    const[propertys,setPropertys] = useState([])
   
    useEffect(() => {
      let fetchProperty = async () => {
        try {
          let property = await axios.get('http://localhost:5000/Getproperty');
          console.log(property);
          setPropertys(property.data.propertys);
        } catch (error) {
          console.error("Error fetching property:", error);
        }
      }
      fetchProperty();
    }, []);

  return (
    <div>
      <Navbar />
      <div className='relative'>
        <img src={land2} alt='pics' className='h-64 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden'></img>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
          <input
            type="search"
            id="default-search"
            className="block w-full p-2.5 g-lg-5 ps-10 text-sm border border-gray-300 rounded-full bg-gray-50 outline-none"
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
      
      <div className='flex'>
        {propertys.map((property,index)=>(
         <div className="w-72 mt-10 ml-8 bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
           <img className="rounded-t-lg" src={property.file} alt="" />
          </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{property.Location}</h5>
          </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{property.description}</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
       </div>
     </div>
))}
</div>



 {/* <div>
      {propertys.map((property, index) => (
        <h2>{property.Location}</h2>
      ))}
    </div> */}
<Footer/>
    </div>
  );


}

export default Home