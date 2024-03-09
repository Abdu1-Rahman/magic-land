import axios from 'axios';
import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProperty = () => {
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();
    const [image4, setImage4] = useState();
    const [image5, setImage5] = useState();
    const [data, setData] = useState();
    const [success, setSuccess] = useState();
    const [done, setDone] = useState(true);

    let handlesubmit = async (event) => {
        event.preventDefault();
        let newdata = { ...data, file1: image1, file2: image2, file3: image3, file4: image4, file5: image5 };
        let response = await axios.post('http://localhost:5000/admin/property', newdata);
        setDone(!done);
        if (response.data.status) {
            toast.success('added successfully');
        } else {
            toast.error('failed');
            setSuccess(false);
        }
    };

    let handlechange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };




  return (
    <div className='flex flex-col sm:mt-8 sm:ml-96'>
        <ToastContainer/>
        <form className='flex flex-col gap-4 items-center justify-center m-10 shadow-xl p-8 rounded-lg bg-white' onSubmit={handlesubmit}>
                   <div className='flex flex-wrap'>
                    <div className='flex'>
                    <img src={image1} alt='real estate' className='w-28 h-28 rounded-full' />
                    <label className='flex items-center justify-center w-64 py-2 h-16 px-4 bg-indigo-500 text-white rounded-lg cursor-pointer hover:bg-indigo-600'>
                        <FileBase64  onDone={(res) => setImage1(res.base64)} />
                    </label>
                    </div>
                    <div className='flex'>
                    <img src={image2} alt='real estate' className='w-28 h-28 rounded-full' />
                    <label className='flex items-center justify-center w-64 py-2 h-16 px-4 bg-indigo-500 text-white rounded-lg cursor-pointer hover:bg-indigo-600'>
                        <FileBase64  onDone={(res) => setImage2(res.base64)} />
                    </label>
                    </div>
                    <div className='flex'>
                    <img src={image3} alt='real estate' className='w-28 h-28 rounded-full' />
                    <label className='flex items-center justify-center w-64 py-2 h-16 px-4 bg-indigo-500 text-white rounded-lg cursor-pointer hover:bg-indigo-600'>
                        <FileBase64  onDone={(res) => setImage3(res.base64)} />
                    </label>
                    </div>
                    <div className='flex'>
                    <img src={image4} alt='real estate' className='w-28 h-28 rounded-full' />
                    <label className='flex items-center justify-center w-64 py-2 h-16 px-4 bg-indigo-500 text-white rounded-lg cursor-pointer hover:bg-indigo-600'>
                        <FileBase64  onDone={(res) => setImage4(res.base64)} />
                    </label>
                    </div>
                    <div className='flex'>
                    <img src={image5} alt='real estate' className='w-28 h-28 rounded-full' />
                    <label className='flex items-center justify-center w-64 py-2 h-16 px-4 bg-indigo-500 text-white rounded-lg cursor-pointer hover:bg-indigo-600'>
                        <FileBase64  onDone={(res) => setImage5(res.base64)} />
                    </label>
                    </div>
                  </div>  
                    <input className='border border-solid border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500' type="text" onChange={handlechange} name='Location' placeholder='Location' />
                    <input className='border border-solid border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500' type="text" onChange={handlechange} name='Price' placeholder='Price' />
                    <textarea className='border border-solid border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500' onChange={handlechange} name='description' placeholder='Description'></textarea>
                    <button className='text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg py-2 px-8 focus:outline-none focus:ring-2 focus:ring-indigo-500' type="submit">Submit</button>
                </form>
                {success ? (
                    <h2>Inserted successfully</h2>
                ) : success === false && (
                    <h2>Not successful</h2>
                )}
    </div>
  )
}

export default AddProperty