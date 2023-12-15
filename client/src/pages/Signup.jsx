import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FcGoogle } from "react-icons/fc";



const Signup = () => {
  const [data,setdata]=useState('')
  const[done,setdone]=useState(true)
  const[success,setsuccess]=useState()

  useEffect(() => {
    let fetchdata = async () => {
      try {
        let response = await axios.get('http://localhost:5000/fetch');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
    fetchdata();
  }, [done]);
  

  //handlechange

  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
    console.log(data);
  }
    
  //handlesubmit

  let handlesubmit = async (event) => {
    event.preventDefault();
  
    try {
      let newdata = { ...data };
      console.log(newdata);
      let response = await axios.post('http://localhost:5000/add', newdata);
  
      console.log(response.data.status);
      setdone(!done);
  
      if (response.data.status) {
        setsuccess(true);
        toast.success('Signup successful');
      } else {
        setsuccess(false);
        toast.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setsuccess(false);
      toast.error('Error during signup');
    }
  };
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className='justify-center items-center rounded-md shadow-2xl bg-white p-3 w-64'>
        <h2 className='text-xl font-bold mb-2'>Signup</h2>
        <form onSubmit={handlesubmit} className='flex flex-col'>
          <div className='mb-3 flex flex-col'>
            <label>Username</label>
            <input
              type='text' 
              onChange={handlechange} 
              name='username' 
              placeholder='Enter Username'
              className='border'
            />
          </div>
          <div className='mb-3 flex flex-col'>
            <label>E-mail</label>
            <input 
              type='email' 
              onChange={handlechange} 
              name='email' 
              placeholder='Enter Email'
              className=' border'
            />
          </div>
          <div className='mb-3 flex flex-col'>
            <label>Password</label>
            <input 
              type='password' 
              onChange={handlechange} 
              name='password' 
              placeholder='Enter Password'
              className='border'
            />
          </div>
          <button type='submit' className='rounded p-1 w-56 bg-indigo-700 text-white'>Get started</button>
          <p>Already have an Account?<Link to={'/login'} className='text-indigo-700'>Log in</Link></p>
        </form>
        
        {success ?
          <h2>Inserted successfully</h2>
          : success === false &&
          <h2>Not successful</h2>
        }
      </div>
    </div>
  );
  
}

export default Signup