import React, { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AdminNavbar from '../admincomponents/AdminNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBox from '../admincomponents/SearchBox';

const Update = () => {

  let token=localStorage.getItem('token')
  const {id}= useParams()
    const [image, setimage] = useState();
    const [data, setdata] = useState();
    const [success, setsuccess] = useState();
    const [done, setdone] = useState(true);
    const [properties, setproperties] = useState('')

    useEffect(()=>{
        let fetchProperty =async() =>{
              let property =await axios.get(`http://localhost:5000/admin/edit/${id}`, { headers: { Authorization: `Bearer ${token}` } })
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

  try {
    let response = await axios.put(`http://localhost:5000/admin/edit/${id}`, newdata);
    setdone(!done);
    toast.success('Update successful');

  } catch (error) {
    console.error('Error updating property:', error);
    toast.error('Oops! Something went wrong during the update');
    setsuccess(false);
  }
};

    
    return (
        <div className='flex'>
            <ToastContainer/>
            <AdminNavbar />
            <SearchBox/>
            <div className='flex flex-col mt-20 ml-96'>
            <form className='flex flex-col gap-2 items-center justify-center m-10 shadow-xl' onSubmit={handlesubmit}>
               
                    <img src={properties.file} alt='real estate' className='w-28 h-28'/>
                     <input className='border border-solid border-indigo-700 outline-none' type="text" onChange={handlechange} name='Location' placeholder={properties.Location} />
                     <input className='border border-solid border-indigo-700 outline-none' type="text" onChange={handlechange} name='Price' placeholder={properties.Price} />
                     <input className='border border-solid border-indigo-700 outline-none' type="text" onChange={handlechange} name='description' placeholder={properties.description} />
                     <label className='label'>
                     <FileBase64
                    onDone={(res) => setimage(res.base64)} /><span>Select a file</span>
                    </label>

                <input className='text-white bg-blue-500 rounded p-1' type="submit" />
            </form>
            {success ?
                <h2>Inserted successfully</h2>
                :
                success === false &&
                <h2>Not successful</h2>
            }

           
            </div>
        </div>
    );
};

export default Update;
