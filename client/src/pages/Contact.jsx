import Navbar from '../components/Navbar'
import React, { useState } from 'react';
import Shakehand from '../assets/Shakehand.jpg'
import Footer from '../components/Footer';
import './Contact.css';
import axios, { formToJSON } from 'axios';

const Contact = () => {

  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    howDidYouHear: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleMessageSubmit = async (e) => {
  
    try {
      const response = await axios.post(`http://localhost:5000/admin/message` ,{data : JSON.stringify(formData)});
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  return (
    <div>
      <Navbar />
      <div className='flex flex-col md:flex-row justify-center items-center mb-5 md:ml-5'>
        <div className='md:w-1/2'>
          <div className='text1 flex flex-col md:flex-row justify-center items-center md:justify-start'>
            <h1 className='text-6xl mb-4 md:mb-0'>CONTACT</h1>
            <h1 className='md:text-right text-4xl md:text-7xl font-extrabold text-indigo-700'>Magic <br />Land</h1>
          </div>
          <form className='flex flex-col justify-center items-center md:items-start gap-4' onSubmit={handleMessageSubmit}>
            <div className='flex gap-2'>
              <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} placeholder='First Name' className='outline-none p-2 w-full border border-gray-500 placeholder:text-gray-600' />
              <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Last Name' className='outline-none p-2 w-full border border-gray-500 placeholder:text-gray-600' />
            </div>
            <div className='flex gap-2'>
              <input type='number' name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone' className='outline-none p-2 w-full border border-gray-500 placeholder:text-gray-600' />
              <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' className='outline-none p-2 w-full border border-gray-500 placeholder:text-gray-600' />
            </div>
            <div className='flex flex-col gap-4 w-full md:w-auto'>
              <select name='howDidYouHear' value={formData.howDidYouHear} onChange={handleChange} className='border border-gray-500 outline-none w-full'>
                <option value="How did you hear about me?" selected disabled> How did you hear about us?</option>
                <option value="Referral">Referral</option>
                <option value="TV">TV</option>
                <option value="Instagram">Instagram</option>
                <option value="YouTube">YouTube</option>
                <option value="Events">Events</option>
                <option value="Google Search">Google Search</option>
                <option value="Other">Other</option>
              </select>
              <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Your Message' className='outline-none border p-2 placeholder:text-gray-600 border-gray-500 w-full' />
            </div>
            <button type='submit' className='col-span-2 p-5 border border-gray-500 text-indigo-700 hover:bg-indigo-700 hover:text-white w-44 transition-all duration-300 hover:ease-in-out ease-in-out'>Submit</button>
          </form>
        </div>
        <div className='md:w-1/2 mb-6 md:mb-0 ml-10 '>
          <img src={Shakehand} alt='real estate' className='shadow-2xl rounded block w-80 md:w-68 h-88 object-cover object-top' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;