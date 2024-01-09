import React, { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom
import AdminNavbar from '../admincomponents/AdminNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBox from '../admincomponents/SearchBox';
import './prop.css'

const ManageProperty = () => {

    const [image, setimage] = useState();
    const [data, setdata] = useState();
    const [success, setsuccess] = useState();
    const [done, setdone] = useState(true);
    const [Rdata,setRdata]=useState([''])
    const [properties, setproperties] = useState([''])

    useEffect(()=>{
        let fetchProperty =async() =>{
              let property =await axios.get('http://localhost:5000/admin/property')
        console.log(property);
        setproperties(property.data)
}
fetchProperty()
},[done])


    // handlechange

    let handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
        console.log(data)
    }


    // handlesubmit

    let handlesubmit = async (event) => {
        event.preventDefault();
        let newdata = {
            ...data,
            file: image
        };
        console.log(newdata);
        let response = await axios.post('http://localhost:5000/admin/property', newdata);
        console.log(response.data.status);
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
        console.log(id);
        try{
    
            await axios.delete(`http://localhost:5000/admin/property/${id}`)
            toast('successful')
            setdone(!done)
    
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className='flex'>
            <ToastContainer/>
            <AdminNavbar />
            <SearchBox/>
            <div className='flex flex-col mt-8 ml-96'>
            <form className='flex flex-col gap-2 items-center justify-center m-10 shadow-xl' onSubmit={handlesubmit}>
               
                    <img src={image} alt='real estate' className='w-28 h-28'/>
                     <input className='border border-solid border-indigo-700 outline-none' type="text" onChange={handlechange} name='Location' placeholder='Location' />
                     <input className='border border-solid border-indigo-700 outline-none' type="text" onChange={handlechange} name='Price' placeholder='Price' />
                     <input className='border border-solid border-indigo-700 outline-none' type="text" onChange={handlechange} name='description' placeholder='description' />
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



<div className='flex'>
        {properties.map((item)=>(
         <div key={item._id} className="w-72 mt-10 ml-8 bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
           <img className="rounded-t-lg" src={item.file} alt="" />
          </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{item.Location}</h5>
          </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.Price}</p>
        <h2>{item.description}</h2>
                        <Link to={`/update/${item._id}`}>
                               <button className='bg-indigo-700 text-white rounded p-1 mr-2'>edit</button>
                        </Link>
                        <button className='bg-indigo-700 text-white rounded p-1' onClick={() => { handledelete(item._id) }}>delete</button>
       </div>
     </div>
     ))}
     </div>

            {/* <div className='flex' >
                {properties.map((item) => (
                    <div key={item._id} className='w-fit p-5  text-gray-500 m-auto text-center mt-4 mb-3 shadow-xl'>
                        <img src={item.file} className='w-28 h-28' alt="" />
                        <h2>{item.Location}</h2>
                        <h2>{item.Price}</h2>
                        <h2>{item.description}</h2>
                        <Link to={`/update/${item._id}`}>
                               <button className='bg-indigo-700 text-white rounded p-1 mr-2'>edit</button>
                        </Link>
                        <button className='bg-indigo-700 text-white rounded p-1' onClick={() => { handledelete(item._id) }}>delete</button>
                    </div>
                ))}
            </div> */}
            </div>
        </div>
    );
};

export default ManageProperty;
