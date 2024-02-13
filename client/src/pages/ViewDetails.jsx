import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';


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
      }, []);
  return (
    <>
    <div>{data.Location}</div>
    <img
                  className='rounded-t-lg w-full'
                  src={data.file}
                  alt=''
                />
                </>
  )
}

export default ViewDetails