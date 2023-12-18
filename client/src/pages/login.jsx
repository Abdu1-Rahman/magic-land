import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
 
  const[data,setdata]=useState()
  const[success,setsuccess]=useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false);


  let handlechange =(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
    
  }

  // const navigate = useNavigate()

  let handlesubmit=async(event)=>{
    event.preventDefault()

    let response=await axios.post('http://localhost:5000/admin/login',data)
    console.log(response.data.status);
    if(response.data.status){
      console.log('succesfull');
    }
    else{
      console.log('unsuccesful');
      setsuccess(true)
    }

    
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  

  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='rounded shadow-2xl bg-white p-3 w-auto'>
      <h2 className='text-xl text-slate-900 font-bold mb-2'>Login</h2>
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
        <label>Password</label>
        <div className='flex border'>
        <input 
          type={passwordVisible ? 'text' : 'password'}
          onChange={handlechange} 
          name='password' 
          placeholder='Enter Password'
          className='border'/>
           <div className='cursor-pointer' onClick={togglePasswordVisibility}>{passwordVisible ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-7 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
           : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-7 h-5">
           <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
         </svg>
         }</div>
     </div></div>
     {success &&
     
     <h2 className='text-red-500'>invalid username or password!</h2>
     }
      <Link to={'/dashboard'}><button type='submit' className='rounded p-1 bg-indigo-700 text-white w-56'>Login</button></Link>
  </form>
  </div>
</div>
  )
}

export default Login