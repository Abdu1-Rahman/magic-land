import Navbar from '../components/Navbar'
import React from 'react';
import Shakehand from '../assets/Shakehand.jpg'
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {


  return (
    <div>
      <Navbar/>
      <div className='flex justify-center mb-5 gap-10 '>
      <div>
        <div className='text1 flex justify-start items-center'>
      <h1 className='text-6xl'>CONTACT</h1>
      <h1 className='mt-28 text-right text-7xl font-extrabold text-indigo-700'>Magic <br/>Land</h1>
      </div>
      <form className='flex flex-col justify-center  gap-4'>
        <div className='flex gap-2'>
            <input type='text' placeholder='First Name' className='outline-none p-2 w-full border border-gray-500 placeholder:text-gray-600'/>
             <input type='text' placeholder='Last Name' className='outline-none p-2 w-full border border-gray-500 placeholder:text-gray-600'/>
        </div>
        <div className='flex gap-2'>
          <input type='number' placeholder='Phone' className='outline-none p-2 w-full border border-gray-500 placeholder:text-gray-600'/>
           <input type='email' placeholder='Email' className='outline-none p-2 w-full border border-gray-500 placeholder:text-gray-600'/>
        </div>
  <div className='flex flex-col gap-4'>
    <select className='border border-gray-500 outline-none w-full'>
      <option value="How did you hear about me?" selected="selected"> How did you hear about us?</option>
      <option value="Referral">Referral</option>
      <option value="TV">TV</option>
      <option value="Instagram">Instagram</option>
      <option value="YouTube">YouTube</option>
      <option value="Events">Events</option>
      <option value="Google Search">Google Search</option>
      <option value="Other">Other</option>
    </select>
    <textarea placeholder='Your Message' className='outline-none border p-2 placeholder:text-gray-600 border-gray-500'/>
  </div>

  <button type='submit' className='col-span-2 p-5 border border-gray-500 text-indigo-700 hover:bg-indigo-700 hover:text-white w-44 transition-all duration-300 hover:ease-in-out ease-in-out'>Submit</button>
</form>


      </div>
      <div>
        <img src={Shakehand} alt='real estate' className='shadow-2xl rounded block w-68 h-96 object-cover object-top float-right'></img>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;