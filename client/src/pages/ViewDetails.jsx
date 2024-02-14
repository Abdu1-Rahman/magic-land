import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const ViewDetails = () => {
    const[data,setData] = useState({})
    const {id}= useParams()

    useEffect(() => {
        let fetchSingleProperty = async () => {
          try {
            let Single = await axios.get(`http://localhost:5000/Getproperty/${id}`);
            setData(Single.data);
         
          } catch (error) {
            console.error('Error fetching property:', error);
          }
        };
        fetchSingleProperty();
      });
  return (
    <>
    <Navbar />
    <div className='flex py-28 bg-gray-100'>
      <div className='flex bg-gray-200'>
    <img
         className='rounded-t-lg w-1/3'
         src={data.file}
         alt=''
         />
         <div className='ml-10'>
         {data.description}

         </div>
         </div>
         </div>
    <Footer/>
     </>
  )
}

export default ViewDetails