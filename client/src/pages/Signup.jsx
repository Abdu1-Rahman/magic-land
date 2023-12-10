import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



const Signup = () => {
  const [data,setdata]=useState('')
 const[ddata,setddata]=useState([''])
  const[done,setdone]=useState(true)
  const[success,setsuccess]=useState()

  useEffect(()=>{
    let fetchdata=async()=>{
      try{
         let response=await axios.get('http://localhost:4000/fetch')
         console.log(response.data);
         setddata(response.data)
    }catch(error){
      console.error('error fetching data',error);
    }
    }
    fetchdata()
  },[done])

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
      let response = await axios.post('http://localhost:4000/login', newdata);
  
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
    <div className='flex items-center justify-center mt-28 bg-blue-300'>
      <div className='rounded-md bg-white p-3 w-auto'>
        <h2 className='text-xl font-bold mb-2'>Signup</h2>
    <form onSubmit={handlesubmit} className='flex flex-col'>
      <div className='mb-3 flex flex-col'>
         <label>Username</label>
           <input
             type='text' 
             onChange={handlechange} 
             name='username' 
             placeholder='Enter Username'
             className='border'/>
      </div>
      <div className='mb-3 flex flex-col'>
          <label>E-mail</label>
          <input 
            type='email' 
            onChange={handlechange} 
            name='email' 
            placeholder='Enter Email'
            className=' border'/>
       </div>
       <div className='mb-3 flex flex-col'>
          <label>Password</label>
          <input 
            type='password' 
            onChange={handlechange} 
            name='password' 
            placeholder='Enter Password'
            className='border'/>
       </div>
        <button type='submit' className='rounded p-1 bg-blue-400 text-white'>Signup</button>
        <p>Already have an Account?</p>
        <Link to={'/login'}><button className='rounded p-1 bg-blue-400 text-white w-52'>Login</button></Link>
    </form>
    {

    }
    </div>
</div>

  )
}

export default Signup