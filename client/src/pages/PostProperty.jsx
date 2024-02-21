import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import LoginNav from '../components/LoginNav'

const PostProperty = () => {
    let token=localStorage.getItem('token')

    const [image, setimage] = useState();
    const [data, setdata] = useState();
    const [success, setsuccess] = useState();
    const [done, setdone] = useState(true);
    const [Rdata,setRdata]=useState([''])
    const [properties, setproperties] = useState([''])

    useEffect(()=>{
        let fetchProperty =async() =>{
              let property =await axios.get('http://localhost:5000/admin/property', { headers: { Authorization: `Bearer ${token}` } })
        setproperties(property.data)
}
fetchProperty()
},[done])


    // handlechange

    let handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }


    // handlesubmit

    let handlesubmit = async (event) => {
        event.preventDefault();
        let newdata = {
            ...data,
            file: image
        };
        let response = await axios.post('http://localhost:5000/admin/property', newdata);
        setdone(!done);
        if (response.data.status) {
            toast.success('added successfully')
        } else {
             toast.error('failed')
             setsuccess(false);
        }
    };

    // handledelete

    let handledelete=async (id)=>{
        try{
    
            await axios.delete(`http://localhost:5000/admin/property/${id}`, { headers: { Authorization: `Bearer ${token}` } })
            toast('successful')
            setdone(!done)
    
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className='flex flex-col sm:flex-row'>
            <LoginNav/>
        <ToastContainer />
        <div className='flex flex-col sm:mt-16 sm:ml-96'>
    <form className='flex flex-col gap-4 items-center justify-center m-10 shadow-xl p-8 rounded-lg bg-white' onSubmit={handlesubmit}>
        <img src={image} alt='real estate' className='w-28 h-28 rounded-full' />
        <input className='border border-solid border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500' type="text" onChange={handlechange} name='Location' placeholder='Location' />
        <input className='border border-solid border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500' type="text" onChange={handlechange} name='Price' placeholder='Price' />
        <textarea className='border border-solid border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500' onChange={handlechange} name='description' placeholder='Description'></textarea>
        <label className='flex items-center justify-center w-98 py-2 px-4 bg-indigo-500 text-white rounded-lg cursor-pointer hover:bg-indigo-600'>
            <FileBase64  onDone={(res) => setimage(res.base64)} />
        </label>
        <button className='text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg py-2 px-8 focus:outline-none focus:ring-2 focus:ring-indigo-500' type="submit">Submit</button>
    </form>

            {success ? (
                <h2>Inserted successfully</h2>
            ) : success === false && (
                <h2>Not successful</h2>
            )}

            <div className='flex flex-wrap'>
                {properties.map((item) => (
                    <div key={item._id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-10 ml-8 bg-white border border-gray-200 rounded-lg shadow'>
          <a href="#">
           <img className="rounded-t-lg" src={item.file} alt="" />
          </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{item.Location}</h5>
          </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.Price}</p>
        <h2>{item.description}</h2>
                        <Link to={`/admin/update/${item._id}`}>
                               <button className='bg-indigo-700 text-white rounded p-1 mr-2'>edit</button>
                        </Link>
                        <button className='bg-indigo-700 text-white rounded p-1' onClick={() => { handledelete(item._id) }}>delete</button>
       </div>
     </div>
     ))}
     </div>
            </div>
        </div>
    );
};

export default PostProperty